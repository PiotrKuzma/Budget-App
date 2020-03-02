import React from "react";
import "./Form.scss";
import { ReactComponent as Add } from "./icons/add.svg";

const Form = ({
  description,
  amount,
  handleDesc,
  handleAmount,
  handleSubmit,
  handleSelection
}) => {
  return (
    <form className="add" onSubmit={handleSubmit}>
      <select className="add__type" onChange={handleSelection}>
        <option value="inc" defaultValue>
          Inc +
        </option>
        <option value="exp">Exp -</option>
      </select>
      <input
        type="text"
        className="add__description"
        placeholder="Short description"
        id="desc"
        value={description}
        onChange={handleDesc}
      />
      <input
        type="number"
        className="add__value"
        placeholder="Amount"
        id="amount"
        value={amount}
        onChange={handleAmount}
      />
      <button className="add__button" type="submit">
        <Add className="add__button__icon" />
      </button>
    </form>
  );
};

export default Form;
