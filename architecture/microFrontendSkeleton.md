# System architecture

## Micro frontend skeleton

Design a [micro-frontend](https://micro-frontends.org/) skeleton 

## Requirements

* The application should have a shared left menu
* When click on each item, the view-port will be opened and shows the relevant content inside it (aka: component)
* The component in the view-port can be continuously-deployed independently without the need to update its version anywhere.
* The component within the view-port can access shared resources (e.g. user JWT) and shared code (e.g. same `logger` instance) like others

## The challenge

* Describe the project(s) structure
* Interaction between the components
* What's your testing strategy for the system as a whole?
* Describe the build and deployment architecture
* How to keep the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle and reuse the same code in multiple components (`logger`, `http client` etc.) but still be independent?  