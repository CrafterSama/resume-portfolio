import React, { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

import Image from 'next/image';

import { Database } from 'src/types/supabase';
import { Profiles } from 'src/types/modules';
import { Input } from '@components/common/UI';
import { toast } from 'sonner';
import { RiContactsBookLine } from 'react-icons/ri';
import { CgSpinner } from 'react-icons/cg';
import { spawn } from 'child_process';
import { UploadIcon } from '@heroicons/react/outline';
import { Icon } from '@tremor/react';

function Avatar({
  uid,
  url,
  size,
  onUpload,
  disabled = true,
  session,
}: {
  uid: string;
  url: Profiles['avatar_url'];
  size: number;
  onUpload: (url: string) => void;
  disabled?: boolean;
  session: any;
}) {
  const supabase = useSupabaseClient<Database>();
  const [avatarUrl, setAvatarUrl] = useState<Profiles['avatar_url']>(null);
  const [uploading, setUploading] = useState(false);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  }

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${new Date().getTime()}${uid}.${fileExt}`;
      const filePath = `${fileName}`;
      console.log(filePath);

      const { data, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        toast.error(uploadError.message);
        throw uploadError;
      }
      toast.success('Image Upload successfully!');
      //const response = await supabase.storage.from('avatars').getPublicUrl(data.path);
      onUpload(data.path);
    } catch (error) {
      toast.error('Error uploading avatar!');
      toast.error(error.message);
      console.log(error);
    } finally {
      setUploading(false);
    }
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
          {uploading ? (
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
          disabled={uploading || disabled}
        />
      </div>
    </div>
  );
}

export default Avatar;
