import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

function Drop() {
    const [dropdown, setDropdown]=useState(false);

    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);
    }

    return (
    
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg"> 
            <DropdownToggle caret className='DropdownButton'>
                Selecciona...
            </DropdownToggle>
  
            <DropdownMenu>
                <DropdownItem>Administrador</DropdownItem>
                <DropdownItem>Profesional</DropdownItem>
                <DropdownItem>Empresa</DropdownItem>
        
            </DropdownMenu>
  
        </Dropdown>
      
    )
  }
  
  export default Drop