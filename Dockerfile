FROM node:alpine

# add scripts to docker container path
ENV PATH /app/node_modules/.bin:$PATH

# COPY package-lock.json ./
COPY package.json ./

# install dependencies
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# COPY project files
COPY . /app

# switch directory
WORKDIR /app

# start app
CMD [ "npm", "start" ]
