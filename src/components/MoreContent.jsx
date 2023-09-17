import Accordion from 'react-bootstrap/Accordion';
import './MoreContent.css'

function MoreContent() {
  return (
    <Accordion className='container'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Small Description of myself</Accordion.Header>
        <Accordion.Body>
             Love Gaming, Sports, Movies and Exploring New Things <br/>
             Travelling is the biggest adventure for me <br/>
             Music is my best therapy
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MoreContent;