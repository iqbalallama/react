import React from 'react';
import { addToLocal } from '../../utilities/fakedb';
import './Person.css'
const Person = (props) => {
    const {name,company,age,id} = props.person;
    const addToCart = (id) =>{
        addToLocal(id)
    }
    return (
        <div className='person'>
            <h1>Name:{name}</h1>
            <p>Company:{company}</p>
            <p>Age:{age}</p>

            <button onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Person;