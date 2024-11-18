'use client';
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import "./globals.css";
import { inter } from "./fonts/fonts";
import dynamic from "next/dynamic";

const DashboardLayoutAccount = dynamic(() => import("./components/usoMui/DashboardLayout"), {
    ssr: false,
});

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <DashboardLayoutAccount>
          {children}
        </DashboardLayoutAccount>
      </body>
    </html>
  );
}
