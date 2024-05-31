---
title: Homebrew
---

## Installing Homebrew

Homebrew is a powerful package manager for macOS, simplifying the installation and management of software.

## Download and install

1. **Run the Install Script**: Open Terminal and copy and paste the following command:

   ```bash
   $(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
   ```

2. **Add Homebrew to Your PATH**: Update your shell configuration file (like .zshrc or .bash_profile) to include Homebrew’s bin directory:

   ```bash
   echo 'export PATH=\"/usr/local/bin:\$PATH\"' >> ~/.zshrc
   ```

3. **Refresh shell**: Apply the changes by sourcing:

   ```bash
   source ~/.zshrc
   ```

## Useful commands

Upgrade Installed Packages:
Keep your software up-to-date by upgrading all installed packages. This ensures you have the latest features and security updates.

```bash
brew upgrade
```

Cleanup Old Packages: over time, Homebrew accumulates older versions of installed packages. Regularly clean up these to free disk space and maintain a clean environment.

```bash
brew cleanup
```

For more detailed information and troubleshooting tips, visit the [Homebrew Documentation](https://docs.brew.sh).
