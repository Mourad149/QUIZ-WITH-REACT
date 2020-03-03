import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Cselect = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const options=props.options.map(option=>{
        return   <DropdownItem onClick={()=>props.clicked(option)}>{option}</DropdownItem>

  })
  return (
    <Dropdown style={props.style} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {props.type}
        </DropdownToggle>
      <DropdownMenu>
      {options}
      </DropdownMenu>
    </Dropdown>
  );
}


export default Cselect;
