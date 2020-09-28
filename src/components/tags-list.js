import React from 'react';
import { Link } from 'react-router-dom';

export default function ({ tags, selectedTagId }) {
    return (
        <ul className="list-inline">
            {tags.map((tag) =>
                <li key={tag.path} className="list-inline-item">
                    {tag.id === selectedTagId
                        ? <b>{tag.name}</b>
                        : <Link to={`/${tag.path}`}>{tag.name}</Link>
                    }
                </li>)}
        </ul>
    );
}
