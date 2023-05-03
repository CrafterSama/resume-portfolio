import { CgSpinner } from 'react-icons/cg';

import Image from 'next/image';
import { toast } from 'sonner';
import { useGetImageProfile, useUpdateImageProfile } from 'src/services/use-profile';
import { Profiles } from 'src/types/modules';
import { Database } from 'src/types/supabase';

import { Icon, Input } from '@components/common/UI';
import { UploadIcon } from '@heroicons/react/outline';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

function Avatar({
  uid,
  url,
  size,
  onUpload,
  disabled = true,
}: {
  uid: string;
  url: Profiles['avatar_url'];
  size: number;
  onUpload: (url: string) => void;
  disabled?: boolean;
}) {
  const supabase = useSupabaseClient<Database>();
  const { data: avatarUrl } = useGetImageProfile({ path: url });
  const { mutate: updateAvatarImage, isLoading: isSaving } = useUpdateImageProfile();

  const onSavedSuccess = (data) => {
    toast.success('Image Upload successfully!');
    if (data?.path) {
      onUpload(data?.path);
    }
  };

  const onSavingError = (err) => {
    toast.error('Error uploading image!');
    toast.error(err.message);
  };

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      toast.error('You must select an image to upload.');
    }

    const file = event.target.files[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${new Date().getTime()}-${uid}.${fileExt}`;
    const filePath = `${fileName}`;

    const options = {
      client: supabase,
      filePath: url ?? filePath,
      file,
      update: url ? true : false,
    };

    updateAvatarImage(
      { ...options },
      {
        onSuccess: ({ data, error }): any => {
          if (error?.message) throw new Error(error?.message);
          if (data?.path) {
            onSavedSuccess(data);
          }
        },
        onError: (err) => {
          onSavingError(err);
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {avatarUrl ? (
        <div className="w-40 h-40 relative rounded-full">
          <Image
            src={avatarUrl}
            alt="Avatar"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
      ) : (
        <div className="w-40 h-40 avatar no-image bg-gray-50" />
      )}
      <div style={{ width: size }}>
        <label
          className="button primary flex justify-center items-center bg-gray-50 hover:bg-slate-200 cursor-pointer px-4 py-1 rounded-md"
          htmlFor="avatar_url"
        >
          {isSaving ? (
            <Icon icon={CgSpinner} className="animate-spin" />
          ) : (
            <span className="flex flex-row justify-center items-center">
              <Icon icon={UploadIcon} />
              <span>Upload</span>
            </span>
          )}
        </label>
        <Input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="avatar_url"
          name="avatar_url"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={isSaving || disabled}
        />
      </div>
    </div>
  );
}

export default Avatar;
