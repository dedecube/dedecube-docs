---
title: Installation
---

## Installation

1. **Install FVM**: You can install FVM using Homebrew on macOS with the following commands:

   ```bash
   brew tap leoafarias/fvm
   brew install fvm
   ```

   ::: warning
   Note: If FVM is already installed, ensure that it is version 3.x.x or higher. If it is not updated, use its autoupdate feature to update it. However, if FVM was installed using external package managers like Homebrew, update it using those package managers instead.
   :::

2. **Configure PATH**: Make sure to remove any existing Flutter paths from your .bashrc or .zshrc file, and add the FVM path at the end of the file:

   ```bash
   export PATH="$PATH:$HOME/fvm/default/bin"
   ```

3. **Install Flutter SDK**: Use FVM to install and manage different Flutter SDK versions. Start by installing a specific version:

   ```bash
   fvm install <version>
   ```

