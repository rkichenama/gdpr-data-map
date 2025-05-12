# gdpr-data-map

a small frontend browser-based application that visualizes an interactive data map given a static list of system definitions

[Time spent on this project]

- Create a basic app using your preferred framework (React, Vue, Angular, etc.). There are no minimum browser requirements so feel free to use your favorite browser and preferred libraries, and we're not expecting this to be production-grade so any reasonable boilerplate is fine here.
- Convert the sample data ([sample_data.json](sample_data.json)) as needed into whatever format you will use for rendering. Feel free to copy the sample data directly into the source code as a constant; there's no requirement to load this dynamically from a filesystem or similar.
- Render a visual data map that displays all the systems in a grid, categorized by system type. Your layout algorithm shouldn’t be static here, you should expect to be able to add/remove systems and relayout the map accordingly. Use your own judgment to decide what data should be shown, but at a minimum we’d want to see something like the mockup below, which includes:
  - System Name
  - Data Categories (excluding duplicate categories across multiple uses)
  - Systems arranged into groups by System Type
- Improve the legibility of data categories by only rendering the most nested subcategory, e.g. `location` instead of `user.derived.identifiable.location`; for more information on data categories see https://ethyca.github.io/fideslang/#1-data-categories)
- Add some interactive button elements to filter our map! Using your best judgment, add some controls on the page to:
  - Filter systems based on a “data use”
  - Filter systems based on a selection of “data categories”
  - Relayout the systems based on either “system type” or “data use”
- Get fancy with our visuals. Add as much flair and styling as you can muster; here are some ideas:
  - Render arrows between systems to show the “system dependencies”
  - Add animations for when filters are changed
  - Display the system descriptions with an expandable drawer
  - …surprise us!

## How to run project
- a

## Assumptions made
- b


- Once completed, please create a README file describing:
  - How to run your project (or where it is hosted),
  - How much time you spent building the project,
  - Any assumptions you made,
  - Any trade-offs you made,
  - Any special/unique features you added,
  - Anything else you want us to know about,
  - Any feedback you have on this technical challenge -- we care deeply about our hiring process here at Ethyca, and about the engineers who go through it (that's you!) -- we wholeheartedly promise any feedback will be met with a warm thank you!

- The assignment can be published and shared with us via any code sharing platform such as Github, Gitlab, or sent as a .zip file to the Ethyca employee who sent you this task.

- We'll review your submission in advance of your debrief interview, and look forward to talking to you about it!
