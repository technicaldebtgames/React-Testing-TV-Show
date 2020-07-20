import React from 'react';
import {render, waitFor, findByTestId} from '@testing-library/react';
import App from './App';
import {fetchShow as mockFS} from "./api/fetchShow";
import fullResponse from './data/testData';

const apiResponse = {...fullResponse};

jest.mock('./api/fetchShow');

test('app renders dropdown', async () => {
 

    

});