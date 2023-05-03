import { Session } from '@supabase/auth-helpers-react';
import { Profile } from '../Profile';

export default function HomeDashboard({ session }: { session: Session }) {
  return <Profile session={session} />;
}
