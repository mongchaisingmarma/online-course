import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Course from './Component/Course/Course';
import data from './data/data.json';


function App() {
  
  const [course, setcourse] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setcourse(data)
  }, []);
  
  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }

  

  return (
    <div className="App">
      <h1>Udemy Courses</h1>
      <h1>Total Course: {course.length}</h1>
      <h4>Course Added : {cart.length}</h4>
     <Cart cart = {cart}></Cart>
      {
        course.map(cr => <Course course = {cr} handleAddCourse = {handleAddCourse} key ={cr.id}></Course> )
      }
      
    </div>
  );
}

export default App;
