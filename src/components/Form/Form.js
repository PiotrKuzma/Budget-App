import React from 'react' ;
import './Form.scss';
import {ReactComponent as Add } from './icons/add.svg';

const Form = () => {

    return (
        <div className="add">
        <select className="add__type">
          <option value="inc" defaultValue>Inc +</option>
          <option value="exp">Exp -</option>
        </select>
        <input
          type="text"
          className="add__description"
          placeholder="Short description"
        />
        <input type="number" className="add__value" placeholder="Amount" />
        <button className="add__button">
         <Add className ="add__button__icon"/>
        </button>
      </div>
        
    )
}

export default Form;