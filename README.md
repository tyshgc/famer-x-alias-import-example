This repository reproduces for the unsolved bug on Framer X that import of alias.

## How to "React Project" Running.

```
yarn start
```

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contents of Bugs.

It should be possible to import alias on VSCode, but could not import on Framer X. I want to know how to resolve it.

### tsconfig.json

##### React App's tsconfig.json

Used `baseUrl`

```
{
  "compilerOptions": {
    ...
    "baseUrl": "./src",
    ...
  },
}
```

##### FramerX project tsconfig.json

I want to refer React App components.

```
{
  "compilerOptions": {
    ...
    "baseUrl": "../src"
  },
}
```

### Components

Call `src/components/Button.tsx` from `src/App.tsx`.

```
import * as React from "react";
...
import Button from "components/Button";
...
```

Call `src/components/Button.tsx` from `framer.framerfx/code/Hoge.tsx`.

```
import * as React from "react";
import Button from "components/Button";
...
```

##### Unpossible to import on Framer X Code View

![](https://user-images.githubusercontent.com/7470763/71305915-dede8d00-241d-11ea-8af1-04af0a6e3623.png)

`Error:Cannot find module...` 

😇oh...