import React from 'react' ;
import {ReactComponent as Delete } from './icons/delete.svg';
import './ExpenseItem.scss';

const ExpenseItem = () => {

    return(

        <div className="item" id="">
        <div className="item__description">Exp Description</div>
          
        <div className="item__value">- 265</div>
        <div className="item__percentage"></div>
        <div className="item__delete">
          <button className="item__delete--btn">
           <Delete className="item__delete--btn__icon"/>
          </button>
        </div>
          
      </div>
    )
}

export default ExpenseItem;