import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetProfile = () => {
  const supabase = useSupabaseClient();
  const key = ['profile'];

  const getProfile = (client) => {
    return client.from('profiles').select('*').throwOnError().single();
  };

  return useQuery(
    key,
    async () => {
      return getProfile(supabase).then((result) => result.data);
    },
    {
      select: (data) => data ?? [],
    }
  );
};

export const useGetImageProfile = ({ path }: { path: string }) => {
  const supabase = useSupabaseClient();
  const key = ['avatar'];

  const getAvatarProfile = (client, path) => {
    return client.storage.from('avatars').download(path);
  };

  return useQuery(
    key,
    async () => {
      return getAvatarProfile(supabase, path).then((result) => result.data);
    },
    {
      select: (data) => {
        if (!data) return null;
        const url = URL.createObjectURL(data);
        return url;
      },
      enabled: !!path,
    }
  );
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const key = ['updateProfile'];

  const updateProfile = (client, params) => {
    return client.from('profiles').upsert(params);
  };

  return useMutation(key, ({ client, params }: any) => updateProfile(client, params), {
    onSettled: () => {
      queryClient.invalidateQueries(['profile']);
    },
  });
};

export const useUpdateImageProfile = () => {
  const queryClient = useQueryClient();
  const key = ['updateAvatar'];

  const uploadAvatarImage = (client, filePath, file, update = false) => {
    if (update) {
      return client.storage.from('avatars').update(filePath, file, { cacheControl: '3600', upsert: true });
    }
    return client.storage.from('avatars').upload(filePath, file, { cacheControl: '3600', upsert: true });
  };

  return useMutation(
    key,
    ({ client, filePath, file, update = false }: any) => uploadAvatarImage(client, filePath, file, update),
    {
      onSettled: () => {
        queryClient.invalidateQueries(['avatar']);
      },
    }
  );
};
