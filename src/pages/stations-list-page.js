import React from 'react';
import { connect } from 'react-redux';

import {
    tagsListSelector,
    stationsListSelector,
} from '../store/selectors';

import TagsList from '../components/tags-list';
import StationsList from '../components/stations-list';

const mapStateToProps = (state, ownProps) => ({
    stations: stationsListSelector(state, ownProps.filterByTagId),
    tags: tagsListSelector(state),
});

export default connect(mapStateToProps)
(({
      filterByTagId,
      tags,
      stations,
  }) => {

    return (
        <div className="container py-3">
            <TagsList tags={tags} selectedTagId={filterByTagId}/>
            <StationsList stations={stations}/>
        </div>
    )
});
