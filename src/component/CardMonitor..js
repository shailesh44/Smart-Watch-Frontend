import Card from 'react-bootstrap/Card';

function BorderExample(props) {
  return (
    <>
      <Card border="primary" style={{ width: '18rem' ,margin:'10px'}}>
        <Card.Header style={{textAlign:'center'}}>{props.header}</Card.Header>
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />


    </>
  );
}

export default BorderExample;