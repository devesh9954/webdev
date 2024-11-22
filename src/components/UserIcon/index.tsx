import React, { useMemo } from 'react';
import './usericon.css';

interface UserIconProps {
  name: string;
  available: boolean;
}

const UserIcon: React.FC<UserIconProps> = ({ name, available }) => {
  // Memoized logic to extract initials from the name
  const text = useMemo(() => {
    return name.split(" ").map((item) => item[0]).join("");
  }, [name]);

  return (
    <div className="usericon-container">
      <div className="usericon-text">{text}</div>
      {/* Conditionally apply the 'available' class */}
      <div className={`user-status ${available ? "available" : ""}`}></div>
    </div>
  );
};

export default UserIcon;
