---
title: Linting Rules
prev: false
---

## Overview

This page provides an overview of the linting rules we adhere to in our Flutter development to ensure code quality and consistency. These rules help maintain a standard coding style, improve readability, and prevent common errors.

## Linting Rules

Below you can see linting rules we enforce in our project, along with a brief description of each:

1. **avoid_print**: Ensures that `print` statements are not used in production code, as they can lead to performance issues and cluttered log output.

2. **constant_identifier_names**: Enforces constant identifiers to be written in camelCase, promoting consistency across the codebase.

3. **prefer_const_constructors**: Encourages the use of `const` constructors where possible to improve performance by reducing the need for garbage collection.
