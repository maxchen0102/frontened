# Stage 1: Build Vue.js application
FROM node:12.22.1 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build Vue.js application
RUN npm run build

# Stage 2: Serve Vue.js application using nginx
FROM nginx:alpine

# Copy built Vue.js application from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
