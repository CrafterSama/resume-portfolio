import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { Toaster } from 'sonner';

import type { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/global.css';

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Toaster richColors position="top-right" />
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
export default MyApp;
