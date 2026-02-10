# Rock The World

Production-ready React application built with Vite and Tailwind CSS.

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **ESM** - Modern JavaScript modules

## Project Structure

```
Rock-The-World/
├── src/
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind imports
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## Development

The dev server runs on `http://localhost:3000` and includes:
- Hot Module Replacement (HMR)
- Fast Refresh for React
- Automatic browser opening

## Building for Production

```bash
npm run build
```

Optimized output in `/dist` directory ready for deployment.

---

Built by ReachFlow Studio
