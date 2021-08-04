import "./App.css";
import img from "./Image/임시이미지.png";
import styled from "styled-components";

const MainImg = styled.div`
  img {
    text-align: center;
  }
`;

function App() {
  return (
    <div>
      <MainImg>
        <img src={img} />
      </MainImg>
    </div>
  );
}

export default App;
