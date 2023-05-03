import { useRouter } from 'next/router';

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  if (session) {
    router.push('/dashboard');
  }

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <div className="max-w-xs mx-auto border border-t-4 border-t-fuchsia-500">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="light" />
      </div>
    </div>
  );
};

export default Login;
