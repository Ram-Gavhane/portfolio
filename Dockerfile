FROM oven/bun:1

WORKDIR /portfolio
COPY bun.lock bun.lock
COPY package.json package.json

RUN bun i
COPY . .
CMD [ "bun", "start" ]