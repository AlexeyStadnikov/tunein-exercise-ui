import {
    GET_STATIONS_FAILURE,
    GET_STATIONS_REQUEST, GET_STATIONS_SUCCESS,
} from '../action-types';

import * as api from '../api';

export const loadStations = () => async (dispatch) => {
    dispatch({ type: GET_STATIONS_REQUEST });

    let stations;
    try {
        stations = await api.getStations();
    } catch (e) {
        dispatch({ type: GET_STATIONS_FAILURE, payload: { message: `Error loading stations list` } });
        return;
    }

    dispatch({ type: GET_STATIONS_SUCCESS, payload: { stations } });
};
