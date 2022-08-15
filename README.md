# apk-dl
## this mudule make to download apps from:
[apk-dl.com](apk-dl.com)<br>
[aptoide.com](aptoide.com)<br>
[apkcombo.com](apkcombo.com)<br>
[play.google.com](play.google.com)<br>

# how to install/uninstall

### insatall
```sh
npm install apk-dl
```

### uninstall
```sh
npm uninstall apk-dl
```
# how to use

## import
#### whit js core
```js
const apk_dl = require('apk-dl');
```

#### whit ES6 
```js
import apk_dl from 'apk-dl'
```

## search and download
#### apk-dl.com
```js
await apk_dl.apkdl.search('minecraft')
await apk_dl.apkdl.search("url from apk-dl.com")
```

#### apkcombo
```js
await apk_dl.apkcombo.search('minecraft')
await apk_dl.apkcombo.search("url from apkcombo.com")
```

#### aptoide
```js
await apk_dl.aptoide.search('minecraft')
await apk_dl.aptoide.search("app name package")
```
