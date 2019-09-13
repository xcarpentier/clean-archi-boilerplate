# RN & Expo boilerplate

# Stack

- TypeScript
- redux-saga
- reselect
- tslint
- prettier
- ramda
- Storybook (ie. `yarn start:story`)
- expo

# Install

1. `yarn global add expo-cli` (ie. install expo tooling globally)
1. `yarn` (ie. install dependencies, do it from project root)
1. `yarn start:inmemory` or `yarn start:dev` or `yarn start:story`

## vscode

- [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

# Git

## Branches

### fixed

- dev (default)
- master (prod)

### not fixed

- feature/`feature name`
- hotfix/`fix name`
- release/`release name or version`

### Best practice

- use rebase to update feature branch from dev:
  `git pull origin dev --rebase`

# Clean Architecture

- `__tests__`
  - `<context name>`
    - `unit` on actions and saga
    - `configuration` mainly snapshot
    - `e2e` detox tests
    - `components` snapshot and interactions with enzime
- `src/common`
  - `ui/` UI kit
- `src/<context name>`
  - `ui/` ui, used for navigation and its children component, redux connect, etc.
    - `index.js` just export
    - `<feature>.Smart.ts` redux maps and connect
    - `<feature>.Dumb.ts` dumb component
    - `components/` components used only for this context
  - `adapter/` Back-end api and mock (immemory)
    - `inmemory/`
      - `InMemory<Feature>.loader.ts` or `InMemory<Feature>.interactor.ts`
    - `real/`
      - `dto/`
      - `mapper/`
      - `<Feature>.loader.ts` or `<Feature>.interactor.ts`
  - `domain/`
    - `entities/`
      - `User.ts` entities used in this context, http://facebook.github.io/immutable-js/docs/#/Record.Factory
    - `gateways/`
      - Interface for `<Feature>.loader.ts` or `<Feature>.interactor.ts`
  - `usecases`
    - `<list or detail or others>/` store and actions definitions
      - `<case>.actions.ts`
      - `<case>.reducers.ts`
      - `<case>.sagas.ts`
      - `<case>.selectors.ts`

# TODO

## 1. Initialize Git Flow
> `git flow init`

## 2. Create A Netlify Website
> [Netlify](https://app.netlify.com)

## 3. Set Environment Variables On CircleCi

> [CircleCI](https://circleci.com/dashboard)
- EXPO_CLI_PASSWORD
- EXPO_USERNAME
- NETLIFY_AUTH_TOKEN
- NETLIFY_SITE_ID

