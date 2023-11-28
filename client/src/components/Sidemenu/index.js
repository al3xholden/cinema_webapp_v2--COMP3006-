import React from 'react';
import { 
  SidemenuContainer, 
  Icon, 
  CloseMenuIcon, 
  SidemenuWrapper, 
  SidemenuLink, 
  SidemenuBtnLink, 
  SidemenuItems 
} from './SidemenuElement';

// Define a functional component named 'Sidemenu' that takes 'isOpen' and 'toggle' as props
const Sidemenu = ( { isOpen, toggle } ) => {
  // Return the JSX to be rendered by the component
  return (
    // Render 'SidemenuContainer' component with 'isOpen' and 'toggle' props
    <SidemenuContainer isOpen={isOpen} onClick={toggle}>
        {/* Render 'Icon' component with 'toggle' as onClick handler */}
        <Icon onClick={toggle}>
            {/* Render 'CloseMenuIcon' component */}
            <CloseMenuIcon />
        </Icon>

        {/* Render 'SidemenuWrapper' component */}
        <SidemenuWrapper>
          
          {/* Render 'SidemenuItems' component */}
          <SidemenuItems>

            {/* Render 'SidemenuLink' component with 'to' prop set to "section1" */}
            <SidemenuLink to="section1" onClick={toggle} >WHAT'S ON</SidemenuLink>

            {/* Render 'SidemenuLink' component with 'to' prop set to "section2" */}
            <SidemenuLink to="section2" onClick={toggle} >COMING SOON</SidemenuLink>

            {/* Render 'SidemenuLink' component with 'to' prop set to "section3" */}
            <SidemenuLink to="section3" onClick={toggle} >LOCATIONS</SidemenuLink>
            
          </SidemenuItems>

        </SidemenuWrapper>
      
    </SidemenuContainer>
  )
}


export default Sidemenu;
