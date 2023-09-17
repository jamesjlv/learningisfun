# Learning is Fun

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=InDevelopment&color=GREEN&style=for-the-badge)

## Description

- This application will help you get fluent in a language in a fun way.

## Tech

![Badge Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black) ![Badge React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Badge React ](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Badge Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white) ![Badge Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Badge Typescript](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## Archtecture

This application was built using some concepts of clean architecture, thinking about scalability, with that, all the impacts of changing some framework or library is reduced drastically.

## Decisions

I decided to use Firebase + firestore due to the faster implementation and usability.

## UI

[![UI](https://raw.githubusercontent.com/jamesjlv/learningisfun/main/src/assets/images/App.png)](https://raw.githubusercontent.com/jamesjlv/learningisfun/main/src/assets/images/App.png)

## How to start

- Clone this repository in your device and runs the follow command

```shell
yarn
```

### Android

##### Dev Mode

Run in a develop mode, you can run this command bellow in your terminal

```shell
yarn android
```

##### Production/Release

To create an release version, just run the code bellow

```shell
yarn build:android:production
```

The SDK file will be stored in ./android/app/build/outputs/apk/release/app-release.apk

### iOS

##### Development

Run in a develop mode, you can run this command bellow in your terminal

```shell
yarn ios
```
