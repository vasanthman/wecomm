FROM 421933662555.dkr.ecr.ap-south-1.amazonaws.com/node:18-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app


ENV NEXT_TELEMETRY_DISABLED 1

COPY . .
RUN  npm install --legacy-peer-deps

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]