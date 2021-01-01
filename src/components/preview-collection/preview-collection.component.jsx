import React from 'react';
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.styles.scss'

const PreviewCollection= ({title, items}) => {
    return (
        <div className='preview-collection'>
            {console.log(items)}
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx<4).map(({id, ...OtherItemProps}) => ( <CollectionItem key={id} {...OtherItemProps}/> ) ) }
            </div>
        </div>
    )
}

export default PreviewCollection;