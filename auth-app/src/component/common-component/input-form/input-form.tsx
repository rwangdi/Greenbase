import { Form } from "react-bootstrap";

type InputFormProps = {
  name: string;
  type: string;
  id: string;
};
function InputForm(props: InputFormProps) {
  return (
    <>
      <Form.Label htmlFor="inputPassword5">{props.name}</Form.Label>
      <Form.Control
        type={`${props.type}`}
        id={`${props.id}`}
        placeholder={props.name}
      />
    </>
  );
}

export default InputForm;
