---
title: Xcode
---

## Installing Xcode

To develop iOS applications using Flutter, Xcode is an indispensable tool. This guide will help you set up Xcode on your Mac for Flutter development.

## Download and Install Xcode

1. **Download Xcode**: The official and recommended way to download Xcode is through the Mac App Store. Download from the following link [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835).

2. **Complete the Installation**: After downloading, open Xcode and follow the prompts to complete the installation. This includes accepting the license agreement and installing any additional required components.

## Configure Xcode for Flutter

1. **Set Up Command Line Tools**: Ensure that Xcode's command line tools are configured by running the following command in the Terminal:

    ```bash
    sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
    ```

    This ensures that command line tools point to the Xcode developer directory.

2. **Install Rosetta 2 on Apple Silicon**: If you are using a Mac with Apple Silicon, some Flutter components may require Rosetta 2. Install it using:

    ```bash
    sudo softwareupdate --install-rosetta --agree-to-license
    ```

3. **Configure the iOS Simulator**: Open Xcode and set up the iOS Simulator for testing:
    - Navigate to Xcode’s Settings (Cmd + ,).
    - Select the “Platforms” tab.
    - For each project, install simulators for the latest version of iOS and the oldest supported iOS version as specified by the project requirements. For instance, if your project supports from iOS 14 and the current iOS version is 17, ensure you have both iOS 14 and iOS 17 simulators installed.

## Testing on real devices

1. **Set Up Provisioning Profiles**: If you intend to test on real iOS devices:
    - Connect your iOS device via USB.
    - Open Xcode, then go to “Window” > “Devices and Simulators”.
    - Register your device and configure a provisioning profile as needed.
2. **Set Up Wireless Provisioning**: To enable wireless testing on iOS devices:
    - Connect your iOS device via USB.
    - Open Xcode, then go to “Window” > “Devices and Simulators”.
    - Select your device and click on the "Use for Development" checkbox.
    - Follow the prompts to enable wireless debugging and provisioning.
3. **Enable Developer Mode**: On your iOS device, go to “Settings” > “General” > “Device Management” and enable Developer Mode to permit app installation and debugging.

Following these steps will ensure that Xcode is correctly set up for developing and testing Flutter applications on your Mac.

For more details, consult the official Flutter documentation regarding iOS setup [here](https://flutter.dev/docs/get-started/install/macos#ios-setup).
