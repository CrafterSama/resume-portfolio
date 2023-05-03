import { useSession } from '@supabase/auth-helpers-react';
import HomeDashboard from '@components/modules/dashboard/Home/HomeDashboard';
import DashboardLayout from '@components/common/Layouts/DashboardLayout';

const Dashboard = () => {
  const session = useSession();

  return (
    <DashboardLayout>
      <HomeDashboard session={session} />
    </DashboardLayout>
  );
};

export default Dashboard;
