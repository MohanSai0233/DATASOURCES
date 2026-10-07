# Open Satellite Lab | Project Cyclone

An interactive browser based dashboard for exploring open satellite datasets and cyclone data workflows.

[Open the app](index.html) · [Explore the dataset list](js/data.js) · [View the original single file source](DATA_SOURCES.html)

## Contents

- [Getting started](#getting-started)
- [Explore the app](#explore-the-app)
- [Project structure](#project-structure)
- [Technology and loading order](#technology-and-loading-order)
- [Data and sources](#data-and-sources)
- [Notes](#notes)

## Getting started

The app uses CDN hosted libraries and browser loaded JavaScript. Open it through a local HTTP server so Babel can load the separated JSX files. No build step or package installation is included in this project.

1. Start any static HTTP server with this folder as its document root.
2. Open the local address provided by that server, ending in `/index.html`.
3. Keep an internet connection available for the CDN libraries and Google Fonts.

> Opening `index.html` as a `file://` URL may prevent Babel from loading external script files.

## Explore the app

Use the navigation menu to switch between the dashboard, dataset explorer, cyclone lab, and project builder. On smaller screens, the navigation adapts to a horizontal menu.

<details>
<summary><strong>Dashboard</strong> — overview and shortcuts</summary>

The dashboard shows dataset and access summaries, plus cards that open the other app sections.

</details>

<details>
<summary><strong>Dataset Explorer</strong> — search, filter, and inspect datasets</summary>

- Search by dataset name or tags.
- Filter by AI readiness, beginner difficulty, or radar/SAR type.
- Select a dataset card to see its details and access links.

</details>

<details>
<summary><strong>Cyclone Data Lab</strong> — browse the cyclone data pipeline</summary>

Select a phase in the cyclone timeline to view the datasets associated with it, from environment and genesis through landfall and flooding.

</details>

<details>
<summary><strong>Project Builder</strong> — generate a suggested project architecture</summary>

Choose a primary interest and skill level, then select **Generate Project** to display a suggested architecture, required datasets, tools, and workflow hint.

</details>

## Project structure

```text
project-cyclones/
├── index.html                  # Page shell, root element, and ordered script references
├── DATA_SOURCES.html           # Original single file source, retained for comparison
├── PROBLEM STATEMENT.png       # Project reference image
├── css/
│   └── style.css               # Existing custom CSS
└── js/
    ├── tailwind.config.js      # Existing Tailwind configuration
    ├── runtime.js              # React hook bindings
    ├── icons.js                # SVG icon components
    ├── data.js                 # Research dataset
    ├── components.js           # Badge and Card components
    ├── dashboard.js            # Dashboard view
    ├── explorer.js             # Dataset Explorer view
    ├── cyclone-lab.js          # Cyclone Data Lab view
    ├── project-builder.js      # Project Builder view
    └── app.js                  # App component and React mount
```

## Technology and loading order

This is a static HTML, CSS, and JavaScript project. It uses React 18, React DOM 18, Babel Standalone, and Tailwind CSS through their existing CDN references. There is no npm package manifest or build configuration.

The scripts in `index.html` are ordered by their dependencies: Tailwind and its configuration, React and React DOM, Babel, then the app's runtime, icons, data, components, views, and final app mount.

## Data and sources

The dataset records live in [`js/data.js`](js/data.js). Each record includes its descriptive metadata and source/access URLs. Use the links in the app's dataset details to visit the listed providers.

## Notes

- The original source file [`DATA_SOURCES.html`](DATA_SOURCES.html) is retained unchanged.
- The separated files are loaded directly by the browser; no bundler is required.
- The CDN libraries and fonts require internet access.
