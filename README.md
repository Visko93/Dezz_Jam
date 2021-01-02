# DEZZ JAM

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

### ISSUES

- #### CORS clocking the request
  - Since I used axios to make the calls to the deezer API, the default behaver was to use cors policy, however the end-point did not allowed the app calls providing <quote>'Access-Control-Allow-Origin</quote> after the first OPTIONS HTTP call
  - I used an proxy call that added the 'Access-Control-Allow-Origin' to the response, and allowed the second call, GET, to be received and responded by the end-Point
  - [https://cors-anywhere.herokuapp.com/](https://github.com/Rob--W/cors-anywhere/#documentation)
