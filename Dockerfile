# FROM node:12.18-alpine
# ENV NODE_ENV production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]

FROM node:12.18-alpine as build

#also say 
WORKDIR /app
#copy the react app to the container
COPY . /app

# #prepare the contiainer for building react 
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent 
RUN npm run build 

#prepare nginx
FROM nginx:1.16.0-alpine

COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d



#fire up nginx
EXPOSE 3000 
CMD ["nginx","-g","daemon off;"]