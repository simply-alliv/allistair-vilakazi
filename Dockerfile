# Stage 1 - the build process
FROM node:12.18.3-alpine as build-deps

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
RUN apk --no-cache add curl

# Install a version of envsubst that allows for the replacement of variables with environment variables, and set default values.
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin

COPY ./nginx.config /etc/nginx/nginx.template

CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html