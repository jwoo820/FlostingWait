import "./App.css";
import img from "./Image/임시이미지.png";
import styled from "styled-components";

const MainImg = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  img {
  }
`;

function App() {
  return (
    <MainImg>
      <img src={img} />
    </MainImg>
  );
}

export default App;
