
FROM node:alpine
WORKDIR /planning-poker/backend
COPY . .
EXPOSE 80
RUN npm i
RUN npm run build
CMD ["npm", "start"]