import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';


class ShopPage extends Component{

     componentDidMount(){
         this.props.fetchCollectionsStart();
      }

    render(){
        const {match} = this.props;
        return (
            <div className='shop-page'>
               <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
               <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
     }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);