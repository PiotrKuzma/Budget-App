import React from 'react' ;
import './Form.scss';
import {ReactComponent as Add } from './icons/add.svg';

const Form = () => {

    return (
        <div class="add">
        <select class="add__type">
          <option value="inc" selected>Inc +</option>
          <option value="exp">Exp -</option>
        </select>
        <input
          type="text"
          class="add__description"
          placeholder="Short description"
        />
        <input type="number" class="add__value" placeholder="Amount" />
        <button class="add__button">
         <Add className ="add__button__icon"/>
        </button>
      </div>
        
    )
}

export default Form;