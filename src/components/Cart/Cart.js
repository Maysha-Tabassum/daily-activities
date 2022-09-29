import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const activity of cart){
        total = total + activity.duration;
    }

    const handleBreakTime = (value) =>{
         console.log(value)
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
                    <h5>Total Task Time: {total} minutes</h5>
                    
                 </div>
                 <div>
                    <p>Break Time</p>
                    
                 </div>
            </div>
        </div>
        
    );
};

export default Cart;