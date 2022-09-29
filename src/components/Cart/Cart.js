import React, { useState } from 'react';
import './Cart.js'

const Cart = (props) => {
    const [value, setValue ] = useState(0);

    const {cart} = props;

    let total = 0;
    for(const activity of cart){
        total = total + activity.duration;
    }

    const handleBreakTime = (value) =>{
         const newValue = value * 1;
         setValue(newValue);
    }
    return (
        <div className='cart'>
            <div>
            <h4>Maysha Tabassum</h4>
            <p>Dhaka, Bangladesh</p>
            
            </div>
            <div>
                <h5>Add A Break</h5>
                <div className='btn'>
                <button onClick={()=>handleBreakTime(10)}>10m</button>
                <button onClick={()=>handleBreakTime(20)}>20m</button>
                <button onClick={()=>handleBreakTime(30)}>30m</button>
                <button onClick={()=>handleBreakTime(40)}>40m</button>
                </div>
            </div>
            <div className='total-time'>
                <h5>Activity Details</h5>
                 <div>
                    <p>Total Task Time: {total} minutes</p>
                    
                 </div>
                 <div>
                    <p>Break Time : {value}</p>
                    
                 </div>
            </div>
        </div>
        
    );
};

export default Cart;