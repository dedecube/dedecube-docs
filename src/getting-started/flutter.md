---
title: Flutter
---

## Using Flutter with FVM (Flutter Version Manager)

FVM is a powerful CLI tool designed to manage multiple Flutter SDK versions, making it ideal for maintaining consistent development environments and ensuring compatibility across different projects.

## Installation

1. **Install FVM**: You can install FVM using Homebrew on macOS with the following commands:

   ```bash
   brew tap leoafarias/fvm
   brew install fvm
   ```

2. **Install Flutter SDK**: Use FVM to install and manage different Flutter SDK versions. Start by installing a specific version:

   ```bash
   fvm install <version>
   ```

## Configuring FVM for Your Project

1. **Set the Flutter Version**: Navigate to your project directory and specify the Flutter version for the project:

    ```bash
   fvm use <version>
   ```

2. **Update IDE Settings**: For Visual Studio Code, set the Flutter SDK path to use FVM. Modify your `settings.json` to include:

    ```json
   {
     "dart.flutterSdkPath": ".fvm/flutter_sdk"
   }
   ```

## Tips and Tricks

- **Automate SDK Updates**: Use FVM to quickly switch between Flutter versions or update to the latest version without affecting global settings.
- **Optimize Your Workflow**: Include the `.fvm` folder in your `.gitignore` to keep the project lightweight and ensure that each team member uses the correct Flutter SDK version.
- **Leverage Advanced FVM Features**: Explore commands like `fvm list` to see all installed Flutter versions and `fvm global` to set a default version for new projects.

By integrating FVM into your Flutter development workflow, you can enhance efficiency, maintain consistency across environments, and easily switch between multiple SDK versions.

For more comprehensive guidance, check out the official documentation on [FVM's website](https://fvm.app/documentation/getting-started/installation) and explore detailed usage tips [here](https://www.dhiwise.com/post/mastering-fvm-the-toolkit-for-flutter-sdk-version-management).
