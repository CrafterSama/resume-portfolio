import { ReactElement, FC } from 'react';
import { IconType } from 'react-icons';

interface IconProps extends Pick<ReactElement<IconType>, never> {
  className?: string;
  icon: IconType;
  color?: string;
  size?: string | number;
}

const Icon: FC<IconProps> = ({ className = 'w-6 h-6', icon: Icon, color = 'blue', size = '24' }) => {
  return (
    <span className={`${className} text-${color}-400`}>
      <Icon size={size} />
    </span>
  );
};

export default Icon;
