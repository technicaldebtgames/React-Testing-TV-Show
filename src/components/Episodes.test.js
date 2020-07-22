import React from 'react';
import {render} from '@testing-library/react';
import Episodes from './Episodes';
import {episodes} from '../data/testData';

const allSeasons = episodes; 
/*const seasonOne = episodes.filter(episode => episode.season === 1);
const seasonTwo = episodes.filter(episode => episode.season === 2);
const seasonThree = episodes.filter(episode => episode.season === 3);
const seasonFour = episodes.filter(episode => episode.season === 4);*/

test('episodes component exists and renders when called with empty props data', () => {

    render(<Episodes episodes={[]}/>);

});

test('episodes component renders with all dummy data', () => {

    const episodeStrings = allSeasons.map(episode => 'Season ' + episode.season + ', Episode ' + episode.number);

    const {rerender, getByText} = render(<Episodes episodes={[]}/>);

    rerender(<Episodes episodes={allSeasons}/>);

    episodeStrings.forEach(episodeString => expect(getByText(episodeString)).toBeTruthy());

});