# FlightDocs

FlightDocs aims to be an open-source repository of pilot information and reference material that is usually taught as part of pilot ground schools. On this site you'll find a variety of pages with concise explanations about aircraft systems, the national airspace system, weather, and pilot regulations.

Contributions are always welcome! Some content is more complete than others, and there are always pages
that could use more love.

### Installation

```
$ git clone https://github.com/eburlingame/flightdocs.git
$ cd flightdocs/
$ yarn install
```

### Local Development

Ensure you have [Node.js v20](https://nodejs.org/en/download) installed.

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
