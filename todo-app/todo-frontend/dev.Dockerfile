FROM node:16
WORKDIR /usr/src/app
COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install
ENV DOCKER_ENV = TRUE
ENV WATCHPACK_POLLING=true
# npm start is the command to start the application in development mode
CMD ["WATCHPACK_POLLING=true","npm", "start"]
