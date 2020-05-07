# Util function to get the basePath env variable.

### How to use it?

```shell
npm i base-path-env
```

```js
const { getBasePath } = require("base-path-env");
const basePath = getBasePath();
```

### Environment variable

In order for this to work, you need to specify in your `.env` file the BASE_PATH variable, or you can just export the env variable. Eg.:

```env
BASE_PATH=subdomain/
```
