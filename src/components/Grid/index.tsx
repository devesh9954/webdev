import React, { useMemo } from 'react';
import './grid.css';
import Column from '../Column/Column';
import { Ticket, User } from '../../interfaces';

interface GridProps {
  gridData: Record<string, Ticket[]>;
  grouping: string;
  userIdToData: Record<string, User>;
}

const Grid: React.FC<GridProps> = ({ gridData, grouping, userIdToData }) => {
  // Memoized keys to avoid unnecessary computations on re-renders
  const keys = useMemo(() => Object.keys(gridData), [gridData]);

  return (
    <div className="grid">
      {keys.map((key) => (
        <Column
          key={key}
          tickets={gridData[key]}
          grouping={grouping}
          groupBy={key}
          userIdToData={userIdToData}
        />
      ))}
    </div>
  );
};

export default Grid;
