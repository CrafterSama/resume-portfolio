import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { Toaster } from 'sonner';

import type { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <Toaster richColors position="top-right" />
        <Component {...pageProps} />
      </SessionContextProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
