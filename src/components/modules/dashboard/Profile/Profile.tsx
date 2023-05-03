import FormHeader from '@components/common/Dashboard/Form/FormHeader';
import { Form, Input } from '@components/common/UI';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Database } from 'src/types/supabase';
import { toast } from 'sonner';
import Avatar from '@components/modules/dashboard/Profile/components/Avatar';
import { useGetProfile, useUpdateProfile } from 'src/services/use-profile';

const Profile = ({ session }) => {
  const user = useUser();
  const supabase = useSupabaseClient<Database>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const { data: profile, isLoading, isError } = useGetProfile();
  const { mutate: profileUpdate, isLoading: isSaving, isError: isSavingError } = useUpdateProfile();
  const methods = useForm();

  const { setValue, watch } = methods;

  useEffect(() => {
    if (profile) {
      setValue('name', profile?.name);
      setValue('last_name', profile?.last_name);
      setValue('address', profile?.address);
      setValue('phone', profile?.phone);
      setValue('website', profile?.website);
      setValue('username', profile?.username);
      setValue('position', profile?.position);
      setValue('about', profile?.about);
      setValue('avatar_url', profile?.avatar_url);
    }
  }, [profile]);

  const onSavedSuccess = () => {
    toast.success('Profile updated!');
    setEditMode(false);
  };

  const onSavingError = (err) => {
    toast.error(err);
    toast.error('Error saving the data!');
  };

  const onSubmit = (data) => {
    const updates = {
      ...data,
      id: profile?.id,
      user_id: user?.id,
      updated_at: new Date().toISOString(),
    };

    profileUpdate(
      { client: supabase, params: updates },
      {
        onSuccess: () => {
          onSavedSuccess();
        },
        onError: (err) => {
          onSavingError(err);
        },
      }
    );
  };

  if (isLoading) {
    return <div className="w-full p-4">Loading...</div>;
  }

  return (
    <div className="w-full">
      <Form methods={methods} onSubmit={onSubmit}>
        <FormHeader
          title={''}
          isSaving={isLoading || isSaving}
          disabled={!editMode}
          cancelAction={() => setEditMode(!editMode)}
          editAction={() => setEditMode(!editMode)}
        />
        <div className="flex flex-row gap-4 justify-between mx-auto pt-10">
          <Avatar
            disabled={!editMode}
            uid={user?.id}
            url={profile?.avatar_url ? profile?.avatar_url : watch('avatar_url')}
            size={150}
            onUpload={(url) => {
              setValue('avatar_url', url);
            }}
            session={session}
          />
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <div className="flex flex-col gap-6 w-full p-4">
            <Input label="Name" name="name" placeholder="John" disabled={!editMode} />
            <Input label="Address" name="address" placeholder="Sao Paulo" disabled={!editMode} />
            <Input label="Username" name="username" placeholder="JohnDoe" disabled={!editMode} />
            <Input label="Position" name="position" placeholder="DevOps" disabled={!editMode} />
          </div>
          <div className="flex flex-col gap-6 w-full p-4">
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
