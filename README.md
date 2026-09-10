# micro2_26
Repositório para acompanhamento das aulas de microsserviços piaget ADS 5sem26

## obs - execução de scripts
- Abrir o powershell como administrador
- Rodar o comando: 'Set-ExecutionPolicy RemoteSigned'
- confirmar com 'S' 


## O que precisamos instalar

Antes de tudo, voce precisa ter instalado na sua maquina:

- Node.js
- npm

Para conferir se esta tudo certo, rode no terminal:

```bash
node -v
npm -v
```

Se os dois comandos retornarem uma versao, o ambiente esta pronto.

## Passo 1: iniciar o projeto Node

Na raiz do projeto, rode:

```bash
npm init -y
```

Esse comando cria o arquivo `package.json`, que guarda as informacoes do projeto e as dependencias.

## Passo 2: instalar o Express

Depois, instale o Express:

```bash
npm install express
```

O `express` sera o framework principal da nossa API REST.

## rodar versão incial
- criar index.js e adicionar o código
- no terminal rodar o comando: 
```bash
node index.js
```
- no navegador: 
```bash
http://localhost:PORTA/ROTA
```

## rodar a segunda vez

no terminal:
```bash
npm i
```

## automação para ligar o server

no terminal:
```bash
npm start
```