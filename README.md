# containerization

This repository contains the source code of a web application built with Node.js and Express.js. It also includes a Dockerfile for containerization.

GitHub Repository :<https://github.com/IrakizaGaius/containerization.git>
Docker Hub Page : <https://hub.docker.com/r/irakizagaius/web_application>

Local Setup
Prerequisites
Node.js installed on your local machine
Docker installed on your local machine (optional)
Running the Application Locally
Clone the GitHub repository:

bash : git clone <https://github.com/IrakizaGaius/containerization.git>

Navigate to the project directory:
bash :cd src

Install dependencies:
bash : npm install

Start the application:
bash : npm start
Open your web browser and visit <http://localhost:3000> to view the application.

Docker Setup
Building the Docker Image
Ensure you are in the project directory:

bash : docker build -t yourusername/web-application .

Running a Container
After building the Docker image, you can run a container using the following command:

bash: docker run -p 3000:3000 yourusername/web-application

Open your web browser and visit <http://localhost:3000> to view the application running inside the Docker container.

Assumptions and Decisions
We chose Node.js and Express.js for building the web application due to their simplicity and flexibility.
The application is configured to run on port 3000 by default, but you can modify the port using environment variables.
We decided to containerize the application using Docker to ensure consistency across different environments and simplify deployment.
