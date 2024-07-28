---
title: Avoid Lint Rules
prev: false
---

## Introduction

In the development process, lint rules are essential for maintaining code quality and consistency. These rules help prevent common errors, improve readability, and promote best coding practices. However, there may be situations where lint rules seem restrictive or inapplicable. In such cases, ignore line or file can be used to exclude specific lint rules.

## Minimizing the Use of `ignore`

The use of `ignore` should be limited and justified. Minimizing this usage ensures that the code remains compliant with standards and reduces the possibility of introducing bugs or unexpected behavior. Here are some guidelines for appropriate use:

### 1. **Document the Exceptions**

Whenever you use the `ignore`, make sure to clearly document the reason. This helps team members understand why an exception was made and decide if future intervention is needed. You can add comments in the code or discuss it in Discord.

### 2. **Avoid Ignoring General Rules**

Prefer to avoid ignoring lint rules that concern fundamental aspects such as security, performance, or common coding practices. It is preferable to resolve issues rather than ignore them to maintain high code quality.

### 3. **Periodic Review of Exceptions**

Periodically review the exceptions created using `ignore` and assess if they can be removed or resolved. Keeping the code updated and compliant with lint rules helps prevent the accumulation of issues and maintain the project's maintainability.

## Example of Exception

### Ignoring the `invalid_annotation_target` Warning

A particular case involves the `invalid_annotation_target` warning, which is known to be a "bug" in `json_serializable` and `freezed`. In this case, we can avoid putting the ignore directly in the source files by using a specific `analysis_options.yaml` file for the relevant folder.

**Steps:**

1. Create an `analysis_options.yaml` file in the appropriate subfolder (e.g., `api/requests`).
2. Add the following content to the file:

    ```yaml
    include: ../../../analysis_options.yaml

    analyzer:
      errors:
        invalid_annotation_target: ignore
    ```

3. Remove each occurrence of `// ignore_for_file: invalid_annotation_target` from the source files in the folder if present.

## General Technique for Using `analysis_options.yaml` in Subfolders

This technique can be generalized to ignore other specific rules in certain subfolders without affecting the entire project. Clearly documenting these exceptions helps maintain code consistency and maintainability.
