import React from 'react';
import { useEffect, useState } from "react";
import Drink from "./Drink";

const Main = ({ data, change, isOrder }) => {
    const [n, setN] = useState(0);
    const [show, setShow] = useState(data.slice(0+3*n, 3+3*n));

    useEffect(() => {
        setShow(data.slice(0+3*n, 3+3*n));
    }, [n, data])

    return ( 
        <div className="main">
            <div className="pagination">
                <button onClick={() => setN(n-1)} disabled={n<=0} className="pagination-btn">Last page</button>
                <button onClick={() => setN(n+1)} disabled={n>=1} className="pagination-btn">Next page</button>
            </div>
            
            <div className="drink-container">
                {show && show.map((drink) => (
                <Drink drink={drink} change={change} isOrder={isOrder}/>
            ))}
            </div>
            
        </div>
     );
}
 
export default Main;
