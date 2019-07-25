import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import './collections-overview.styles.scss';

const CollectionsOverView = ({collections}) =>{
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...collectionProps})=>(
                    <CollectionPreview key={id} {...collectionProps}/>
                ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverView);