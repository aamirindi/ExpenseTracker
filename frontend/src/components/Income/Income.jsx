import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import Form from "../Form/Form";

const Income = () => {
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes"></div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeStyled = styled.div``;

export default Income;
