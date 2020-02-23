import React from 'react' ;
import {ReactComponent as Delete } from './icons/delete.svg';
import './ExpenseItem.scss';

const ExpenseItem = () => {

    return(

        <div class="item" id="">
        <div class="item__description">Exp Description</div>
          
        <div class="item__value">- 265</div>
        <div class="item__percentage"></div>
        <div class="item__delete">
          <button class="item__delete--btn">
           <Delete className="item__delete--btn__icon"/>
          </button>
        </div>
          
      </div>
    )
}

export default ExpenseItem;