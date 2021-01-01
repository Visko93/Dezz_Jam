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

- Criando uma chave SSL pelo padrão rsa com validade de 365 dias

```
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
```

```
openssl rsa -in keytmp.pem -out key.pem
```
