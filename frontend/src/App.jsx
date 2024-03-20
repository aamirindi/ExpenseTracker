import styled from "styled-components";
import bg from "./img/background.png";
import { MainLayout } from "./styles/Layout";
import Orb from "./components/Orb/Orb";

const App = () => {
  return (
    <AppStyled bg={bg} className="App">
      <Orb />

      <MainLayout></MainLayout>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  position: relative;
`;
export default App;
