import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <h1>
            Header
        </h1>
         <ul>
        <li>
            <Link to='/' > home </Link>
        </li>
        <li>
           <Link to='/show'> Main </Link>   
        </li>
       </ul> 
      </div>
    )
};

export default Header;