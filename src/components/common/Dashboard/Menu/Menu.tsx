import Link from 'next/link';
import { Icon } from '@tremor/react';
import { ElementType, FC } from 'react';

type MenuItem = {
  icon: ElementType<any>;
  text: string;
  url: string;
};

type MenuProps = {
  menuItems: MenuItem[];
};

const Menu: FC<MenuProps> = ({ menuItems = [] }) => {
  return (
    <div className="flex flex-col gap-2 w-[280px] min-h-screen bg-gray-50 rounded-md shadow-inner">
      <ul className="flex flex-col gap-4 p-4">
        {menuItems.map((item) => (
          <li key={item.text} className="px-4 py-1 bg-white hover:bg-blue-100 rounded-md shadow-inner">
            <Link href={item.url} className="flex flex-row gap-2 items-center justify-start">
              <Icon icon={item.icon} />
              <span className="pr-4">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
