import React, { ReactNode } from "react";

interface DropdownProps {
  
  content: ReactNode;
}

const DropdownContent: React.FC<DropdownProps> = ({content}) => {
  return (
    <div>
        {content}
     
     
    </div>
  );
};

export default DropdownContent;