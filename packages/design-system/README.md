# Getting Started with Benchmark Design system

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs Storybook for you to view design system components.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn validate`

This will run typescript and linter to make sure changes don't have any error on them. its very useful to run this before pushing to code base. because if there would be issue it will fails the PR in pull request. and this would save time. you can also run `yarn lint` to autofix any linter issue before pushing changes.

## Tools and Libraries

#### [Material Ui](https://mui.com/material-ui/getting-started/)

Its our core UI library and build our design system on top of it.

**Thing to consider**

- For adding new component always make sure to search material UI API and core API before adding new library or make custom components
- To update the component styles use `sx` props for small changes, or `styled` for more complex changes. do not use className or style property to change the CSS.

#### [StoryBook](https://storybook.js.org/docs/react/get-started/why-storybook)

We Storybook to document and showcase our design system UI components.

- we are using implicit folder structure to show components in storybook so make sure to put components in correct folder and name your stories with `UpperCamelCase` letter
- we are using [CSF 3](https://storybook.js.org/docs/react/api/csf)
- if you want to add custom documentation for each story you can use `/** some markdown or text here */` before story and it will automatically shows on top of that specific story.
- always try to use `args` to write stories and make use of `...parent.args` to inherit prop from another story.
- if your components have some prop types like date or color we can use storybook color, date picker in order to storybook to detect those props we can define them in `matchers` in side `preview.ts` here is list of all available [argTypes](https://storybook.js.org/docs/react/essentials/controls#annotation)
-

#### Typescript

Make sure everything has proper types its helpful for storybook to generate docs and our codebase quality.

## How to get started
Before you start developing, it's vital to grasp the main components of our design system theme. This theme includes color palettes, typography, sizes, spacing, shadows, etc.

Storybook Resource: Visit our Storybook and read the Theme section under FOUNDATION to get detailed insights into our theme. This resource is essential for understanding how to effectively apply the theme elements in your development work.

#### Important Notes
- This is a mono repo project with two main parts, the Apps which are named Benchmark and Insure Investor, and the Design System. All of the project's components reside in the design system and use by the apps. The design system contains the themes for all apps. make sure you completely understand the main parts of the design system theme for starting to develop the components.

- Reference Existing Code: Use existing code as a reference to understand standard practices and maintain consistency in your development.

- Understanding Material UI (MUI): It is crucial to have a good understanding of MUI components and how they are utilized in our project for effective development.

#### Local Testing and Validation
- Run Local Tests: Before submitting your work, you can locally test your code to ensure it passes all tests. Use the command `yarn validate` in the specific package to perform this validation.

#### Workflow and Pull Requests
- Initial Pull Request: When you start working on a new task (ticket), immediately create a pull request (PR) and attach the link to the corresponding ticket by updating the 'Link to jira' story section of the PR's description .
- Daily Updates: Push your changes to this PR at the end of each day.
- Final Review: Once your PR is complete and all tests are passed, add reviewers to the PR for final approval. It's important to make sure you add the reviewer(s) once the PR is completed and you have finished all your work on it.

#### Pull Request Management
- Jira Ticket Linking: Always link the Jira ticket to your pull request.
- Single Ticket per PR: Ensure that each PR contains changes related to only one ticket. Do not combine tasks from multiple tickets in a single PR.
- Branch Naming Convention: Follow the naming convention for PR branches, using the format `initial/project-name-by-dash`.

#### Coding Standards
- Design Tokens: Always use design tokens for padding, spacing, colors, typography sizes, and font weights. Avoid hardcoded values at all time.
- Theme Token Usage: The way you use theme tokens can vary. It depends on whether you're using the styled option or the sx props provided by MUI.
- Base Components: Always start with an existing MUI component as the base for any new component.
- Style Overrides: If an existing MUI component requires UI changes, make these adjustments by overriding styles in the theme.
- Adding Functionality: For components that need additional functionality not present in the MUI design system, implement these in a wrapper function inside the component folder.
- If you implement new component from scratch make sure to use design tokens like border and border Radius, shapes. so we can modify theme from theme

#### Understanding the Design System Structure
1. Folder Structure: Within the design-system/src directory, you will find several key folders. These include:

    - components: Contains custom components.
    - hooks: Houses custom hooks.
    - theme: Where theming for the app resides.
    - Other various folders that will be relevant as you progress.

2. Using Material Design and MUI:

    - Our project leverages the Material Design system principles.
    - We implement these principles using the MUI components library.
    - Familiarity with MUI is essential for working on this project.

#### Developing with the Design System
1. Creating New Components:
    - Always start by checking the MUI library for an existing component that suits your needs.
    - If a suitable MUI component is available, use it as a base.

2. Customizing Components:
    - To customize MUI components, modify their design in the `Theme/<APP NAME\>/componentOverrides/<COMPONENT\>`.ts file.
    - Look at existing code samples for guidance on customization.

3. Theme Customization:
    - In each app's folder within the Theme directory, you'll find settings for palette and typography.
    - These settings are crucial for maintaining visual consistency.
