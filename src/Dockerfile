# Use a minimal base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR ./

# Install production dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY src .

# Expose the port your Nest.js application is listening on (adjust as needed)
EXPOSE 3000

# Start your Nest.js application
CMD ["npm", "run", "start:dev"]
