import FormHeader from '@components/common/Dashboard/Form/FormHeader';
import { Form, Input } from '@components/common/UI';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Profiles, SupabaseResponseProps } from 'src/types/modules';
import { Database } from 'src/types/supabase';
import { toast } from 'sonner';
import Avatar from '@components/modules/dashboard/Profile/components/Avatar';

const Profile = ({ session }) => {
  const user = useUser();
  const supabase = useSupabaseClient<Database>();
  const [profile, setProfile] = useState<Profiles>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const methods = useForm();

  const { setValue, watch } = methods;

  useEffect(() => {
    if (profile) {
      setValue('name', profile.name);
      setValue('last_name', profile.last_name);
      setValue('address', profile.address);
      setValue('phone', profile.phone);
      setValue('website', profile.website);
      setValue('username', profile.username);
      setValue('position', profile.position);
      setValue('about', profile.about);
      setValue('avatar_url', profile.avatar_url);
    }
  }, [profile]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      const { data, error, status }: SupabaseResponseProps = await supabase
        .from('profiles')
        .select('*')
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

  async function updateProfile({ params }: { params: Pick<Profiles, any> }) {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      const updates = {
        ...params,
        id: profile.id,
        user_id: user.id,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);
      if (error) {
        toast.error(String(error.message));
        throw error;
      }
      toast.success('Profile updated!');
      setEditMode(false);
    } catch (error) {
      toast.error('Error updating the data!');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfile();
  }, [session]);

  const onSubmit = (data) => {
    console.log(data);
    updateProfile({ params: data });
  };

  return (
    <div className="w-full p-4">
      <Form methods={methods} onSubmit={onSubmit}>
        <FormHeader
          title={''}
          isSaving={loading}
          disabled={!editMode}
          cancelAction={() => setEditMode(!editMode)}
          editAction={() => setEditMode(!editMode)}
        />
        <div className="flex flex-row gap-4 justify-between mx-auto pt-10">
          <Avatar
            disabled={!editMode}
            uid={user.id}
            url={profile?.avatar_url ? profile?.avatar_url : String(watch('avatar_url'))}
            size={150}
            onUpload={(url) => {
              setValue('avatar_url', url);
            }}
            session={session}
          />
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <div className="flex flex-col gap-6 w-full min-h-screen p-4">
            <Input label="Name" name="name" placeholder="John" disabled={!editMode} />
            <Input label="Address" name="address" placeholder="Sao Paulo" disabled={!editMode} />
            <Input label="Username" name="username" placeholder="JohnDoe" disabled={!editMode} />
            <Input label="Position" name="position" placeholder="DevOps" disabled={!editMode} />
          </div>
          <div className="flex flex-col gap-6 w-full min-h-screen p-4">
            <Input label="Last Name" name="last_name" placeholder="Doe" disabled={!editMode} />
            <Input label="Phone" name="phone" placeholder="+569..." disabled={!editMode} />
            <Input label="Website" name="website" placeholder="https://..." disabled={!editMode} />
            <Input label="About" name="about" placeholder="Lorem Ipsum" disabled={!editMode} />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Profile;
