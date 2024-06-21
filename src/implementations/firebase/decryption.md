---
title: Decryption
---

## Decrypt Firebase Files

In our projects, we use different Firebase configurations file for various development environments. These configurations are managed through encrypted files and distributed in a specific directory structure called config. This guide will help you decrypt and correctly configure these files.

### Directory Structure

In the root of the project repository, you will find a folder named `config` containing the following subfolders:

- `prestage`
- `stage`
- `production`

### Configuration Files in the `prestage` Folder

Inside the `prestage` folder, the following encrypted files are available:

- `google-services.json.gpg`
- `GoogleService-Info.plist.gpg`

These files need to be decrypted to be used. Follow the steps below to do so.

### Retrieve the Passphrase

The passphrase required to decrypt the files is available on the project's Trello board. Retrieve the passphrase and insert it into the `.env` file in the following format:

```env
GPG_PRESTAGE_CONFIG_PASSPHRASE=''
```

### Installing GPG

Before decrypting, ensure that GPG is installed on your system.

#### For Mac Users

Install GPG using Homebrew:

```bash
brew install gpg
```

#### For Windows Users

1. Download the GPG installer from the [GnuPG official website](https://www.gnupg.org/download/index.html).
2. Run the installer and follow the instructions to complete the installation.
3. Ensure the GPG executable is added to your system's PATH.

### Decrypting the Files

Once the passphrase is configured, execute the decryption script. Below are the commands for Bash and Windows Shell:

#### Script for Bash

```bash
gpg \
  --quiet \
  --batch \
  --yes \
  --decrypt \
  --passphrase ${GPG_PRESTAGE_CONFIG_PASSPHRASE} \
  --output .env.prestage .env.prestage.gpg
```

#### Script for Windows Shell

```cmd
gpg ^
  --quiet ^
  --batch ^
  --yes ^
  --decrypt ^
  --passphrase %GPG_PRESTAGE_CONFIG_PASSPHRASE% ^
  --output .env.prestage .env.prestage.gpg
```

### Notes

- **Security Importance**: Ensure the passphrase is never shared publicly and that `.env` files are managed carefully to avoid accidental exposure.
