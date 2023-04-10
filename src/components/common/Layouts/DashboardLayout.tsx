import { Grid } from '@tremor/react';
import { Menu } from '../Dashboard/Menu';
import { HomeDashboardHeader } from '../Dashboard/HomeDashboardHeader';
import { UserIcon } from '@heroicons/react/outline';

const menuItems = [{ text: 'Profile', url: '/dashboard', icon: UserIcon }];

const DashboardLayout = ({ session, children }) => {
  return (
    <main className="flex flex-col gap-4">
      <HomeDashboardHeader session={session} />
      <div className="flex flex-row justify-between items-start gap-4">
        <Menu menuItems={menuItems} />
        <div className="flex flex-col gap-2 w-full min-h-screen">
          <Grid className="gap-6">
            <div className="rounded-md border border-gray-200">{children}</div>
          </Grid>
        </div>
      </div>
    </main>
  );
};
export default DashboardLayout;
