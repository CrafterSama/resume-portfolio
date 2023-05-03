import { useEffect } from 'react';

import { useRouter } from 'next/router';

import {
  AcademicCapIcon,
  BeakerIcon,
  BriefcaseIcon,
  CollectionIcon,
  ColorSwatchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import { useSession } from '@supabase/auth-helpers-react';

import { HomeDashboardHeader } from '../Dashboard/HomeDashboardHeader';
import { Menu } from '../Dashboard/Menu';

const menuItems = [
  { text: 'Profile', url: '/dashboard', icon: UserIcon },
  { text: 'Experiences', url: '/dashboard/experiences', icon: BriefcaseIcon },
  { text: 'Education', url: '/dashboard/education', icon: AcademicCapIcon },
  { text: 'Skills', url: '/dashboard/skills', icon: CollectionIcon },
  { text: 'Soft Skills', url: '/dashboard/soft-skills', icon: ColorSwatchIcon },
  { text: 'Personal Projects', url: '/dashboard/personal-projects', icon: BeakerIcon },
];

const DashboardLayout = ({ children }) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session]);

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <main className="flex flex-col gap-4">
        <HomeDashboardHeader session={session} />
        <div className="flex flex-row justify-between items-start gap-4">
          <Menu menuItems={menuItems} />
          <div className="flex flex-col gap-2 w-full min-h-screen">
            <div className="gap-6">
              <div className="rounded-md border border-gray-200">{children}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
