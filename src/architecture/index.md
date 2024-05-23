---
title: Architecture concepts
---

Structure

Description of the app architecture (core, common, ..., kernel - main -> Explanation of flavors)

    - Starting from the main
        - flavors
        - kernel
            - bind
            - bootstrap
            - customization: error and loading widgets (and also appWidget)
            - kernelApp.resolutionKey -> ProviverScope.containerOf(kernelApp.resolutionKey)
    - Debugging -> dev inspector and talker

    - Feature
        - How to create
        - Important components: contract, config, etc.
        - Providers
        - Config
    - Presentation
        - Routing
        - Pages
            - UI and Business Logic
            - Partials
        - Theme
        - Widget Creation (introducing the concept of components)
            - hooks
            - translation
            - assets
            - 
