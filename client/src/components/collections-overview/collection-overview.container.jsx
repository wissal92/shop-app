import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import withSpinner from '../withSpinner/withSpinner.component';
import CollectionOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionOverview);

export default CollectionOverviewContainer;