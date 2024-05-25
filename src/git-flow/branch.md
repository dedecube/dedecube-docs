---
title: Branch
---

## Branch Strategy

In our Git workflow, branches are organized into fixed and temporary categories. This structure facilitates efficient development cycles and ensures stable code management.

### Fixed Branches

Fixed branches serve as the backbone of your Git workflow, providing a structured environment for code integration and deployment:

- **main**: Production branch, contains code that is currently in production.
- **stage**: Staging branch, contains code that is ready to be moved to production.
- **prestage**: Pre-staging branch, contains code that is in the testing phase.
- **develop**: Development branch, contains code that is under active development.

### Temporary Branches

Temporary branches are created for specific purposes and are typically deleted after their changes are merged into a fixed branch:

- **feature/**: For new features or enhancements. Named after the feature (e.g., `feature/new-login`).
- **bugfix/**: For bug fixes. Named after the bug being fixed (e.g., `bugfix/login-error`).
- **hotfix/**: For critical bug fixes that need immediate deployment to production outside of the regular cycle (e.g., `hotfix/security-patch`).
- **chore/**: For routine tasks like dependency updates that do not modify the code functionality (e.g., `chore/update-firebase-core`).
- **improvement/**: For tasks aimed at improving the codebase without adding new features, such as refactoring, performance improvements, security patches, or localization updates (e.g., `improvement/refactor-auth-module`).
