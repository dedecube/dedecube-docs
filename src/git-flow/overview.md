# Git Standard Flow

This is the official Dedecube Git Standard Flow.

## Table of Contents

- [Git Standard Flow](#git-standard-flow)
  - [Table of Contents](#table-of-contents)
  - [Why](#why)
  - [Branch](#branch)
    - [Fixed](#fixed)
    - [Temporary](#temporary)
  - [Workflow](#workflow)
  - [Commit Message](#commit-message)
    - [Standard Format](#standard-format)
    - [Behaviour Rules](#behaviour-rules)
  - [FAQ](#faq)

## Why

We are introducing a standard git flow to improve in many aspects:

- Consistency: Standardizes git operations across all projects, making it easier for team members to understand the state and progress of projects.
- Code Quality: Enforces a review process, ensuring that only well-tested and well-documented code gets merged.
- Traceability: Each commit is categorized (feat, fix, chore, etc.), making it easier to generate changelogs and understand the history of changes.
- Collaboration: Simplifies the process of multiple people working on the same project, reducing conflicts and streamlining merges.
- Automation: Eases the integration with CI/CD pipelines, as the flow can be automated based on the type of commits.
- Rollbacks: Easier to identify and revert specific changes, improving the speed and safety of hotfixes.
- Documentation: Commit messages act as a form of documentation, explaining why changes were made.
- Faster Onboarding: New developers can quickly understand project history and coding standards.
- Scalability: As team grows, a standard flow can easily scale without causing confusion or bottlenecks.

## Branch

### Fixed

- main: Production branch, contains code that is currently in production.
- stage: Staging branch, contains code that is ready to be moved to production.
- prestage: Pre-staging branch, contains code that is in the testing phase.
- develop: Development branch, contains code that is under active development.

These fixed branches serve as the backbone of your Git workflow, providing a structured environment for code integration and deployment.

### Temporary

- feature/: For new features or enhancements.
- bugfix/: For bug fixes.
- hotfix/: For critical bug fixes that need to be deployed immediately.
- chore/: For routine tasks like dependency updates.
- improvement/: For improvement task like refactoring, test, config, localization, performance, security.

## Workflow

1. **Start Development**
   - Always start from the `develop` branch.
   - `git checkout develop`
   - `git pull origin develop`

2. **Create Branch**
   - `git checkout -b [feature/bugfix]/[task-name]`

3. **Development and Commit**
   - Develop the code.
   - `git add .`
   - `git commit -m "[type](scope): [Commit Description]"`
    > See [Standard Format](#standard-format) section for a complete list of type and visit the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for pratical examples!

4. **Push and Pull Request**
   - `git push origin [branch-name]`
   - Create a Pull Request (PR) targeting `develop`.

5. **Code Review**
   - Team members review the code.
   - Make changes if necessary.

6. **Merge to Develop**
   - Once the PR is approved, merge it into `develop`.

7. **Release to Prestage/Stage**
   - Create a PR from `develop` to `prestage`, then to `stage`.

8. **Release to Production**
   - Create a PR from `stage` to `main`.

## Commit Message

Dedecube has chosen to adopt the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for commit messages, opting for an unopinionated approach.

### Standard Format

`[Type]: [Short Description]`.

Types are:

- **feat**
  - Adding new functionality to your application. This could be a new API endpoint, a new UI component, or any other type of new feature.

- **fix:**
  - Resolving issues that affect the functionality or usability of the application. This could range from fixing broken buttons to resolving server errors.

- **build:**
  - Changes related to the build system or external dependencies. Examples include adding a new library or changing the build scripts.

- **perf:**
  - Optimizing existing features or code to run faster. This could involve database optimization, code refactoring for efficiency, or other performance tweaks.

- **docs:**
  - Updates or additions to the project's documentation. This could be inline code comments, README files, or external documentation.

- **test:**
  - Adding or modifying tests. This ensures that your application works as expected and helps prevent future bugs.

- **refactor:**
  - Code changes that neither fix a bug nor add a feature. This is purely for code readability or structure, like changing the format of a function or updating variable names.

- **chore:**
  - Routine tasks or maintenance activities that don't affect the functionality of the application. Examples include updating package.json scripts or cleaning up codebase.

- **ci:**
  - Changes specifically for the Continuous Integration system. This could involve changing the CI configuration files or scripts.

- **style:**
  - Changes that do not affect the meaning of the code. These are purely formatting changes, like indentations or sorting imports.

- **revert:**
  - Reverting previous commits. This is used when a certain commit is found to be the cause of a bug or issue and needs to be undone.

Each section serves a specific purpose and helps maintain a clean and understandable commit history, which is crucial for effective collaboration and project management.

### Behaviour Rules

1. **Opt for small**: frequent commits over one large commit at the end. This makes code review easier and helps in diagnosing issues.

2. **Descriptive and Concise**: Commit messages should be both descriptive and concise. For example, "Implement user authentication" is better than "Changes".

3. **English**: Use English for commit messages for consistency.

4. **Limited Number of Files**: Each commit should pertain to a single task or bugfix. Avoid including multiple unrelated changes in the same commit.

## FAQ

1. Is always mandatory to follow commit standard rules?

   No, for special cases, like functional merge, it could be possible to not follow rules so that automatic changelog will not includes some unuseful stuff.

2. When to use **chore**?

   Chores are tasks that don't modify the application code or system behavior. They are routine tasks necessary for maintaining the project.

   Examples:
   - Updating package.json scripts
   - Setting up a linter
   - Adding a new build step
   - Cleaning up codebase (removing dead code, comments)
   - Updating .gitignore or other config files
   - Migrating the project structure
   - These are tasks that keep the project healthy but don't add features or fix bugs.

3. What to use when I install a dependency?

   Use **build**.
