import React from 'react';
import { Link } from 'react-router-dom';

export default ({ stations }) => {
    return (
        <ul className="list-unstyled d-flex flex-row flex-wrap">
            {stations.map((station) => (
                <li key={station.id}
                    className="text-center m-3"
                >
                    <Link to={`/${station.path}`}>
                        <div>
                            <img src={station.imgUrl}
                                 width="145"
                                 height="145"
                                 alt=""/>
                        </div>
                        {station.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
