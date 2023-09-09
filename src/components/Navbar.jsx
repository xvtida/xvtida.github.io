import {useState, useRef} from 'react'

import { FiMenu } from "react-icons/fi";
import { MobileMenu,useStickyHeader,Nav } from '../common';

const Navbar = ( {btnStyle, HeaderSTyle}) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
      setOffcanvasShow(prev => !prev);
  }
  const ref = useRef();
  let [check] = useState(true);
  const sticky = useStickyHeader( 50 );
  const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
//   const { clientHeight } = ref;
  
//   const checkChange = (value) => {
//     setCheck(value);
//   };
  return (
    <>
    <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
        <div className="container position-relative">
            <div className="row align-items-center row--0">
                <div className="col-lg-3  col-md-6 col-4">
                   <img className='w-25' src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='logo'/>
                </div>
                <div className="col-lg-9 col-md-6 col-8 position-static">
                    <div className="header-right">
                        <nav className="mainmenu-nav d-none d-lg-block">
                            <Nav />
                        </nav>
                        
                        <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                            <div className="hamberger">
                                <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            </div>
        </div>
    </header>
    <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
</>
  )
}

export default Navbar