import { handler } from './index';


/**
 * This Jest test suite verifies the behavior of the Lambda function implemented
 * in the `handler` function exported from the './index' module.
 *
 * It tests two scenarios:
 * 1. A successful invocation of the Lambda function, which should return a 200
 * status code and the message "hello world" in the response body.
 * 2. An error scenario, in which an exception is thrown within the Lambda
 * function. This should trigger the catch block, log the error to the console,
 * and return a 500 status code and the message "Internal Server Error" in the
 * response body.
 */

describe('my test', () => {
    it('should return a 200 status code and "hello world" in the body', async () => {
        const event = {};

        const result = await handler(event);

        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('hello world');
    });

    it('should catch and log errors and return a 500 status code and "Internal Server Error" in the body', async () => {
        const event = {};

        // Mock the console.error method
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

        // Throw an error to trigger the catch block
        jest.spyOn(Math, 'random').mockReturnValue(0.5);

        const result = await handler(event);

        expect(result.statusCode).toBe(500);
        expect(result.body).toBe('Internal Server Error');

        expect(consoleErrorSpy).toHaveBeenCalled();

        // Restore the console.error method
        consoleErrorSpy.mockRestore();
    });
});
