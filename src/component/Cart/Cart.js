import React from 'react';

import './Cart.css'

import {Dropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUsers,faCartPlus} from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {
     const cart = props.object;
    
     let totalPrice = cart.reduce((total, price) =>total+price.price,0);
     
     const formate = (price)=>{
         const value = price.toFixed(2);
       
         return Number(value);

     }

    return (
        <div className='full-section'>
            <div className='cart-section'>
              <h6>Enroll Summery</h6> 
              <p>Enrolled Courses: {cart.length} </p>
              <p>Total Price : $ {formate(totalPrice)}</p>
            </div>
            <div className='list-section'>
            <Dropdown>
                    <Dropdown.Toggle variant="info btn-lg" id="dropdown-basic">
                 <FontAwesomeIcon className='text-light' icon={faCartPlus} /> <span className="badge badge-light">{cart.length}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                         {
                            cart.map((course, index) =>
                                <Dropdown.Item key={course.id}>
                                    {index + 1}. {course.courseName} - ${course.price}
                                </Dropdown.Item>
                            )
                         }
                        <Dropdown.Divider />
                     <Dropdown.Item eventKey="4">Total amount: ${formate(totalPrice)}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default Cart;