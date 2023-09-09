import React, {useEffect,useState} from 'react'

import './assets/scss/style.scss';
import Main from './Main'
import Loader from './components/Loader'
const App = () => {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    },2000);
  }, []);
  if (!spinner){

  
 return(
  <>
  
  <Main className="page-wrapper" />
  </>
 )
}
else {
  return <Loader />;
}
 
}

export default App