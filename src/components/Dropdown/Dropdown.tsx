import React, { ReactNode } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";

interface DropdownProps {
  
  content: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({content}) => {
  return (
    <div>
        <DropdownButton>
            <DropdownContent content ={content}>

                
            </DropdownContent>
        </DropdownButton>
     
     
    </div>
  );
};

export default Dropdown;