
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
export default function AlertsItem() {
  return (
    <>
    <div className='notification'>
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        
        <div className="ms-2 me-auto">
          <div className="fw-bold">heading 1</div>
         Description
        </div>
        <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="ON"
      />
     
    </Form>
      </ListGroup.Item>
     
    </ListGroup>
    </div>
    </>
  );
}

