# Radiator Dashboard for xCLO

### Getting started

Download the project using `git clone https://github.com/Xclo/cf-dashboard`

There are couple of config files you have to change before you start the project. In the `src\config` folder you have two files

1. ciservers.js: Add you CI Servers in the ciservers.js, with the api url + team name as the unique key
2. foundations.js: Add you CF Foundation servers in the foundation.js, with the api url as the unique key

Once you have finished the configuration, you can run the dashboard app

```
> npm install
> npm start
```

