<h1 align="center">
  <img alt="" height="80" title="" src=".github/icLogo.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">
</p>

![cover](.github/cover.png?style=flat)

## 💻 Project

An example of Portuguese dictionary to search words by Api and on DeepSeek IA.

# Team

- Here must contain the names of everyone in the team, at the moment that
  project is created
  - React Native Engineer: Alexandre Marques

# To Navigation

- expo-router.

## Features

- [ ] Search Words.
- [ ] Storage Searched words.
- [ ] Random words.

## ✨ Technologies

- [ ] Expo.
- [ ] React Native.
- [ ] Styled-components.
- [ ] Commitizen
- [ ] React Native Circular Progress

## Running the project

**Install dependencies**

```
npm / yarn
```

**Install IOS Pods**

```
cd ios && pod install
```

### Run Expo Environment

```
npx expo start / yarn start -c
```

### Run RN CLI Environment

**Run IOS**

```
yarn ios / npx run:ios
```

**Run Android**

```
yarn android / npx run:android
```

## Running the tests

Use **yarn test** to execute the jest tests.

```cl
yarn test
```

### Test with DeepSeek IA

Use **ollama** to execute tests with DeepSeek IA locally.

```
install ollama by homebrew or package
ollama run deepseek-r1:1.5b
```

Use localhost **http://127.0.0.1:11434/api/chat** to execute tests with DeepSeek IA.

```
{
	"model": "deepseek-r1:1.5b",
	"messages": [{ "role": "user", "content": "significado da palavra brusque" }],
	"stream": false
}
```

<br />

# Project Structure

```bash
  App
    ├── (tabs)
    ├── assets
    │   └── images
    ├── components
    ├── constants
    ├── contexts
    ├── hooks
    ├── models
    ├── styles
        └── dark
        └── light
```

<div align="center">
  <small>Developed By Alexandre Marques - 2025/Fev</small>
</div>
