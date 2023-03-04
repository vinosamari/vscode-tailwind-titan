
# Tailwind Titan - Nuxt CSS Transformer

Tailwind Titan is a Visual Studio Code extension that detects if a Nuxt.js project is using Tailwind CSS and transforms the custom Tailwind classes into optimized vanilla CSS. It was made out of the need to solve the issue of Tailwind styles not being shown on static site generation (with `npm run generate`). [A few issues](https://github.com/nuxt-modules/tailwindcss/issues/55) have been opened but the solutions suggested [haven't worked all the time.](https://github.com/nuxt-modules/tailwindcss/issues/623) This extension will create a `/<rootDir>/assets/css/global.css` file containing vanilla css representations of the tailwind classes in the components and pages as a hack for bypassing the UI framework.

### [NOTE:] THIS PROJECT IS IN ACTIVE DEVELOPMENT. REFER TO THE GIHUB REPOSITORY OR PROJECT WIKI FOR MORE DETAILS.

## Features

- Detects if Tailwind CSS is installed in the project.
- Transforms the custom tailwind code into optimized vanilla CSS.

## Requirements

- Project has initialized tailwind with `npx tailwindcss init`
- Visual Studio Code v^1.76.0
- TailwindCSS v^4.x

## Installation

1. Open Visual Studio Code
2. Go to the Extensions view (View > Extensions)
3. Search for "Tailwind Titan"
4. Click Install to install the extension

## Usage

1. Open a Nuxt.js project that uses Tailwind CSS
2. Run the "Check & Transform Tailwind CSS" command in the Command Palette (Ctrl/Cmd + Shift + P)
3. If Tailwind CSS is detected, the CSS code will be transformed into optimized CSS automatically and saved in a temporary file location to be moved to the path of your choice.

## License

This extension is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues or have any feature requests, please file an issue on the [GitHub repository](https://github.com/vinosamari/vscode-tailwind-titan).
# tailwind-titan README

## Requirements

- None yet

## Extension Settings
- Plug and Play

## Known Issues
- Considers a project invalid if `tailwind.config.js` not available even if tailwind is in use in components and pages.
- Ignores styles in class attributes (For now.)

## Release Notes


### 0.0.1

Initial release 

### 0.0.2

Minor code refactoring

**Enjoy!**
