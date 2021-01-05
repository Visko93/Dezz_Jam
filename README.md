# DEZZ JAM

##### PT - Projeto realizado como teste tecnico, com um period de desenvolvimento de 6 dias

##### EN - Project carried out as a technical test, with a development period of 6 days

## The design file

[Figma](https://www.figma.com/file/6rlc8241dOsYj1l9KWrCtP/Manipulae_test?node-id=0%3A1)

## Setting up

```bash
git clone https://github.com/Visko93/Dezz_Jam.git
```

```bash
yarn install #npm install
```

```bash
yarn start #npm start
```

### Plus

- Skeleton - [Link](https://github.com/dvtng/react-loading-skeleton)
- Using `redux-immutable-state-invariant` midleware to ensure that data is not mutate in a displtch or between dispatches during development

### ISSUES

- #### CORS clocking the request
  - Since I used axios to make the calls to the deezer API, the default behaver was to use cors policy, however the end-point did not allowed the app calls providing <quote>'Access-Control-Allow-Origin</quote> after the first OPTIONS HTTP call
  - I used an proxy call that added the 'Access-Control-Allow-Origin' to the response, and allowed the second call, GET, to be received and responded by the end-Point [cors-anywhere](https://github.com/Rob--W/cors-anywhere/#documentation)
  - Had some problems with the play() method in a audio HTML element, for the sake of simplicity I used a third party library named [React Audio Player](https://github.com/justinmc/react-audio-player#readme)
