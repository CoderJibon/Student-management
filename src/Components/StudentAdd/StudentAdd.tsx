import { useReducer, useRef } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

interface studentTodo {
  id: number;
  name: string;
  email: String;
  roll: number;
  mark: number;
}

const StudentReducer = (state: studentTodo[], action: any) => {
  switch (action.type) {
    case "ADDSTUDENT":
      console.log(state);
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
          email: action.email,
          roll: action.roll,
          mark: action.mark,
        },
      ];
      break;

    case "REMOVESTUDENT":
      return state.filter(({ id }) => id === action.id);
      break;

    default:
      return state;
      break;
  }
};

const StudentAdd = () => {
  const [state, dispatch] = useReducer(StudentReducer, []);

  const nameref = useRef<HTMLInputElement>(null);
  const emailref = useRef<HTMLInputElement>(null);
  const rollref = useRef<HTMLInputElement>(null);
  const markref = useRef<HTMLInputElement>(null);

  const getStudentData = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (
      nameref.current &&
      emailref.current &&
      rollref.current &&
      markref.current
    ) {
      dispatch({
        type: "ADDSTUDENT",
        name: nameref.current.value,
        email: emailref.current.value,
        roll: rollref.current.value,
        mark: markref.current.value,
      });

      nameref.current.value = "";
    }
  };
  const removeFunction = (e: number): void => {
    dispatch({
      type: "REMOVESTUDENT",
      it: e,
    });
  };

  return (
    <div>
      <Form onSubmit={getStudentData}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student Name :</Form.Label>
              <Form.Control
                ref={nameref}
                type="text"
                required
                placeholder="Student Name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student Email</Form.Label>
              <Form.Control
                ref={emailref}
                required
                type="email"
                placeholder="Student Email"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Student Roll</Form.Label>
          <Form.Control
            ref={rollref}
            required
            type="number"
            placeholder="Student Roll"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Student Mark</Form.Label>
          <Form.Control
            ref={markref}
            required
            type="number"
            placeholder="Student Mark"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <hr />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Mark</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {state.map((pp) => (
              <tr key={pp.id}>
                <td>{pp.id}</td>
                <td>{pp.name}</td>
                <td>{pp.email}</td>
                <td>{pp.roll}</td>
                <td>{pp.mark}</td>
                <td>
                  <button onClick={() => removeFunction(pp.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentAdd;
