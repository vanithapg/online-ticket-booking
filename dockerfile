FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install
# RUN json-server --watch src/food-items.json --port 6800
COPY . .
CMD ["npm", "start"]
EXPOSE 3000