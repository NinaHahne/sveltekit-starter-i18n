# Figures SvelteKit Starter

This is a **SvelteKit starter template** for new projects. It includes:

- ✅ **SvelteKit** with TypeScript
- ✅ **TailwindCSS** for styling
- ✅ **ESLint & Prettier** for code formatting
- ✅ **Example routing (`/about`)** for structure reference
- ✅ **Reusable utilities (`src/lib/`)**
- ✅ **Uses `@sveltejs/adapter-static` for static site generation**

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

By default, this uses **static site generation** (`adapter-static`).

For Netlify:

```bash
npm install -D @sveltejs/adapter-netlify
```

Then update `svelte.config.js`.

---

## 📷 Image Optimization (WebP, AVIF)

This template supports **automatic image optimization** using `vite-imagetools`. It allows you to convert images to WebP/AVIF at build time.

### Install `vite-imagetools`

```bash
npm install vite-imagetools
```

### Configure `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [imagetools()],
});
```

### Usage in Svelte components

```svelte
<script>
  import img from '$lib/images/sample.jpg?w=500&format=webp';
</script>

<img src={img} alt="Optimized Image" />
```

✅ **Pros:** No extra server needed, works seamlessly with `adapter-static`.

---

## ❓ Questions?

This template is designed for **flexibility**. Modify as needed! 🚀
