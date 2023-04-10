import { LogoutIcon } from '@heroicons/react/outline';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Button, Title, Text } from '@tremor/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Profiles, SupabaseResponseProps } from 'src/types/modules';
import { Database } from 'src/types/supabase';

const HomeDashboardHeader = ({ session }) => {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [profile, setProfile] = useState<Profiles>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      const { data, error, status }: SupabaseResponseProps = await supabase
        .from('profiles')
        .select('name, last_name, position')
        .eq('user_id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setProfile(data);
      }
    } catch (error) {
      toast.error('Error loading the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfile();
  }, [session]);

  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <Title>
          <Link href="/">
            {profile?.name} {profile?.last_name}
          </Link>
        </Title>
        <Text>{profile?.position}</Text>
      </div>
      <div className="flex flex-row gap-4 justify-start items-center">
        <Text color="gray">{user?.email}</Text>
        <Button onClick={() => supabase.auth.signOut()} icon={LogoutIcon} iconPosition="left" color="gray" size="xs">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default HomeDashboardHeader;
