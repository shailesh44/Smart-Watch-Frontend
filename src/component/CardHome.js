import Card from 'react-bootstrap/Card';


function CardHome(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.text}
        </Card.Text>
      </Card.Body>
     
    </Card>
  );
}

export default CardHome;