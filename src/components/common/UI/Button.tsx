import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, forwardRef, PropsWithChildren } from 'react';
import { IconType } from 'react-icons';
import { CgSpinner } from 'react-icons/cg';

import cn from 'classnames';
import Show from './Show';

type Color =
  | 'primary'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

type FontWeight = 'normal' | 'bold' | 'semibold' | 'light';

interface CommonProps {
  // Fixme: Don't depend on react-icons as 'official' icons are @heroicons
  icon?: IconType;
  iconColor?: Color;
  endIcon?: IconType;
  endIconFinal?: IconType;
  endIconFinalAction?: any;
  color?: Color;
  fill?: 'solid' | 'outline' | 'none';
  size?: 'base' | 'small' | 'large';
  fontWeight?: FontWeight;
  textSize?: TextSize;
  align?: 'start' | 'center' | 'end' | 'between';
}

export interface ButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>, CommonProps {
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  isLoading?: boolean;
  isFull?: boolean;
  isRounded?: boolean;
  loadingMessage?: string;
  children?: React.ReactNode | any;
}

export interface LinkButtonProps
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick' | 'target'>,
    CommonProps {}

const getBaseStyles = (weight: string, textSize: string) => {
  return cn([`text-${textSize} rounded font-${weight} outline-none`]);
};

export const Button: FC<ButtonProps> = ({
  type = 'button',
  isDisabled = false,
  isLoading = false,
  isFull = false,
  isRounded = false,
  color = 'blue',
  loadingMessage = 'loading',
  size = 'base',
  fill = 'solid',
  iconColor = 'blue',
  icon: Icon,
  endIcon: EndIcon,
  endIconFinal: EndIconFinal,
  endIconFinalAction,
  onClick,
  fontWeight = 'medium',
  textSize = 'sm',
  align = 'start',
  children,
}) => {
  const baseStyles = getBaseStyles(fontWeight, textSize);

  const sizeStyles = cn([
    size === 'base' && 'py-1 px-2',
    size === 'small' && 'py-0 px-1',
    size === 'large' && 'py-2 px-3',
    isFull && 'w-full',
  ]);

  const iconSize = size === 'base' || size === 'large' ? 'w-6 h-6' : 'w-4 h-4';

  const isSolid = fill === 'solid';
  const isOutline = fill === 'outline';
  const isPlain = fill === 'none';

  const colorStyles = cn([
    !isPlain && 'border shadow-sm focus:ring-2 focus:ring-offset-2',
    isSolid &&
      cn([
        `bg-${color}-400 hover:bg-${color}-500 border-${color}-400 hover:border-${color}-500 text-white`,
        isRounded && 'rounded-full',
      ]),
    isOutline &&
      cn([`bg-transparent hover:bg-${color}-50`, `text-${color}-400 border-${color}-500`, isRounded && 'rounded-full']),
    isPlain &&
      cn([
        `bg-transparent border border-transparent bg-${color}-50 border-${color}-50`,
        `text-${color}-500`,
        isRounded && 'rounded-full',
      ]),
  ]);

  const disabledStyles = cn([isDisabled && 'pointer-events-none bg-gray-50 text-gray-400']);

  const loadingStyles = cn([isLoading && 'opacity-60 pointer-events-none relative']);

  const className = cn([baseStyles, sizeStyles, colorStyles, disabledStyles, loadingStyles]);

  const classAlign = `justify-${align}`;

  return (
    <button className={className} type={type} onClick={onClick} disabled={isDisabled || isLoading}>
      <span
        className={cn({
          'flex items-center space-x-2': !!Icon || !!EndIcon || !!EndIconFinal,
          [classAlign]: !!Icon || !!EndIcon || !!EndIconFinal,
          'opacity-0': isLoading,
        })}
      >
        {Icon ? <Icon className={`${iconSize} text-${iconColor}`} /> : null}

        <span>{children}</span>

        {EndIcon ? <EndIcon className={`w-6 h-6 text-${iconColor}`} /> : null}
        {EndIconFinal ? (
          <div onClick={endIconFinalAction} className="z-50 cursor-pointer ">
            <EndIconFinal onClick={endIconFinalAction} className="w-6 h-6" />
          </div>
        ) : null}
      </span>

      <Show condition={isLoading}>
        <span className="absolute inset-0 flex items-center justify-center space-x-2">
          <CgSpinner className="w-6 h-6 animate-spin" />
          <span>{loadingMessage}</span>
        </span>
      </Show>
    </button>
  );
};

export const LinkButton = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkButtonProps>>(
  (
    { iconColor, icon: Icon, endIcon: EndIcon, color = 'primary', children, size = 'base', fill = 'solid', ...props },
    ref
  ) => {
    const iconStyles = cn([
      !Icon && !EndIcon && 'inline-block',
      (!!Icon || !!EndIcon) && 'inline-flex items-center space-x-2',
    ]);

    const baseStyles = getBaseStyles('normal', 'sm');

    const isSolid = fill === 'solid';
    const isOutline = fill === 'outline';
    const isPlain = fill === 'none';

    const colorStyles = cn([
      !isPlain && 'border shadow-sm focus:ring-2 focus:ring-offset-2',
      isSolid && cn([`bg-${color}-600 border-${color}-600 text-white hover:bg-${color}-700 focus:ring-${color}-600`]),
      isOutline &&
        cn([
          `border-${color}-600 text-${color}-600 hover:border-${color}-700 hover:text-${color}-700 focus:ring-${color}-600`,
        ]),
      isPlain && cn(['bg-transparent', `text-${color}-600 hover:bg-gray-50 hover:text-${color}-700 focus:bg-gray-50`]),
    ]);

    const sizeStyles = cn([size === 'base' && 'py-3 px-4', size === 'small' && 'py-2 px-3']);

    const className = cn([baseStyles, colorStyles, iconStyles, sizeStyles]);

    return (
      <a className={className} ref={ref} {...props}>
        {Icon ? <Icon className={`w-6 h-6 text-${iconColor}-400`} /> : ''}
        <span>{children}</span>
        {EndIcon ? <EndIcon className={`w-6 h-6 text-${iconColor}-400`} /> : ''}
      </a>
    );
  }
);
