import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const activity of cart){
        total = total + activity.duration;
    }
    
    const getLocalValues = () =>{
        let list = localStorage.getItem('lists');
        // console.log(list);
        if(list){
            return JSON.parse(localStorage.getItem('lists'));
        } else {
            return [];
        }
    }
    const [inputData, setInputData] = useState(0);
    const [value, setValue ] = useState(getLocalValues());

    const addItem =() =>{
        if(!inputData){

        }else{
            setValue([...value, inputData]);
            setInputData(0)
        }
    }

    useEffect(()=>{
     localStorage.setItem('lists',JSON.stringify(value))
    },[value])

    const handleBreakTime = (value) =>{
         const newValue = value * 1;
         setValue(newValue);
    }

    
    return (
        <div className='cart'>
            <div>
            <h3 className='user-name'>Maysha Tabassum</h3>
            <p>Dhaka, Bangladesh</p>
            
            </div>
            <div>
                <h5>Add A Break</h5>
                <div >
                <button onClick={()=>handleBreakTime(10)} onClickCapture={addItem}className='btn'>10m</button>
                <button onClick={()=>handleBreakTime(20)} onClickCapture={addItem} className='btn'>20m</button>
                <button onClick={()=>handleBreakTime(30)} onClickCapture={addItem} className='btn'>30m</button>
                <button onClick={()=>handleBreakTime(40)} onClickCapture={addItem} className='btn'>40m</button>
                </div>
            </div>
            <div className=''>
                <h5 className="total-time">Activity Details</h5>
                 <div className='task-time'>
                    <p>Total Task Time {total} minutes</p>
                    
                 </div>
                 <div className="break-time">
                    <p>Break Time : {value} minutes</p>
                    
                 </div>
                 <div>
                    <button className='complete-btn'>Activity Completed</button>
                 </div>
            </div>
        </div>
        
    );
};

export default Cart;