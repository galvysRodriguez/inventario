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
import { useUser } from "@/app/context/user";
import { useRouter } from "next/navigation";
import { Account } from "@toolpad/core";

function DashboardLayoutAccount({ children }) {
  const routerA = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [demoWindow, setDemoWindow] = useState(undefined);
  const { user, setUser, removeUser } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Authentication functions
  const authentication = useMemo(() => {
    return {
      signIn: () => {
        routerA.push('/auth');
      },
      signOut: () => {
        removeUser()
      },
    };
  }, [routerA]);

  // Handling router and authentication logic
  const router = useDemoRouter('/');

  useEffect(() => {
    // This ensures the client-side environment (avoid SSR issues)
    setIsClient(true);

    // Safe usage of `window` object
    if (typeof window !== 'undefined') {
      setDemoWindow(window);
    }

    // Check user authentication and redirect if not authenticated
    if (user === null) {
      routerA.push('/auth');
    } else {
      setIsAuthenticated(true);
    }
  }, [user, routerA]);

  // Only render on client-side
  if (!isClient || !isAuthenticated) {
    return null; // Don't render the component until it's safe to do so
  }

  return (
      <AppProvider
        session={user}
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
