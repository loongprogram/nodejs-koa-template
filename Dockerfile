FROM node:16.13.1-alpine
WORKDIR /opt/app
ENV NODE_ENV=test

COPY ./ ./
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tencentyun.com/g' /etc/apk/repositories \
    && apk add tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo Asia/Shanghai > /etc/timezone \
    && apk del tzdata \
    && npm config set registry http://mirrors.tencentyun.com/npm \
    && npm install --production

CMD NODE_ENV=${NODE_ENV} node src/app.js