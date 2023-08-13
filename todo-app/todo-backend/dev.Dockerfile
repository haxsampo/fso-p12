FROM node:16

WORKDIR /usr/src/app

COPY . .

#install eikä ci koska dev
RUN npm install


ENV DOCKER_ENV = TRUE
#command to start in dev mode
CMD ["npm","run", "dev"]