import React from 'react';
import Drink from "./Drink";

const Order = ({ order, change, isOrder }) => {
    return ( 
        <div className="main">
            <div className="drink-container">
                {order && order.map((drink) => (
                    <Drink drink={drink} change={change} isOrder={isOrder} />
                ))}
            </div>
        </div>
     );
}
 
export default Order;

