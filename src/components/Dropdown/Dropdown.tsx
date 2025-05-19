import React, { ReactNode } from "react";
import DropdownButton from "./DropdownButton.tsx";
// import DropdownContent from "./DropdownContent.tsx";

interface DropdownProps {
  
  content: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({content}) => {
  return (
    <div>
        <DropdownButton>
            {/* <DropdownContent content ={content}>

                
            </DropdownContent> */}
        </DropdownButton>
     
     
    </div>
  );
};

export default Dropdown;