'use client';
import { useMemo, useState, useEffect } from "react";
import { DemoPageContent } from "./DemoPageContent";
import { demoTheme } from "./Theme";
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Image from "next/image";
import { NAVIGATION } from "./Navigation";
import { LOGO } from "@/app/utils/const";
import { DataGridProvider } from "@/app/context/datagrid";

function DashboardLayoutAccount({children }) {
  const [isClient, setIsClient] = useState(false);
  const [demoWindow, setDemoWindow] = useState(undefined);

  const [session, setSession] = useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const router = useDemoRouter('/')

  useEffect(() => {
    // Set `isClient` to true when the component is running on the client
    setIsClient(true);

    // Safe usage of `window`
    if (typeof window !== 'undefined') {
      setDemoWindow(window);
    }
  }, []);

  // Render only on the client
  if (!isClient) {
    return null;
  }
  
  return (
    <AppProvider
      session={session}
      branding={{
        logo: <Image src={LOGO} alt="logo" width={42} height={40} />,
        title: 'Destiny',
      }}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DataGridProvider endpoint={router?.pathname}>
          <DemoPageContent pathname={router?.pathname}>
            {children}
          </DemoPageContent>
        </DataGridProvider>
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashboardLayoutAccount;
