# setup
FROM node
WORKDIR /usr/src/app

# install deps
COPY package*.json ./
RUN npm install

# copy source and start
COPY . .
CMD [ "npm", "start" ]