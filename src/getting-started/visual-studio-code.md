---
title: Visual Studio Code
next: false
---

## Using Visual Studio Code for Development

Visual Studio Code is our chosen IDE for its robust features, flexibility, and extensive support for extensions. This guide will help you optimize VSCode for efficient development.

## Installation

1. **Download VSCode**: Visit the [official Visual Studio Code website](https://code.visualstudio.com/) and download the version suitable for your operating system.

## Configuring VSCode for Flutter

To ensure that Visual Studio Code is optimally set up for Flutter development, particularly when using FVM, specific configurations need to be applied. These settings help manage project dependencies, organize imports, and exclude certain files from the editor's watch scope to improve performance and usability.

### Essential Settings

Update your `settings.json` in VSCode as follows to align with our development standards:

```json
{
  "dart.flutterSdkPath": ".fvm/versions/3.19.6", // Example version
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll": true
  },
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/Thumbs.db": true,
    "**/*.g.dart": true,
    "**/.fvm": true,
    "**/.dart_tool": true,
    "**/.idea": true,
    "**/build": true,
    "**/fastlane": true,
    "codemagic.yaml": true,
    "Gemfile*": true,
    ".flutter-plugins": true,
    ".flutter-plugins-dependencies": true,
    "custom_lint.log": true,
    "**/*.tailor.dart": true
  },
  "search.exclude": {
    "/.fvm": true,
    "/.dart_tool": true,
    "/.idea": true,
    "/build": true,
    "**/fastlane": true,
    "codemagic.yaml": true,
    "Gemfile*": true,
    "**/*.tailor.dart": true
  },
  "files.watcherExclude": {
    "/.fvm": true,
    "/.dart_tool": true,
    "/.idea": true,
    "/build": true,
    "**/fastlane": true,
    "codemagic.yaml": true,
    "Gemfile*": true
  },
  "runOnSave.commands": [
    {
      "globMatch": "**/assets/**",
      "command": "flutter.hotReload",
      "runIn": "vscode"
    }
  ]
}
```

Key Configuration Details

  • Flutter SDK Path: Set to use a specific version managed by FVM, ensuring all team members are aligned with the same Flutter version.
  • Code Actions on Save: Automatically organizes imports and applies fixes on file save, streamlining coding consistency and cleanliness.
  • File and Search Exclusions: Excludes build directories, version control artifacts, and other non-essential files from VSCode’s watch scope, improving editor performance and search efficiency.
  • Run Commands on File Save: Configures automatic actions like hot reload on saving files within specific directories, enhancing development workflow. For example, setting up the IDE to automatically trigger Flutter's hot reload when files in the `assets` directory are saved ensures that any changes to resources are immediately reflected in the application.

Applying these settings will help maintain a clean, efficient, and standardized development environment for all project team members using Visual Studio Code for Flutter projects.

## Recommended VSCode Extensions

To enhance your productivity and streamline your development workflow in Visual Studio Code, we recommend a set of extensions that complement our projects. These extensions support various aspects of development, from code management to environment setup.

### Version Control and Collaboration

- **Git Graph** (`mhutchie.git-graph`):
  - **Purpose**: Visualize branch history and repository status using a graphical representation.
  - **Benefits**: Offers a clear and interactive overview of commits, branches, and merges, improving your ability to manage versions and collaborate.
  - **Marketplace Link**: [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

### Environment Management

- **DotENV** (`mikestead.dotenv`):
  - **Purpose**: Syntax highlighting for `.env` files, which are used to manage project environment variables.
  - **Benefits**: Makes it easier to read and manage environment configuration files, reducing errors and improving setup time.
  - **Marketplace Link**: [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

### Code Organization

- **Comment Anchors** (`exodiusstudios.comment-anchors`):
  - **Purpose**: Helps you navigate and organize your code by inserting anchors (like TODO, FIXME) that you can quickly jump to.
  - **Benefits**: Streamlines working with codebases by allowing developers to mark important sections and TODOs visually and accessibly.
  - **Marketplace Link**: [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)

### Build Management

- **VSCode Gradle** (`vscjava.vscode-gradle`):
  - **Purpose**: Manage Gradle tasks directly within VSCode.
  - **Benefits**: Simplifies running and debugging Gradle tasks, making it easy to handle build and automation scripts without leaving the editor.
  - **Marketplace Link**: [VSCode Gradle](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)

### Dependency Management

- **Pubspec Assist** (`jeroen-meijer.pubspec-assist`):
  - **Purpose**: Easily add and sort dependencies to your Flutter project’s pubspec.yaml file directly from VSCode.
  - **Benefits**: Facilitates the quick addition and sorting of packages from the Dart package repository, saving time and reducing context switching.
  - **Marketplace Link**: [Pubspec Assist](https://marketplace.visualstudio.com/items?itemName=jeroen-meijer.pubspec-assist)

### Automation

- **Run on Save** (`pucelle.run-on-save`):
  - **Purpose**: Executes specific commands or scripts automatically whenever files are saved.
  - **Benefits**: Perfect for projects where build scripts, linters, or other commands need to be run frequently, enhancing workflow automation.
  - **Marketplace Link**: [Run on Save](https://marketplace.visualstudio.com/items?itemName=pucelle.run-on-save)

For more details, consult the official Visual Studio Code documentation [here](https://code.visualstudio.com/docs).
