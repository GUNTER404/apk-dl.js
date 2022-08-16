# apk-dl
## this mudule make to download apps from:
[apk-dl.com](apk-dl.com)<br>
[aptoide.com](aptoide.com)<br>
[apkcombo.com](apkcombo.com)<br>
[play.google.com](play.google.com)<br>

# how to install/uninstall

### insatall
```bash
> npm install apk-dl
```
or
```bash
> npm install git+https://github.com/GUNTER404/apk-dl.git
```

### uninstall
```bash
> npm uninstall apk-dl
```
or
```bash
> npm uninstall git+https://github.com/GUNTER404/apk-dl.git
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
#### comming soon
 google.play.com<br>
 apps.evozi.com<br>
 cafebazaar.ir<br>
