# Frontend Storybook

## Getting Started

    npm install
    npm run storybook

## File Structure

### Component & Story

When adding a new component and story, create the component (`*.tsx`) file and story (`*.stories.ts` or `*.stories.tsx`) in `src\stories`.

If the component use a static assets, put the assets in `src\stories\assets`.

### Hooks, Helpers, Constants

Hooks, helpers, constants, etc goes to `src\utils` in their respective file/folder:

- `src\utils\hooks`
- `src\utils\helpers`
- `src\utils\constants.ts`

## Version Control

When committing or creating a release tag, you SHOULD follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [Semantic Versioning](https://semver.org/).
