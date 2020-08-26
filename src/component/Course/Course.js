import React, { useState } from 'react';
import './Course.css'
import courses from '../../Courses/Courses'
import Information from '../Information/Information'
import Cart from '../Cart/Cart';
const Course = () => {
    
    const [course,setCourse] = useState(courses);
    
    const [cart,setCart] = useState([]);


    const handleCourse =(course) => {
           let newCourse=[...cart,course];
           setCart(newCourse);
    }
    
    return (
        <div className='course-container'>
           <div className='course-information'>
             {
                 course.map(inf => <Information information={inf} key ={inf.id}  handleCourse={handleCourse}></Information>)
             }
           </div>
           <div className='oder-information'>
              <Cart object={cart}></Cart>
           </div>
        </div>
    );
};

export default Course;