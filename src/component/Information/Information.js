import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserFriends,faStar,faDollarSign,faGlobe,faPlus} from '@fortawesome/free-solid-svg-icons';

import {Button,Badge} from 'react-bootstrap'

import './Information.css'

const Information = (props) => {
    //console.log(props.information);
    const {courseName,imageUrl,introduction,author,courseRating,language,price,student,studentRating,feedback} = props.information;

     const [btnText, setBtnText] = useState('Enroll');
     const changeText = (text) => setBtnText(text);
    
    return (
        <div>
            <div className="row courses-section">
                <div className="col-md-4 img-section">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="col-md-8 information-section">
                   <h2 className='courseName'>{courseName}</h2>
                   <p className='introduction'>{introduction}</p>
                   <p><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Course Rating : {courseRating} </p>
                   <p> <Badge variant="success">{feedback}</Badge>{' '} <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon> Student : {student} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>Rating :{studentRating}</p>
                    <h5 className='author'>Crated by : {author}</h5>
                    <p><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> { language}</p>
                    <p className='price'>Price : <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> {price} </p>
                   <Button onClick = {()=>{props.handleCourse(props.information);changeText('Enrolled')}} variant="outline-success"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> {btnText} </Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Information;