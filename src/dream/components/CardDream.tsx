import React from 'react';

type Props = React.PropsWithChildren<{ className?: string; style?: React.CSSProperties; }>

export const CardDream: React.FC<Props> = ({ children, className = '', style }) => {
  return (
    <div className={`card-dream ${className}`.trim()} style={style}>
      {children}
    </div>
  );
};

export default CardDream;
