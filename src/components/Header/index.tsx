import React from 'react';
import './header.css';
import DisplayDropdown from '../Dropdowns/DisplayDropdown';

interface HeaderProps {
  grouping: string;
  setGrouping: (grouping: string) => void;
  ordering: string;
  setOrdering: (ordering: string) => void;
}

const Header: React.FC<HeaderProps> = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <header className="header">
      {/* Dropdown for display settings */}
      <DisplayDropdown 
        grouping={grouping} 
        setGrouping={setGrouping} 
        ordering={ordering} 
        setOrdering={setOrdering} 
      />
    </header>
  );
};

export default Header;
