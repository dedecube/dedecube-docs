---
title: Configuring FVM
---

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
