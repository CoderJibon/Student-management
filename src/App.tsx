import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import StudentAdd from "./Components/StudentAdd/StudentAdd";

function App() {
  return (
    <>
      <Header></Header>
      <br />
      <Container>
        <StudentAdd></StudentAdd>
      </Container>
    </>
  );
}

export default App;
