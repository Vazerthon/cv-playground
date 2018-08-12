# setup
FROM justadudewhohacks/opencv-nodejs
WORKDIR /usr/src/app

# install deps
COPY package*.json ./
RUN npm install

# copy source and start
COPY . .
CMD [ "npm", "run", "start-app" ]