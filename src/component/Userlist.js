import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const Userlist = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = React.useState("");
console.log(data)
  return (
    <>
    <div >

        <h1 className="d-flex justify-content-center">Users List</h1>
        <MyVerticallyCenteredModal 
        heading="Devices"
        devices={data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <ul >
          {
            props.data.map (content =>(
              <ListGroup as="ol" >
                
      <ListGroup.Item onClick={() => setModalShow(true)} onMouseEnter={()=>setData(content.d)}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{content.first_name}{content.last_name}</div>
          {content.email}
          
        </div>
        <Badge bg="primary" pill>
        {content.devices}
        </Badge>
      </ListGroup.Item>
      
    </ListGroup>
    

            ))
          }
        </ul>
    </div>

</>

  );
}

export default Userlist;