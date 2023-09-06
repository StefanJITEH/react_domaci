import React from 'react';

const Drink = ({ drink, change, isOrder }) => {


    return ( 
        <>
            {drink.price>30 && <div className="drink3">
            <div className="drink-name">Name: {drink.name}</div>
            <div className="drink-price">Price: {drink.price} U$D</div>
            {!isOrder && <button className="add-btn" onClick={() => change(drink)}>Add to order</button>}
            {isOrder && <button className="add-btn" onClick={() => change(drink)}>Remove from order</button>}
        </div>}
            {drink.price>10 && drink.price<30 && <div className="drink2">
            <div className="drink-name">Name: {drink.name}</div>
            <div className="drink-price">Price: {drink.price} U$D</div>
            {!isOrder && <button className="add-btn" onClick={() => change(drink)}>Add to order</button>}
            {isOrder && <button className="add-btn" onClick={() => change(drink)}>Remove from order</button>}
        </div>}
            {drink.price<10 && <div className="drink1">
            <div className="drink-name">Name:{drink.name}</div>
            <div className="drink-price">Price: {drink.price} U$D</div>
            {!isOrder && <button className="add-btn" onClick={() => change(drink)}>Add to order</button>}
            {isOrder && <button className="add-btn" onClick={() => change(drink)}>Remove from order</button>}
        </div>}
        </>
     );
}
 
export default Drink;
