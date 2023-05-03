import { ElementType, FC } from 'react';

import Link from 'next/link';

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
        {menuItems.map(({ text, url, icon: Icon }) => (
          <li key={text} className="px-4 py-2 bg-white hover:bg-blue-100 rounded-md shadow-inner">
            <Link href={url} className="flex flex-row gap-2 items-center justify-start">
              <span className="h-6 w-6 text-blue-400">
                <Icon />
              </span>
              <span className="pr-4 text-sm">{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
