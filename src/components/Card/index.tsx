import React from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { LuMoreHorizontal } from 'react-icons/lu';
import { Ticket, User } from '../../interfaces';
import { getStatusIcon } from '../../utils/helper';

interface CardProps {
  ticket: Ticket;
  userData: User;
  hideStatusIcon?: boolean;
  hideProfileIcon?: boolean;
}

const Card: React.FC<CardProps> = ({ ticket, userData, hideStatusIcon = false, hideProfileIcon = false }) => {
  return (
    <div className="card">
      <header className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {!hideProfileIcon && <UserIcon name={userData.name} available={userData.available} />}
      </header>
      <main className="card-body">
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <h2 className="ticket-title">{ticket.title}</h2>
      </main>
      <footer className="card-footer">
        <button className="more-options">
          <LuMoreHorizontal color="#797d84" />
        </button>
        <div className="tags">
          {ticket.tag.map((tag) => (
            <span key={tag} className="tag">
              <span className="tag-icon" />
              <span className="tag-label">{tag}</span>
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Card;
