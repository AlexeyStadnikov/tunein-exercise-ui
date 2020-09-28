import React, { useEffect, useState } from 'react';

export default function ({ url }) {
    const [audio,] = useState(document.createElement('audio'));
    const [isPlaying, setIsPlaying] = useState(false);

    const stop = () => {
        audio.pause();
        audio.src = '';
        setIsPlaying(false);
    };

    const play = () => {
        audio.src = url;
        audio.play();
        setIsPlaying(true);
    };

    useEffect(() => {
        if (isPlaying) {
            play();
        }

        return () => stop();
    }, [url]);

    return (<div className="d-inline-block p-2 border">
        {isPlaying
            ? <button type="button" className="btn" onClick={stop}>Stop</button>
            : <button type="button" className="btn" onClick={play}>Play</button>}
    </div>);
}
