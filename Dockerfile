FROM node:18.14.2-alpine3.17

WORKDIR /opt/player-path

COPY ./web ./web
COPY ./api ./api

WORKDIR /opt/player-path/web
RUN npm i
RUN npm run build
RUN mv /opt/player-path/web/build /opt/player-path/api/public

WORKDIR  /opt/player-path/api
RUN npm i

EXPOSE 3001

CMD ["npm", "start"]