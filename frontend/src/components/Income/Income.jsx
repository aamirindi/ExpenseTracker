import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";

const Income = () => {
  return (
    <incomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container"></div>
          <div className="incomes"></div>
        </div>
      </InnerLayout>
    </incomeStyled>
  );
};

const incomeStyled = styled.div``;

export default Income;
