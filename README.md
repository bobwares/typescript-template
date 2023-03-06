# TypeScript Starter Project

This project is a starter template for building serverless applications with TypeScript on the AWS platform using the Serverless Framework.

## Overview

The TypeScript Starter Project provides a basic project structure and configuration that can be used as a starting point for building serverless applications with TypeScript. It includes a sample Lambda function, API Gateway configuration, and serverless.yml file that can be customized to fit your specific requirements.

## Technology Stack

The project uses the following technologies and frameworks:

- Serverless Framework
- TypeScript
- Node.js
- AWS

Serverless Framework
====================

The Serverless Framework is an open-source tool that simplifies the process of deploying and managing serverless applications. It supports popular cloud providers like AWS, Microsoft Azure, Google Cloud Platform, and more.

AWS Lambda supports multiple versions of Node.js, including the latest Long-Term Support (LTS) version. As of March 2023, the current LTS version is Node.js 18, which is fully supported by AWS Lambda.

The current version of the Serverless Framework is 3.x, which provides improved performance, simplified deployments, and enhanced security features.

## Install Serverless CLI

1.  Ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can download Node.js from the official website: <https://nodejs.org/en/download/>

2.  Open a terminal or command prompt and run the following command to install the Serverless Framework:

    npm install -g serverless

    This command will install the Serverless Framework globally on your machine.

3.  After the installation is complete, verify that the Serverless CLI is installed by running the following command:

  
    serverless --version

    This command should output the version number of the Serverless Framework, indicating that it is installed correctly.
## Steps to Set Up and Deploy a TypeScript Serverless Application on AWS

To get started with the TypeScript Starter Project, follow these steps:

1. Clone the repository to your local machine.
    git clone https://github.com/bobwares/typescript-template my-project
2. Change [service-name] in serverless.yml to the name of your service.
3. Change [service-name] in package.json to the name of your service.
4. Install dependencies by running `npm install`.
5. Set up your AWS credentials using one of the methods supported by the Serverless Framework, such as environment variables or an AWS profile.
6. Customize the `serverless.yml` file to fit your specific requirements.
7. Write your own TypeScript code for the Lambda function.
8. Deploy your application to AWS using the Serverless Framework.

## Usage

To deploy your application to AWS using the Serverless Framework, run the following command:

    serverless deploy

This will deploy your application to AWS and provide you with the necessary endpoints to access your Lambda function.

To invoke your Lambda function, use the following command:

    serverless invoke -f myFunction -l


Replace `myFunction` with the name of your function.

## Development

To run your application locally for development and testing purposes, use the following command:

    npm run start


This will start a local development server that you can use to test your application. The server will automatically reload whenever you make changes to your TypeScript code.

To run tests, use the following command:

    npm run test

This will run the test suite for your application using Jest.

## References

The GitHub repository for the Serverless Framework can be found at <https://github.com/serverless/serverless>.

The Serverless Framework also provides a number of example repositories showcasing various use cases and configurations. Some of the popular examples include:

-   <https://github.com/serverless/examples>: Official examples repository maintained by the Serverless Framework team.
-   <https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb-and-offline>: Example of building a RESTful API using Node.js and DynamoDB, with local development and testing using the Serverless Offline plugin.
-   <https://github.com/serverless/examples/tree/master/aws-python-pynamodb-api>: Example of building a Python-based RESTful API using PynamoDB, with AWS Lambda and API Gateway.
-   <https://github.com/serverless/examples/tree/master/aws-node-auth0-custom-authorizers-api>: Example of using Auth0 for custom authorizers in a Node.js-based API.

You can find more examples by exploring the Serverless Framework's examples repository on GitHub.