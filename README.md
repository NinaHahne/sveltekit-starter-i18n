# Figures SvelteKit Starter

This is a **SvelteKit starter template** for new projects. It includes:

- ✅ **SvelteKit** with TypeScript
- ✅ **TailwindCSS** for styling
- ✅ **ESLint & Prettier** for code formatting
- ✅ **Example routing (`/about`)** for structure reference
- ✅ \*\*Reusable utilities (`src/lib/`)

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start the development server

```bash
npm run dev
```

Then visit `http://localhost:5173`.

---

## 📂 Project Structure

```
src/
├── routes/             # SvelteKit pages
│   ├── +layout.svelte  # Global layout
│   ├── +page.svelte    # Homepage
│   ├── about/          # Example page
│   │   ├── +page.svelte
├── lib/                # Shared utilities
│   ├── stores/         # Global state management
│   ├── utils/          # Helper functions
│   ├── types/          # TypeScript types
├── styles/             # Tailwind styles
│   ├── app.css
```

---

## 📌 Customization

### Tailwind

TailwindCSS is preconfigured. Modify styles in:

```bash
src/styles/app.css
tailwind.config.ts
```

### Linting & Formatting

ESLint and Prettier are included:

```bash
npm run lint
```

### Deployment

By default, this uses **Node.js adapter**. For Netlify:

```bash
npm install -D @sveltejs/adapter-netlify
```

Then update `svelte.config.js`.

---

## ❓ Questions?

This template is designed for **flexibility**. Modify as needed! 🚀
