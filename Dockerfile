FROM node:14 as cache

LABEL maintainer="samakunchan@gmail.com"
LABEL build=true

WORKDIR /sama-docs-ui-container

ENV PATH /sama-docs-ui-container/node_modules/.bin:$PATH

COPY package*.json ./

# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install

# Installs latest Chromium package for test
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

RUN npm install -g @angular/cli@~14.1.2

FROM cache as environment
#Step 2 Copy dev environment
COPY . .

FROM environment as test
RUN npm run test-ci


FROM test as build
RUN npm run build-prod


FROM nginx:1.18-alpine as docker_image

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/html

COPY src/assets/config/config.json .
COPY src/assets/config/application.json .
COPY --from=build /sama-docs-ui-container/dist/pss-web/ .
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
