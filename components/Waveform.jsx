"use client";

import { useEffect, useRef } from "react";

const COLOR = "rgba(230,57,70,";

export default function Waveform() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceMotion = motionQuery.matches;

    let animationId;
    let time = 0;
    let w = 0;
    let h = 0;

    // Pre-generate a static waveform shape from layered frequencies
    const NUM_SAMPLES = 800;
    const samples = new Float32Array(NUM_SAMPLES);
    for (let i = 0; i < NUM_SAMPLES; i++) {
      const n = i / NUM_SAMPLES;
      samples[i] =
        Math.sin(n * 12.4) * 0.30 +
        Math.sin(n * 27.8) * 0.20 +
        Math.sin(n * 44.1) * 0.15 +
        Math.sin(n * 63.5) * 0.10 +
        Math.sin(n * 91.2) * 0.08 +
        Math.sin(n * 118.0) * 0.05 +
        Math.sin(n * 155.3) * 0.04 +
        Math.sin(n * 201.7) * 0.03 +
        Math.sin(n * 7.1) * 0.15;
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Density envelope — high in center, tapering to edges
    const density = (norm) => {
      const x = (norm - 0.5) * 2;
      return Math.max(0, 1 - x * x);
    };

    const draw = () => {
      if (!w || !h) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      const centerY = h / 2;
      const mobile = window.innerWidth < 768;
      const maxH = mobile ? h * 0.35 : h * 0.42;
      const barW = 1;
      const minGap = 2;
      const maxGap = mobile ? 12 : 10;

      // Very slow amplitude breathing
      const breathe = reduceMotion ? 1 : 1 + Math.sin(time * 0.008) * 0.06;

      let x = 0;
      while (x < w) {
        const norm = x / w;
        const d = density(norm);

        // Variable spacing: tight in center, wide at edges
        const gap = minGap + (1 - d) * maxGap;

        // Sample the pre-generated waveform
        const sampleIdx = Math.floor(norm * (NUM_SAMPLES - 1));
        const raw = Math.abs(samples[sampleIdx]);

        // Scale by envelope and breathing
        const barH = raw * maxH * d * breathe;

        if (barH > 0.5) {
          ctx.fillStyle = COLOR + (0.7 * d).toFixed(3) + ")";
          ctx.fillRect(Math.round(x), Math.round(centerY - barH), barW, Math.round(barH * 2));
        }

        x += barW + gap;
      }

      // Thin center axis line
      ctx.fillStyle = COLOR + "0.25)";
      ctx.fillRect(0, Math.round(centerY), w, 1);

      if (!reduceMotion) {
        time += 1;
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
