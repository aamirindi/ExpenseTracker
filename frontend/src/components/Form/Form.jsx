import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";

const Form = () => {
  const { addIncome } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="number"
          value={amount}
          name={"amount"}
          placeholder="Salary Amount"
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholder="Enter a Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className=" input-control">
        <input
          type="text"
          value={category}
          id="category"
          name={"category"}
          placeholder="Salary Category"
          onChange={handleInput("category")}
        />
      </div>
      <div className=" input-control">
        <textarea
          value={description}
          id="description"
          name={"description"}
          placeholder="Add a Reference"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        />
      </div>
      <div className="submit-btn">
        <button type="submit">Add Income</button>
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.div``;

export default Form;
