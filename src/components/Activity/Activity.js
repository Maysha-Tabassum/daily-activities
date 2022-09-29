import React from 'react';
import './Activity.css'

const Activity = (props) => {
    console.log(props.activity)
    const {activity, handleAddToCart} = props;
    const {img, name, title, body, duration} = activity
    return (
        <div className='activity'>
            <img src={img} alt=""/>
            <div className='activity-info'>
            <p className='activity-name'>{name}</p>
            <p> ${title}</p>
            <p><small>body: {body}</small></p>
            <p><small>Duration: {duration} min</small></p>
            </div>
            <button onClick={()=>handleAddToCart(activity)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
            </button>
        </div>
    );
};

export default Activity;