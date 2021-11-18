FROM node:14.16.0-alpine
WORKDIR /opt/app
ENV NODE_ENV=test

COPY ./ ./
RUN npm config set registry http://mirrors.tencentyun.com/npm \
    && npm install --production

CMD NODE_ENV=${NODE_ENV} node src/app.js