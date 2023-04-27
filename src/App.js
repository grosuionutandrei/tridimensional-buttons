
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
/* To do list => */
/* {To Add state management for the hover event= in progress } */
function App() {
const order=['first','second' ,'third' ,'fourth'];




  return (
    <div className="App">
     <Container className={`${ulStyle.container}`} > 
      <Box styleName={order[0]}>
        <Link href={'https://www.yahoo.com'} target={'blank'}>
         <FontAwesomeIcon icon={faEnvelope}  className={iconStyle.icon}/>
        </Link>
      </Box>
      <Box styleName={order[1]}>
       <Link>
         <FontAwesomeIcon icon={faUser} className={iconStyle.icon}>
         </FontAwesomeIcon>
       </Link>
      </Box>
     <Box styleName={order[2]}>
      <Link>
        <FontAwesomeIcon icon={faHouse} className={iconStyle.icon}>
        </FontAwesomeIcon>
      </Link>
     </Box>
     <Box styleName={order[3]}>
      <Link>
        <FontAwesomeIcon icon={faCloud} className={iconStyle.icon}>
        </FontAwesomeIcon>
      </Link>
     </Box>
     </Container>
    </div>
  );
}

export default App;
