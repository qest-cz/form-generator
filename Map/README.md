# D21-App

## Technology stack:
1. It's a React app
2. With backend in Firebase (database, hosting, serverless functions)
3. It has a server-side rendering (SSR) via Next.js
4. SSR actually runs in server-less mode via Firebase functions
5. It's written in TypeScript

Other notable info:
- `Node v8` (apparently, v8 is required by firebase functions)
- `React v16.8+` (hooks)
- `Webpack` (via Nextjs)
- `Styled components` for CSS and theming
- `Storybook` for living styleguide


## Gotchas:
- Next doesn't process devDependencies for prod builds. We found this out while intergrating `Backend lib` and `redux-devtools-extension`.
- For better module imports we use `aliases`, which need to be manually updated (see below)
- For optimal developer experience, it's recommended to follow the `Tooling setup` guide
- Sometimes the Next.js build becomes stale, and your locally-served app stops reflecting your code modifications. To resolve this, try running `yarn clean`
- The local development server needs to act like an auth server for the client so it is necessary to load a google service account private key for this to work. The key is stored in the `encrypted_keys` folder and is automatically decrypted when running `yarn dev` or equivalent, this operation requires a secret password, **ask the developers for this password**. This decryption needs to happen only once. If the password is lost, you will have to generate a new service account private key ([see here](https://firebase.google.com/docs/admin/setup#initialize_the_sdk)).


## Aliases: 
Each alias has to be added into all following files, otherwise it can break tests, build or storybook (relative paths from root)
- `.vscode/settings.json`
- `jest.config.js`
- `.babelrc`
- `src/app/tsconfig.json`


## Tooling setup:
We use `tslint` and `prettier` for code linting and formatting.  
1. They're tied into `pre-push` hook via `husky`, where they _validate_, but _don't fix_.  
2. You can also use _fix_ commands  
    2a. `yarn linter:client:fix`  
    2b. `prettier:client:fix`

For a hassle-free workflow, it's desirable to install plugins into your IDE, because:
- IDE provides visual feedback when you're breaking a rule
- IDE helps you to automatically fix and format your code (easier than running the npm scripts)


 The whole team uses vscode at the moment:
- **tslint** (the one with id `ms-vscode.vscode-typescript-tslint-plugin`)
- **prettier** (the one with id `esbenp.prettier-vscode`)
- **typescript-hero** (automatic imports sorting)

Prettier plugin in vscode works automatically with:
- `editor.action.formatDocument`
- `editor.action.formatSelection`
- respects `editor.formatOnSave` setting

Settings for Prettier are read from `.prettierrc.js`

Other details:
- https://github.com/prettier/tslint-config-prettier - avoid conflicting formatting-related rules between tslint and prettier
- https://github.com/prettier/tslint-plugin-prettier - run prettier as tslint plugin, which shows prettier errors inside the file you're editting.


## Commands: 

#### Install project's dependencies:
```bash
yarn
```

#### Run project in development mode:
```bash
yarn dev # with local mocked data via Firebase Nightlight
yarn dev:online # with online data in firebase rtdb
```

#### Analyze the app's bundle:
Useful for bundle size optimization.

```bash
yarn analyze
```

#### Run tests:
```bash
yarn test # runs tests one-time
yarn test-watch # runs tests continuously with file watcher
```

#### Run single test:
```bash
npx jest -- -t "path/to/file" # easy to copy from vscode
# e.g.
npx jest -- -t src/app/lib/voting-engine/janecek-method/config.spec.ts
```

#### Start storybook:
```bash
yarn storybook
```

#### Build storybook:
```bash
yarn build-storybook
```

#### Open cypress:
```bash
yarn cypress-open
```

#### Run cypress:
```bash
yarn cypress-run
```

#### Clean old build files:
```bash
yarn clean
```

#### Deploy app automatically:
The app's code is deployed via Bitbucket pipelines.  
For details about which branch gets deployed to which environment, inspect `/bitbucket-pipelines.yml`
```bash
git checkout master
git push
```

#### Deploy app manually:
```bash
npx firebase use # lists available environments
npx firebase use _TARGET_ENV_
npx firebase deploy

# you can also deploy only specific parts of the solution
npx firebase deploy --only database|functions|hosting
```

#### Test functions locally:
For full local emulator start:
```
yarn firebase:local
```
If you then need to update only functions or only the app.
Run:
```
yarn build:(functions|app)
```
And then run:
```
yarn firebase:local:run
```
This way you don't need to rebuild the whole app every time you make a change.

**Note that the ```firebase:local``` command is needed for the initial setup**


## Translations

### How it works:
We use `react-i18next` under the hood, with minor modifications to accommodate our realtime-ness and ability to create custom overrides for languages.

### What are the things on top of regular react-i18next?
- `LocalizedString`
- `localize()` which unwraps `LocalizedString` into a plain string in a specific language
- TODO

### How to work with it:
1. Using existing translations
2. Creating new globalized strings (when writing new components)
3. How are custom locales handled (e.g. cs-airbank)

Details:

1. There are two major functions for you to use: 

    a) `localize(obj: LocalizedString)`  
        This is used for entity data from db, which may or may not contain multiple language variants
        the multi-lang behavior is achieved via `LocalizedString`.
        it either contains the raw string in a single language (whatever that language is)
        or it contains an object, with keys as locales, eg. { en: 'hello', cs: 'ahoj', csAirBank: 'nazdarek' }

    b) `t(key)`  
    This is used for strings in the UI, and the strings are identified by a `key`.

