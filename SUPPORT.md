# Support Guide

This guide explains the project scripts, file structure, and how to split content into multiple paths/routes.

## Scripts

From package.json:

- `npm run dev`
  - Starts the local Vite dev server with hot reload. Use this while editing.
- `npm run build`
  - Builds the production bundle into the `dist/` folder.
- `npm run preview`
  - Serves the production build locally for final checks.
- `npm run lint`
  - Runs ESLint to catch common JavaScript/React errors.

## Current Structure

- `src/App.jsx`
  - Main React UI layout and sections.
- `src/data.js`
  - All content (experience, education, skills, etc.) in one place.
- `src/index.css`
  - Tailwind theme tokens and base styles.

## How to Split Content Into Multiple Paths (Routes)

Right now, all sections are rendered on a single page. If you want separate paths like:

- `/experience`
- `/education`
- `/skills`
- `/publications`

You can use React Router.

### Step 1: Install React Router

```bash
npm install react-router-dom
```

### Step 2: Create Pages

Create one file per route inside `src/pages/`:

- `src/pages/Experience.jsx`
- `src/pages/Education.jsx`
- `src/pages/Skills.jsx`
- `src/pages/Publications.jsx`

Each file can render just the section you want.

### Step 3: Set Up Routes

Update `src/App.jsx` to use a router:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Publications from "./pages/Publications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Step 4: Update Navigation Links

Change your nav links from anchors (`#section`) to routes:

```jsx
import { Link } from "react-router-dom";

<Link to="/experience">Experience</Link>
```

## GitHub Pages Routing Note

For GitHub Pages, routing needs a `basename`. If your repo is named `porfolio`, update `vite.config.js`:

```js
export default defineConfig({
  base: "/porfolio/",
  // ...
});
```

And wrap router with a base URL:

```jsx
<BrowserRouter basename="/porfolio">
```

If your GitHub Pages repo is `ChandrashekarCR.github.io`, use `/` as the base.

## Want Me To Implement This?

If you want, I can:
- Add React Router and create pages
- Move each section into its own page
- Update the navbar and layout
- Ensure GitHub Pages routing works
