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
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /usr/share/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /usr/share/nginx/conf.d/default.conf && nginx -g 'daemon off;'