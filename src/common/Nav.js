import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="/">Home</Link>
              
            </li>
            

      

            <li className="has-droupdown"><Link to="/teams">Management Team</Link>
             
            </li>

            <li className="has-droupdown"><Link to="/Evolution">Project Solution</Link>
                <ul className="submenu">
                    <li><Link to="/automated-hr-services">HR Service</Link></li>
                    <li><Link to="/r-e-project-solution">Residential & Commercial Electrical Project Solution</Link></li>
                    <li><Link to="/educations">Educational Service</Link></li>
                    <li><Link to="/banking-services">Banking & Financial Partner Services</Link></li>
                    <li><Link to="/retail-warehouse">Retail & Warehouse Service</Link></li>
                    <li><Link to="/e-commerce">E-Commerce</Link></li>
                </ul>
            </li>

            <li><Link to="/careers">Careers</Link></li>
            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
