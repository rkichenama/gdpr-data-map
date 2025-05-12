# gdpr-data-map

a small frontend browser-based application that visualizes an interactive data map given a static list of system definitions

Time spent: approx 4 hours, excluding break.

## How to run project
- open `dist/index.html` in a browser or clone this repo, `npm install`, then `npm start`, then launch the url [https://localhost:1234](https://localhost:1234)
- once loaded, you can select a combination of filters to change what matching applications are displayed
  - applications with no items in their list are always displayed unless specifically omitted


## Assumptions made
- that the system types to be shown would be from the data and displayed in alphanumerical order
- each application would have a single data_use
- truncating of the dot path for labeling would be acceptable, through each instance has a `title` for the full path

## Tradeoffs / Feedback
- in working the implementation of TransitionGroup, unexpected styling issues arrose that implied a refactor of the entire layout, which pushed me up against time. this would have been the basis of the filter change animations
- removed filter/selectors for system type that would have changed the order, planning to try and implement a drag system
- this was fun and wish the animation library could have been implemented
