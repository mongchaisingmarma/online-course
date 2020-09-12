import React from 'react';
import './Course.css'

const Course = (props) => {
    const {course, price} = props.course;
    const handleAddCourse = props.handleAddCourse
    return (
        <div className= 'courseStyle'>
            <h5>Course: {course}</h5>
            <p>Price : <strong>$ {price}</strong></p>
            <button onClick = {() => handleAddCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Course;