# 📱 APP-REACT-BASE  
Uma plataforma mobile/web para facilitar a divulgação de serviços pequenos e rápidos! 🚀  

## 📦 Instalação

1. Configure o seu package, se necessário:
   ```sh
   npm init
   ```
2. Instale as dependências:
   ```sh
   npm install
   npm install -g eas-cli
   ```
3. Atualize o arquivo `app.json` com as configurações adequadas.

4. Remova os arquivos `.gitkeep`, se necessário.

---
## ⚡ Testando em tempo real
Para testar enquanto desenvolve use o App, `Expo Go` disponivel na *Play Store*, e siga as etapas:
```sh
npx expo start
```
ele ira gerar um qr code, aponte o celular com o app aberto e pronto!
Caso queira usar outra forma, use o modo WEB, apenas aperte no terminal a tecla `W`, e pronto!

---
## 🚀 Gerando o Apk
Para gerar o apk através do expo faça:
```sh
eas login
eas build --platform android
```