# Simple Secure Chat
## Introduction
Project started by me to learn more about the **fundamentals** of **full-stack development**.
Fun project! Codebase is written by a beginner, don't use any of this as something serious.
I'm trying to keep the code as **easy** and **straight-forward** as possible.
The goal is a **self-hosted no-log messenger**, based on **client-sided** en/decryption with **AES**.
It's very easy to deploy, see **[Installation](#Installation)** below.

## Frontend
Written in **plain HTML/CSS**, with **Vue** (No-CLI) as JS-Framework. 
To keep it simple there is (currently) just **one file** for each HTML, CSS
and JS.

## Backend
Written with **express** and **socket.io**. I'm not very comfortable with both of them yet, so don't expect something special.

## Installation
You need to install **[NodeJS](https://nodejs.org/)** (and **[Git](https://git-scm.com/)**, if you use ```git clone``` instead of downloading the zip-archive) first **before** installing SSC.
  

1. **Clone** the repo to your pc/server.
```bash
git clone https://github.com/gold-ly/simple-secure-chat.git
```
**or** use the zip-archive.

2. **Go inside** the simple-secure-chat directory.
```bash
cd simple-secure-chat/
```  
3. **Install** the dependencies
```bash
npm install --only=prod
```
4. **Start** the server
```bash
npm start
```
