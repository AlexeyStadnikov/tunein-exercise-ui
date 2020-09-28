import config from '../../config.json';

function fetchJson(url) {
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
}

// region Stations

export function getStations() {
    return fetchJson(config.stationsUrl)
        .then(response => response.data);
}

// endregion
