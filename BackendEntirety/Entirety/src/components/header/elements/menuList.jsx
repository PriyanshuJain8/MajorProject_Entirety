import Link from "next/link";
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";
const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">
          Home 
        </Link>
        
      </li>
      <li className="menu-icon">
        <Link href="/about">
          About 
        </Link>
        
      </li>
      <li className="menu-icon">
      <Link href="/shop">Property</Link>
      </li>
      
        
        
         <li>
                <Link href="/history">History</Link>
         </li>
         
            <li>
         </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>

     
    </ul>
  );
};

export default MenuList;
