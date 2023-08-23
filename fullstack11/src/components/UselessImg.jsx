import Figure from 'react-bootstrap/Figure';
import './Uselessimg.css';

function Uselessimg() {
  return (
    <div className="figure-container">
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="IMG.jpg"
        />
        <Figure.Caption className='caption'>
         Look! Thats Me!! 
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default Uselessimg;
