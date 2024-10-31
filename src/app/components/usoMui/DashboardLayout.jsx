"use client"
import { useEffect, useMemo, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { demoTheme } from "./Theme";
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Image from "next/image";
import { NAVIGATION } from "./Navigation";
import NavigationMenu from "./NavigationMenu";
import { useRouter } from 'next/router';
import { useNavigate } from "react-router-dom";
import { renderPageContent } from "./RenderPageMenu";


const LIGHT_LOGO = '/images/logo.png'
const DARK_LOGO = '/images/LogoOscuro.png'

export function DemoPageContent({ pathname}) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {renderPageContent[pathname] || <Typography>Not content {pathname}</Typography>}
    </Box>
  );
}

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
        logo: <Image src={LIGHT_LOGO} alt="logo" width={42} height={40}></Image>,
        title: 'Destiny',
      }}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname}>
          {children}
        </DemoPageContent>
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

export default DashboardLayoutAccount;

