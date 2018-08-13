
# The first thing we need to do is define from what image we want to build from. 
# Here we will use the latest LTS (long term support) version 10 of node
FROM node:latest

# Create a directory to hold the application code inside the image, this will be 
# the working directory for your application
WORKDIR /usr/src/app

# This image comes with Node.js and NPM already installed so the next thing we need 
# to do is to install your app dependencies using the npm binary. Please note that 
# if you are using npm version 4 or earlier a package-lock.json file will not be generated.
COPY package*.json ./

RUN npm install

# To bundle your app's source code inside the Docker image, use the COPY instruction
COPY . .

# App binds to port 8079 so you'll use the EXPOSE instruction to have it mapped by 
# the docker daemon
EXPOSE 8079

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]
