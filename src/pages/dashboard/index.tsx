import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import HomeDashboard from '@components/modules/dashboard/Home/HomeDashboard';
import { Card } from '@tremor/react';

const Dashboard = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Card className="max-w-xs mx-auto" decoration="top" decorationColor="fuchsia">
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="light" />
        </Card>
      ) : (
        <HomeDashboard session={session} />
      )}
    </div>
  );
};

export default Dashboard;
