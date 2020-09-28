import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { stationByIdSelector } from '../store/selectors';
import TagsList from '../components/tags-list';
import AudioPlayer from '../components/audio-player';

export default function ({ stationId }) {
    const station = useSelector((state) => stationByIdSelector(state, stationId));
    if (!station) {
        return <Redirect to='/'/>
    }

    return (
        <div className="container d-flex py-5">
            <div>
                <img src={station.imgUrl}
                     width="145"
                     height="145"
                     className="mb-2"
                     alt=""/>
                <div className="text-center">
                    <AudioPlayer url={station.streamUrl}/>
                </div>
            </div>
            <div className="pl-3">
                <h2>{station.name}</h2>
                <TagsList tags={station.tags}/>
                <p>{station.description}</p>
            </div>
        </div>
    );
};
