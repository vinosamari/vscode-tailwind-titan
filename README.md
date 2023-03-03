
# Tailwind Titan - Nuxt CSS Transformer

Tailwind Titan is a Visual Studio Code extension that detects if a Nuxt.js project is using Tailwind CSS and transforms the custom Tailwind classes into optimized vanilla CSS.

## Features

- Detects if Tailwind CSS is installed in the project
- Transforms the CSS code into optimized CSS

## Requirements

- Project has initialized tailwind with `npx tailwindcss init`
- Visual Studio Code version 1.60.0 or higher
- TailwindCSS 4.x

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

<!-- 
## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\) -->

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

- None yet

## Extension Settings
- Plug and Play

## Known Issues
- Checks for tailwind.config.js file so if tailwind is not initialized on project,it will say it's not installed.

## Release Notes


### 0.0.1

Initial release 

### 0.0.2

Minor code refactoring


## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
