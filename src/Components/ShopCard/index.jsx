import React from 'react';
import Mobile from './mobile';
import Desktop from './desktop';

function ShopCard() {
    if (window.matchMedia("(max-width: 700px)").matches) {
        return (<Mobile />)
    } else {
        return (<Desktop />)
    }
}

export default ShopCard;
