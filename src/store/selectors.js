export const createLoadingSelector = (actions) => (state) => {
    return actions
        .some((action) => state.loading[action]);
};

export const createErrorMessageSelector = (actions) => (state) => {
    return actions
        .map((action) => state.error[action])
        .filter((action) => action)[0] || '';
};

export const stationsListSelector = (state, filterByTagId) =>
    filterByTagId
        ? state.stations.all.filter((station) => station.tags.find((tag) => tag.id === filterByTagId))
        : state.stations.all;

export const tagsListSelector = (state) => state.stations.tags;

export const stationByIdSelector = (state, stationId) => state.stations.all.find((station) => station.id === stationId);
