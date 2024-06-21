---
title: Prestage only access
---

## Prestage-Only Access

Developers who have access only to decrypt the files in the `prestage` directory need to copy the decrypted files into the `stage` and `production` directories to avoid file not found errors when running the project.

### Script for Windows

```cmd
set SOURCE_DIR=config\prestage
set STAGE_DIR=config\stage
set PROD_DIR=config\production

copy "%SOURCE_DIR%\google-services.json" "%STAGE_DIR%\google-services.json"
copy "%SOURCE_DIR%\google-services.json" "%PROD_DIR%\google-services.json"
copy "%SOURCE_DIR%\GoogleService-Info.plist" "%STAGE_DIR%\GoogleService-Info.plist"
copy "%SOURCE_DIR%\GoogleService-Info.plist" "%PROD_DIR%\GoogleService-Info.plist"

echo Files copied successfully.
```

### Script for MacOS

```bash
SOURCE_DIR="config/prestage"
STAGE_DIR="config/stage"
PROD_DIR="config/production"

cp "$SOURCE_DIR/google-services.json" "$STAGE_DIR/google-services.json"
cp "$SOURCE_DIR/google-services.json" "$PROD_DIR/google-services.json"
cp "$SOURCE_DIR/GoogleService-Info.plist" "$STAGE_DIR/GoogleService-Info.plist"
cp "$SOURCE_DIR/GoogleService-Info.plist" "$PROD_DIR/GoogleService-Info.plist"

echo "Files copied successfully."
```
