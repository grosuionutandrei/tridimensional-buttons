
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Box } from './icons/box';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { Container } from './icons/container';
import { Link } from './icons/ancors';
import ulStyle from './presentation/container.module.css';
import iconStyle from './presentation/icons.module.css'
import { Popup } from './popup/popup';
import { Pophome } from './popup/popuphome';

/* To do list => */
/* {To Add state management for the hover event= in progress } */
function App() {
const order=['first','second' ,'third' ,'fourth'];




  return (
    <div className="App">
      <Pophome> 
        <Popup message={'Click me!'}></Popup>
        <Popup message={'Click me!'}></Popup>
        <Popup message={'Click me!'}></Popup>
        <Popup message={'Click me!'}></Popup>
      </Pophome>
     
     <Container className={`${ulStyle.container}`} > 
      <Box styleName={order[0]}>
        <Link href={'https://www.yahoo.com'} target={'blank'}>
         <FontAwesomeIcon icon={faEnvelope}  className={iconStyle.icon}/>
        </Link>
      </Box>
      <Box styleName={order[1]}>
       <Link href={'https://www.facebook.com/'} target={'blank'}>
         <FontAwesomeIcon icon={faUser} className={iconStyle.icon}>
         </FontAwesomeIcon>
       </Link>
      </Box>
     <Box styleName={order[2]}>
      <Link href={'https://www.google.com/'} target={'blank'}>
        <FontAwesomeIcon icon={faHouse} className={iconStyle.icon}>
        </FontAwesomeIcon>
      </Link>
     </Box>
     <Box styleName={order[3]}>
      <Link href={'https://www.oracle.com/'} target={'blank'}>
        <FontAwesomeIcon icon={faCloud} className={iconStyle.icon}>
        </FontAwesomeIcon>
      </Link>
     </Box>
     </Container>
    </div>
  );
}

export default App;
