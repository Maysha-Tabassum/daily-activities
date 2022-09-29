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
            <p className='activity-title'> {title}</p>
            <p><small>{body}</small></p>
            <p><small className='task-duration'>Duration: {duration} min</small></p>
            </div>
            <button onClick={()=>handleAddToCart(activity)} className='btn-cart'>
                <p className='btn-text'>Add to list</p>
            </button>
        </div>
    );
};

export default Activity;