import { FC } from 'react';

import Show from './Show';

type CardProps = {
  title?: string;
  children?: React.ReactElement | any;
};

const Card: FC<CardProps> = ({ title = '', children }) => {
  return (
    <div className="card">
      <div className="card-body">
        <Show condition={Boolean(title)}>
          <h2 className="card-title">{title}</h2>
        </Show>
        {children}
      </div>
    </div>
  );
};

export default Card;
