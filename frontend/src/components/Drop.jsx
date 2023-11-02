import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

function Drop() {
  const [dropdown, setDropdown] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("Selecciona...");

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  }

  const seleccionarOpcion = (opcion) => {
    setOpcionSeleccionada(opcion);
    setDropdown(false); // Cerrar el dropdown después de seleccionar
    return (
    
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg"> 
            <DropdownToggle caret className='DropdownButton'>
                Selecciona...
            </DropdownToggle>
  
            <DropdownMenu>
                <DropdownItem>Profesional</DropdownItem>
                <DropdownItem>Empresa</DropdownItem>
        
            </DropdownMenu>
  
        </Dropdown>
      
    )
  }

  return (
    <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
      <DropdownToggle caret className='DropdownButton'>
        {opcionSeleccionada}
      </DropdownToggle>

      <DropdownMenu>
        <DropdownItem onClick={() => seleccionarOpcion("Profesional")}>Profesional</DropdownItem>
        <DropdownItem onClick={() => seleccionarOpcion("Empresa")}>Empresa</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Drop;