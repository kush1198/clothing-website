import React from 'react';
import SHOP_DATA from './shop.data';
import './shop.styles.scss'
import PreiewCollection from '../../components/preview-collection/preview-collection.component'

class Shop extends React.Component{
    constructor(props){
        super(props)

        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        return(
            <div>
                {this.state.collections.map(({id, ...otherCollectionProps}) => (<PreiewCollection key={id} {...otherCollectionProps}/>))}
            </div>
        )
    }
}

export default Shop;