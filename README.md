# Server finder 

<p align="center">
  <img src="https://github.com/JakubesP/server-finder-app/blob/main/logo.png?raw=true">
</p>

## About

Server finder is a simple application to check information about public servers. I wrote it for demonstration purposes. You can check [demo] :smiley:. 

The project uses:
- [vue.js] 
- [node.js]
- [express]
- [leaflet]
- [maptiler]
- [ipstack]

## Installation and running

```sh
git clone https://github.com/JakubesP/test
cd test
```
#### Server
In the `server` directory, create a `config.env` file. It should take the following form:
```sh
IPSTACK_API_KEY=[your ipstack api key]
NODE_ENV=dev
```
then run:
```sh
npm i
npm run dev
```

#### Client
In the `client` directory, create a `.env` file. It should take the following form:
```sh
VUE_APP_API_ENDPOINT='http://localhost:3000/'
VUE_APP_MAP_TILER_KEY=[your maptiler api key]
```
then run:
```sh
npm i
npm run serve
```

With the `npm run build` command, you can compile the Vue project into the server's `public` directory. To do this, you must first create an `.env.production` file on the `client`. Its contents should look as follows:
```sh
VUE_APP_API_ENDPOINT='/'
VUE_APP_MAP_TILER_KEY=[your maptiler api key]
```
The production application will then be accessed by the backend server.

## License

MIT



  [vue.js]: https://vuejs.org/
  [node.js]: <http://nodejs.org>
  [express]: <http://expressjs.com>
  [leaflet]: https://leafletjs.com/
  [maptiler]: https://www.maptiler.com/
  [ipstack]: https://ipstack.com/
  [demo]: https://server-finder-app.herokuapp.com/

