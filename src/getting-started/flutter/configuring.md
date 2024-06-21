---
title: Configuring FVM
---

## Configuring FVM for Your Project

1. **Set the Flutter Version**: Navigate to your project directory and specify the Flutter version for the project:

    ```bash
   fvm use <version>
   ```

2. **Check IDE Settings**: Ensure that the Flutter SDK path is correctly set. Verify that your `settings.json` includes the correct path:

    ```json
   {
     "dart.flutterSdkPath": ".fvm/versions/3.19.6" // Example version
   }
   ```
