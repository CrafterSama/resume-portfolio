import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetExperiences = () => {
  const supabase = useSupabaseClient();
  const key = ['experiences'];

  const getExperiences = (client) => {
    return client.from('experiences').select('*').throwOnError();
  };

  return useQuery(
    key,
    async () => {
      return getExperiences(supabase).then((result) => result.data);
    },
    {
      select: (data) => data ?? [],
    }
  );
};

export const useUpdateExperience = () => {
  const queryClient = useQueryClient();
  const key = ['updateExperience'];

  const updateExperience = (client, params, id) => {
    return client.from('experiences').update(params).eq('id', id).throwOnError().select();
  };

  return useMutation(key, ({ client, params, id }: any) => updateExperience(client, params, id), {
    onSettled: () => {
      queryClient.invalidateQueries(['experiences']);
    },
  });
};

export const useCreateExperience = () => {
  const queryClient = useQueryClient();
  const key = ['createExperience'];

  const createExperience = (client, params) => {
    return client.from('experiences').insert(params).throwOnError().select();
  };

  return useMutation(key, ({ client, params }: any) => createExperience(client, params), {
    onSettled: () => {
      queryClient.invalidateQueries(['experiences']);
    },
  });
};
