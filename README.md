
# RuleOfThumbFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

This platform is a vote system where users can vote positively or negatively to a famous person many times.  Votes are stored in a database and reports from different person is shown in real time by implementing [pusher](https://pusher.com/).

## Run Locally

This app can be run by typing `ng serve`  and navigate to http://localhost:4200/. Make sure to install dependencies with `npm i` before.
 
This app needs to be run at the same time with a back-end app to consume different endpoints for fetching data , save votes and report in real time any change of any vote. 

This API app can be found in  https://github.com/lealarcon/rule-of-thumb-back 
  

## Let's run it easier .... use docker!!!
Don't you want to download the front-end and the back-end repo?? let's use docker. I have previously created some docker images to run this project. 

First, Install docker in your machine following the tutorial in https://www.docker.com/  , if you are using a linux distribution, make sure to install docker-compose.

Inside this repo you will find the Dockerfile to build the app in production environment.  if you want to re build the image you can run the `build-docker-windows.bat` file. 

This dockerized app is configures for production environment, it connects to a instance created in GCP which is running the back-end and a mongo database to persist votes data.

If you just want to run it, create a file  `docker-compose.yaml`

```
version: '3'
services:
  rule-of-thumb-front:
    container_name: rule-of-thumb-front
    image: 'lealarcon/rule-of-thumb-front:1.0.0'
    restart: always
    ports:
      - "8080:80"
```
Then type `docker-compose up -d` , wait until the image is downloaded and container is running.

Make sure both this app is running by typing `docker ps -a` 

```
CONTAINER ID   IMAGE                                 COMMAND                  CREATED          STATUS                   PORTS                    NAMES
799c49f8efaa   lealarcon/rule-of-thumb-front:1.0.0   "/docker-entrypoint.…"   32 minutes ago   Up 32 minutes            0.0.0.0:8080->80/tcp     rule-of-thumb-front
```
Access in you browser  to http://localhost:8080