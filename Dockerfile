###############
#  Dev Image  #
###############

FROM node:16-alpine as dev

WORKDIR /app
EXPOSE 3000

ENV NODE_ENV=development
CMD ["npm", "run", "start:dev"]

# install dependencies
COPY package*.json next.config.js ./
RUN npm ci

COPY src/ ./

#################
#  Build Image  #
#################

FROM dev as build
RUN npm run build

#  prune dev dependencies to keep production image smaller
RUN npm prune --production

######################
#  Production Image  #
######################

FROM node:16-alpine as production
WORKDIR /app
USER 1000
EXPOSE 3000

ENV NODE_ENV=productionCMD ["npm", "run", "start"]

# Copy build files
COPY package*.json, next.config.js ./
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next/ ./.next
COPY --from=build /app/public/ ./public