2. Creating new globalized strings.

    a) For `localize()` function you simply store your strings directly within your entity. They take a form of:

    ```typescript
    const singleLocale: LocalizedString = 'My string, when there is only one locale for my entity';

    const multiLocale: LocalizedString = 
    { 
        localeName: 'My string in that locale',
        otherLocaleName:  'My string the the other locale'
    }
    ```

    b) For `t()` you need to _think of a key_ and use that key as the argument, e.g.
    
    ```typescript
    t('Admin.adminPageTitle')
    // note the (optional) prefix "Admin"
    ```
    
    Then you need to go into the database and find an entry for your key `Admin.adminPageTitle`.  

    Per convention, this key will be found at `/translations/__default__/__default__/Admin/adminPageTitle`  
    See, that the _prefix_ `Admin` became a parent node. This can be used to semantically group some of your translation strings.

    What does that `__default__` mean in the path?
    
    - 1st means _default version of translations_ - as translations change in time, we like to keep the door open with versioning.

    - 2nd means _default translations page_ - here, page means next.js page, a basic building block of the application. Our translations are groupped by page to which they belong. The _default_ page serves as a catch-all for common translation strings, that are present on multiple pages.

Sample paths based on various scenarios:

/translations/__default__/__default__/Admin/adminPageTitle = 'Projects administration'
- default (common, base) language version of the platform => `__default__`
- non-specific "page", mean to be used across the whole platform => `__default__`
- translation string originated in the Admin component => `Admin`
- concrete description of the string => `adminPageTitle`
- the actual translation string => `'Projects administration'`

/translations/__default__/__default__/Admin/adminPageTitle/en = 'Projects administration'
/translations/__default__/__default__/Admin/adminPageTitle/cs = 'Správa projektů'
- same as above, except here we support multiple languages `en` and `cs`
- the value of the translation string is an object:
```typescript
{
    en: 'Projects administration',
    cs: 'Správa projektů',
}
```
- the object is unwrapped into a specific language in the runtime based on current locale

/translations/Praha5/__default__/Admin/adminPageTitle = 'Projekty'
- here, we use completely custom translation for one of our clients, Praha 5
- note, that there is only one language, so the value is plain string (as opposed to object)

/translations/__default__/SchoolPB-Admin/Admin/adminPageTitle
- here, we created a spin-off project, SchoolPB, which customizes the string Admin.adminPageTitle just for that one Page
- why does it "customize" an existing key instead of creating a completely different key under the __default__ page?
    - e.g. /translations/__default__/__default__/SchoolPB-Admin/adminPageTitle
    - That's a question for Dan, TODO




TODO what locales will the app offer to the user? This should be dynamic, based on e.g. the locales available in the `/translations` and in the `entities` that are displayed.

#### How translations are resolved

As our platform allows to have customized translations per project, there are multiple sources of translation strings.  
Here's how they are combined together to create the final content:

```typescript
pageTranslations(DEFAULT_TRANSLATIONS_VERSION, DEFAULT_TRANSLATION_PAGE), // basic version of our translations - the common strings
pageTranslations(DEFAULT_TRANSLATIONS_VERSION, page), // basic version of our translations - strings for the page that the user is viewing at the moment
// these two are combined together, supposedly without any overlap

pageTranslations(targetVersionKey, DEFAULT_TRANSLATION_PAGE), // custom version of translations - per project
pageTranslations(targetVersionKey, page),
```

#### Testing with translations
TODO
`initMockTranslations()`
`basic.json/translations` => `MOCK_TRANSLATIONS`