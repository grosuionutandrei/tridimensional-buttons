
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
import { useState } from 'react';
import { useEffect } from 'react';
import popStyle from'./popup/popup.module.css';

function App() {
const order=['first','second' ,'third' ,'fourth'];
const [getClicked,setClicked]=useState('');
const [getVisibile,setVisibile]=useState('');
const initialOrder=[0,0,0,0];

let orderOfAppearence=[...initialOrder];

const isClicked =(e)=>{
setClicked(true);
}

/* timer that controls the popup icon appearence after 15 seconds */
useEffect(()=>{
  const timer={timer:''}
  if(!getClicked){
    let max=orderOfAppearence.length-1;
    timer.timer=setInterval( ()=>{
      let random=Math.floor(Math.random()*max);
      orderOfAppearence[random]=true;
      setVisibility();
    },15000)
  }
  if(getClicked){
    setVisibile(-1);
  }
setClicked(false);
return (()=>{
  clearInterval(timer.timer);
})
},[getClicked])

/* decide random what popup icon whill be visibile */
const setVisibility=()=>{
  setVisibile(orderOfAppearence.findIndex((elem)=> elem===true));
  orderOfAppearence=[...initialOrder];
}

  return (
    <div className="App">
      <Pophome> 
        <Popup message={'Click me!'} className={`${popStyle.popbody} ${(getVisibile===0)?popStyle.visibile:popStyle.hidden}`}></Popup>
        <Popup message={'Click me!'} className={`${popStyle.popbody} ${(getVisibile===1)?popStyle.visibile:popStyle.hidden}`}></Popup>
        <Popup message={'Click me!'} className={`${popStyle.popbody} ${(getVisibile===2)?popStyle.visibile:popStyle.hidden}`}></Popup>
        <Popup message={'Click me!'} className={`${popStyle.popbody} ${(getVisibile===3)?popStyle.visibile:popStyle.hidden}`}></Popup>
      </Pophome>
     
     <Container className={`${ulStyle.container}`} > 
      <Box styleName={order[0]} >
        <Link href={'https://www.yahoo.com'} target={'blank'} >
         <FontAwesomeIcon icon={faEnvelope}  className={iconStyle.icon} onClick={isClicked}/>
        </Link>
      </Box>
      <Box styleName={order[1]}>
       <Link href={'https://www.facebook.com/'} id='second' target={'blank'}>
         <FontAwesomeIcon icon={faUser} className={iconStyle.icon} onClick={isClicked}>
         </FontAwesomeIcon>
       </Link>
      </Box>
     <Box styleName={order[2]}>
      <Link href={'https://www.google.com/'} target={'blank'}>
        <FontAwesomeIcon icon={faHouse} className={iconStyle.icon} onClick={isClicked}>
        </FontAwesomeIcon>
      </Link>
     </Box>
     <Box styleName={order[3]}>
      <Link href={'https://www.oracle.com/'} target={'blank'}>
        <FontAwesomeIcon icon={faCloud} className={iconStyle.icon} onClick={isClicked}>
        </FontAwesomeIcon>
      </Link>
     </Box>
     </Container>
    </div>
  );
}

export default App;
