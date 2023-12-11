FROM node:latest

RUN apt update && apt install vim -y

WORKDIR /home/app

COPY . .

RUN npm i

ENTRYPOINT ["npm", "run", "dev"]
