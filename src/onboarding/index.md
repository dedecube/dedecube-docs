---
title: Onboarding 
prev: false
---

## Setting Up a Project

When setting up a new project, follow these quick steps:

## Configuration (env)

Start by copying the `.env.example` file to create your `.env` file:

```bash
   cp .env.example .env
```

This file contains project-specific configuration parameters that may vary across different environments. For detailed instructions on environment configuration, please refer to the Configuration Guide.

## FVM Usage

Ensure you use the correct Flutter version for your project with Flutter Version Manager (FVM). Use the following command:

```bash
   fvm use
```

After that, reload the window, kill the shell, and create a new one. To check if the correct version is being used, run:

```bash
   which flutter
```

## Firebase config setup

To avoid exposing Firebase configuration files for iOS and Android in the repository, we encrypt them with GPG. You can find the GPG key used in the “Docs” column on Trello. To decrypt the files, follow the instructions [here](/implementations/firebase/decryption).

Note that for those with access only to Prestage, you need to first copy the Prestage files to Stage and Production, as described in the  [Prestage Only Access](/implementations/firebase/prestage-only-access/) section. The command to decrypt is as follows:

Finally, run the following command:

```bash
   flutter pub run flutter_flavorizr -p google:firebase
```

This command will insert the respective Firebase configuration files for iOS and Android.

## VSCode Tasks and Launch

To simplify development, VSCode launch and task files have been set up. The launch configurations include various environments divided into Manual and Non-Manual. When code generation is needed, use the Non-Manual option; otherwise, Manual will suffice. Unless otherwise specified, use the Prestage environment.
For more details on the launch.json file, click [here](/getting-started/visual-studio-code#vscode-launch).
For details on the tasks.json file, click [here](/getting-started/visual-studio-code#vscode-tasks).

## Git Flow

Remember to adopt our Git workflow to manage branches and merge code efficiently. Learn how to use Git Flow in the [Git Flow Documentation](/git-flow/).
