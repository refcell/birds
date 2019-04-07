# base image
FROM node

# set working directory
RUN mkdir /birds
WORKDIR /birds

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /birds/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /birds
RUN npm install --silent
RUN npm install react-scripts -g --silent

# start app
CMD ["npm","run","start"]
