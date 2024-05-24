---
title: Flutter
---

## Installing and Using Flutter with FVM (Flutter Version Manager)

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

2. **Update IDE Settings**: Set the Flutter SDK path to use FVM. Modify your `settings.json` to include:

    ```json
   {
     "dart.flutterSdkPath": ".fvm/flutter_sdk"
   }
   ```

## Useful commands

1. **Multiple Version Management:** Utilize fvm list to see all installed versions, helping you manage and switch between them effortlessly:

   ```bash
   fvm list
   ```

2  **Set a Global Default Version**: For consistency across projects, you can set a global default Flutter version that FVM will default to for any new project:

   ```bash
   fvm global <version>
   ```

For more comprehensive guidance, check out the official documentation on [FVM's website](https://fvm.app/documentation/getting-started/installation).
