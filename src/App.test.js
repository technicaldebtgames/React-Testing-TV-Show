import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {fetchShow} from "./api/fetchShow";
import {fullResponse} from './data/testData';

jest.mock('./api/fetchShow');

test('app renders dropdown and can be opened', async () => {

    fetchShow.mockResolvedValueOnce({data: fullResponse});

    render(<App />);

    const dropDown = await screen.findByText(/select a season/i);

    expect(dropDown).toBeInTheDocument();

    userEvent.click(dropDown);

    const season1Select = await screen.findByText(/season 1/i);

    expect(season1Select).toBeInTheDocument(); // dropdown renders and can open

});

test('app renders first season episode list', async () => {

    fetchShow.mockResolvedValueOnce({data: fullResponse});

    render(<App />);

    const dropDown = await screen.findByText(/select a season/i);

    expect(dropDown).toBeInTheDocument();

    userEvent.click(dropDown);

    const season1Select = await screen.findByText(/season 1/i);

    expect(season1Select).toBeInTheDocument();

    userEvent.click(season1Select);

    const chapterCards = await screen.findAllByText(/chapter/i);

    expect(chapterCards.length).toBe(8);

});

test('app renders second season episode list', async () => {

    fetchShow.mockResolvedValueOnce({data: fullResponse});

    render(<App />);

    const dropDown = await screen.findByText(/select a season/i);

    expect(dropDown).toBeInTheDocument();

    userEvent.click(dropDown);

    const season2Select = await screen.findByText(/season 2/i);

    expect(season2Select).toBeInTheDocument();

    userEvent.click(season2Select);

    const chapterCards = await screen.findAllByText(/chapter/i);

    expect(chapterCards.length).toBe(9);

});

test('app renders third season episode list', async () => {

    fetchShow.mockResolvedValueOnce({data: fullResponse});

    render(<App />);

    const dropDown = await screen.findByText(/select a season/i);

    expect(dropDown).toBeInTheDocument();

    userEvent.click(dropDown);

    const season3Select = await screen.findByText(/season 3/i);

    expect(season3Select).toBeInTheDocument();

    userEvent.click(season3Select);

    const chapterCards = await screen.findAllByText(/chapter/i);

    expect(chapterCards.length).toBe(8);

});

test('app renders fourth season episode list', async () => {

    fetchShow.mockResolvedValueOnce({data: fullResponse});

    render(<App />);

    const dropDown = await screen.findByText(/select a season/i);

    expect(dropDown).toBeInTheDocument();

    userEvent.click(dropDown);

    const season4Select = await screen.findByText(/season 4/i);

    expect(season4Select).toBeInTheDocument();

    userEvent.click(season4Select);

    const chapterCards = await screen.findAllByText(/chapter/i);

    expect(chapterCards.length).toBe(1);

});