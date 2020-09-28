import {
    GET_STATIONS_SUCCESS,
} from '../action-types';

const initialState = {
    all: [],
    tags: [],
};

const sortStationBy = 'popularity';
const safeString = (name) => name.toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-');

export default (state = initialState, action) => {
    const payload = action.payload || {};

    switch (action.type) {
        case GET_STATIONS_SUCCESS:
            const { stations } = payload;

            const tags = Array
                .from(
                    new Set(
                        stations.reduce((tags, station) => {
                            if (station.tags?.length) {
                                tags.push(...station.tags);
                            }
                            return tags;
                        }, [])
                    )
                )
                .map((tag) => ({
                    id: tag,
                    path: safeString(tag),
                    name: tag,
                }));

            stations.forEach((station) => {
                station.path = safeString(`${station.name} ${station.id}`);
                station.tags = station.tags.map((tagName) => tags.find((tag) => tag.name === tagName));
            });

            return {
                ...state,
                all: stations.sort((a, b) => b[sortStationBy] - a[sortStationBy]),
                tags,
            };

        default:
    }

    return state;
};
