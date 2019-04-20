<p align="center">
  <a href="https://f1-almanac.pl">
    <img src="https://f1-almanac.pl/icons/icon-96x96.png">
  </a>
</p>


# <p align="center">Formula 1 Almanac</p>

[![Build Status](https://travis-ci.org/holokron/f1-almanac.svg?branch=master)](https://travis-ci.org/holokron/f1-almanac) 
[![codecov](https://codecov.io/gh/holokron/f1-almanac/branch/master/graph/badge.svg)](https://codecov.io/gh/holokron/f1-almanac)

## Install

```bash
npm i
```

## Generate Formula 1 data 

```
bin/generate-data --all-seasons
```

```bash
Usage: generate-data [options]

Options:
  -V, --version          output the version number
  -a, --all-seasons      Download data from all season
  -s, --season <season>  Season (default: [])
  -d, --data-dir <dir>   Directory for data (default: "<project_dir>/data")
  -h, --help             output usage information
```

## Develop 

```bash
npm run develop
```

## Build for production

```bash
npm run build
```

## Built with

* [React](https://reactjs.org/) - Javascript UI library
* [Ant Design](https://ant.design/) - React JS UI components library
* [Gatsby](https://www.gatsbyjs.org/) - Static site generator
* [Ergast Developer API](https://ergast.com/mrd/) - Formula 1 statistics database 

