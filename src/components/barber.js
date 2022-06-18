import React, { useState } from "react";
import {
  useParams
} from "react-router-dom";
import { barbers } from "./register";


const Barber = (props) => {
    const { id } = useParams();
    const barber = barbers.find((bar) => bar.id === +id)
    const [comment, setComment] = useState('');
    const [commentArr, setCommentArr] = useState([]);

    const handleClickOn = event => {
      
      if (!commentArr.length) setCommentArr([1]);
      else setCommentArr([]);
    }

  const handleChange = event => {
    setComment(event.target.value);
  };

  const SaveComent = () => {
    if (!barber.comments)
      barber.comments = [comment];
    else barber.comments.push(comment)
    setCommentArr([]);
    setComment('');
  }
   
    return (
      <>
      <div className="barber-info">
        <h3>Barber Info</h3>
        <p>name: {barber.firstName + ' ' + barber.lastName}</p>
        <p>email: {barber.email}</p>
        <p>adres: {barber.adress}</p>
        <p>price:{barber.price}</p>
        {barber.comments?.map((comm, index) => (
          <p>{'coment' + index}:{comm}</p>
        ))}
      
      <button type="button" onClick={handleClickOn}>{!commentArr.length ? 'add comment' : 'close'}</button>
      {
        commentArr.map((item, index) => (
          <>
            <input
              type="text"
              id="message"
              name="message"
              onChange={handleChange}
              value={comment}>
            </input>

            <button type="button" onClick={SaveComent}>
              save</button>
          </>    
        ))
      }      
      </div>
    
    </>          
    );
  };

  export default Barber;