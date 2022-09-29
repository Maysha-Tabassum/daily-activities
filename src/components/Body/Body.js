import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Body.css'

const Body = () => {
    const [activities, setActivities] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    
    const handleAddToCart =(activity)=> {
        console.log(activity);
        const newCart = [...cart, activity];
        setCart(newCart);
    }

    return (
        <div className='body-container'>
            <div className='activities-container'>
            {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        handleAddToCart={handleAddToCart}
                    ></Activity>)
                }
            </div>
            <div className='cart-container'>
                  <h1>cart</h1>
            </div>
        </div>
    );
};

export default Body;