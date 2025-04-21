import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

//mock global fetch api - hey replace the real fetch api with a mock function
//this prevents real network calls during tests

describe('delete todo item test suite', () => {
    //setup
    //test variables: error msg, todo details

    //clear mocks, make sure we clean up between tests

    it('should successfully delete a todo item', async () => {
        //simulate a successful response
        //need to pass ok as true and that the json promise has resolved
        //we are pretending the server responded with HTTP 200
        //and the response body is a successful json payload => empty {}
        //first check, fetch as the mock, confirm it resolves
        //assert that the function resolves
        //call deleteTodo() and make sure it doesnt throw any errors
        //assert that fetch() was called with the correct values
    });
});
