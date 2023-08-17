FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV DOCKER_ENV = TRUE

CMD ["npm","start"]