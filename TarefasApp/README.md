# React native (expo) cli

Aplicativo para desenvolcimento das habilidade em react

## Instalação

Preciso configurar algumas dependências para inicialização do React

```bash
npm install
```

## Configuração

Preciso de um programinha chamado [ngrok](https://ngrok.com/download) para poder acessar minha api do rails com o react expo-cli, com ele no Linus basta rodar um linha de código no terminal (no mesmo local aonde baixei o arquivo), no Windows preciso clicar no gnrok.exe e digitar:

```bash
./ngrok http 3000

# ou se estiver no Windows

ngrok.exe http 3000
```

<br/>

Agora basta salvar o url (https) para e colocar em "src/services/api.js"
```js
baseURL: 'https://url.ngrok.io'
```
Lembrando que a url gerada é diferente toda vez que inicio o ngrok, e caso eu queiro utilizar um emulador (Android-Studio) ao invés do app do expo não preciso do ngrok!

<br/>

Agora só preciso rodar minha api (vamos utilizar o rails) então posso fazer apenas um "rails s" para iniciar na porta 3000 também

## Para iniciar
Preciso ter o app do Expo instalado no meu celular e rodar:
```bash
expo start
```
Agora basta escanear o QRCode pelo app (caso for a primeira vez) e está pronto!