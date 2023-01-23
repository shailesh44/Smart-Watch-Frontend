
import Form from 'react-bootstrap/Form';
function Dropdownq(props) {
  return (
    <Form.Select onChange={props.onChange} aria-label="Default select example">
      <option>Language</option>
      <option value={'en'}>English</option>
      <option value={'hi'}>Hindi</option>
      <option value={'kw'}>Kiswahili</option>
    </Form.Select>
  );
}

export default Dropdownq;