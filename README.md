# prerender-demo

> example use plugin prerender vuejs, for more info about plugin click [here](https://github.com/chrisvfritz/prerender-spa-plugin)

![alt prerender plugin vue](https://media.giphy.com/media/3oxHQHtwxuGNLigxqM/giphy.gif)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

#run python HTTP server to test static files in ./dist folder
python -c $'import SimpleHTTPServer;\nmap = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map;\nmap[""] = "text/plain";\nfor key, value in map.items():\n\tmap[key] = value + ";charset=UTF-8";\nSimpleHTTPServer.test();' "8000"
```


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
