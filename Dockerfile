FROM node:latest

WORKDIR /home/app

COPY . .

RUN npm i

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
