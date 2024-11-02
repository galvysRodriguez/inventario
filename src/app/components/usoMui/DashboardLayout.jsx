"use client"
import { useMemo, useState } from "react";
import { DemoPageContent } from "./DemoPageContent";
import { demoTheme } from "./Theme";
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Image from "next/image";
import { NAVIGATION } from "./Navigation";
import { LOGO } from "@/app/utils/const";
import { DataGridProvider } from "@/app/context/datagrid";

function DashboardLayoutAccount({window, children}) {

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

  const router = useDemoRouter('/');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      session={session}
      branding={{
        logo: <Image src={LOGO} alt="logo" width={42} height={40}></Image>,
        title: 'Destiny',
      }}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DataGridProvider>
          <DemoPageContent pathname={router.pathname}>
            {children}
          </DemoPageContent>
        </DataGridProvider>
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

export default DashboardLayoutAccount;

