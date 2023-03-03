import {APIGatewayProxyHandler} from 'aws-lambda';

/**
 * This Lambda function handles API Gateway events and returns a 200 status code
 * with the message "hello world" in the response body. If an error occurs, it
 * logs the error to the console and returns a 500 status code with the message
 * "Internal Server Error" in the response body.
 *
 * @param {APIGatewayProxyEvent} event - The API Gateway event object.
 * @returns {APIGatewayProxyResult} The API Gateway response object.
 */

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        return {
            statusCode: 200,
            body: 'hello world'
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: 'Internal Server Error'
        };
    }
}