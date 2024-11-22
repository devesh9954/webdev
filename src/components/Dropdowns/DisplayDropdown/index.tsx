import React, { useCallback, useEffect, useRef, useState, ChangeEvent } from 'react';
import './displayDropdown.css';
import { LuSettings2 } from "react-icons/lu";
import { BiChevronDown } from "react-icons/bi";

type DisplayDropdownProps = {
  grouping: string;
  setGrouping: (grouping: string) => void;
  ordering: string;
  setOrdering: (ordering: string) => void;
};

const DisplayDropdown: React.FC<DisplayDropdownProps> = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const openDropdown = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setVisible(false);
    }
  }, []);

  const handleGroupingChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setGrouping(e.target.value);
  }, [setGrouping]);

  const handleOrderingChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setOrdering(e.target.value);
  }, [setOrdering]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="display-dropdown" ref={dropdownRef}>
      <div className="dropdown-label-container" onClick={openDropdown}>
        <LuSettings2 color="#6b6f76" />
        <div className="dropdown-label">Display</div>
        <BiChevronDown color="#6b6f76" />
      </div>
      {visible && (
        <div className="dropdown-content-container">
          <div className="dropdown-content-row">
            <div className="dropdown-content-label">Grouping</div>
            <select
              name="grouping"
              id="grouping"
              value={grouping}
              onChange={handleGroupingChange}
              aria-label="Select grouping criteria"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-content-row">
            <div className="dropdown-content-label">Ordering</div>
            <select
              name="ordering"
              id="ordering"
              value={ordering}
              onChange={handleOrderingChange}
              aria-label="Select ordering criteria"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayDropdown;
