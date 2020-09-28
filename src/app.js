import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Link,
    Redirect,
    useLocation,
} from 'react-router-dom';

import { stations } from './store/actions';
import {
    createErrorMessageSelector,
    createLoadingSelector,
    stationsListSelector,
    tagsListSelector,
} from './store/selectors';

import StationsListPage from './pages/stations-list-page';
import StationDetailsPage from './pages/station-details-page';
import Spinner from './components/spinner';

const isLoadingSelector = createLoadingSelector(['GET_STATIONS']);
const errorMessageSelector = createErrorMessageSelector(['GET_STATIONS']);

const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMessage: errorMessageSelector(state),
    stations: stationsListSelector(state),
    tags: tagsListSelector(state),
});

const mapDispatchToProps = {
    loadStations: stations.loadStations
};

export default connect(mapStateToProps, mapDispatchToProps)
(function (
    {
        isLoading,
        errorMessage,
        stations,
        tags,

        loadStations,
    }
) {
    useEffect(() => {
        loadStations();
    }, [loadStations]);

    const { pathname } = useLocation();
    const path = pathname.substr(1);

    const isHomePage = path === '';
    let station = false;
    let tag = false;

    if (!isHomePage) {
        station = stations.find((station) => station.path === path);

        if (!station) {
            tag = tags.find((tag) => tag.path === path);
        }
    }

    if (!isHomePage
        && !station
        && !tag) {
        return <Redirect to="/"/>;
    }

    return (
        <div className="App d-flex flex-column h-100">
            <header>
                <div className="container">
                    <h1>
                        {isHomePage
                            ? 'TuneIn Stations'
                            : <Link to='/'> TuneIn Stations</Link>
                        }
                    </h1>
                </div>
            </header>

            <div className="d-flex flex-grow-1 flex-column h-100">
                {isLoading
                && <Spinner/>}

                {errorMessage
                && <div className="alert alert-danger">{errorMessage}</div>}

                {isHomePage && <StationsListPage/>}
                {tag && <StationsListPage filterByTagId={tag.id}/>}

                {station && <StationDetailsPage stationId={station.id}/>}
            </div>

            <footer>
                <div className="container text-center">
                    &copy; 2020 *****
                </div>
            </footer>

        </div>
    );
});
