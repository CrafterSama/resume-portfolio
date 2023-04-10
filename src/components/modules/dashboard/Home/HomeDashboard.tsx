import { Session } from '@supabase/auth-helpers-react';
import DashboardLayout from '@components/common/Layouts/DashboardLayout';
import { Profile } from '../Profile';

export default function HomeDashboard({ session }: { session: Session }) {
  return (
    <DashboardLayout session={session}>
      <Profile session={session} />
    </DashboardLayout>
  );
}
