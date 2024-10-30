import { ToastProvider } from "@/components/providers/toaster-provider";
import type { Metadata } from "next";

export const metadata: Metadata = 
{
  title: "Colibrimo",
  description: "Colibrimo, l'investissement immobilier durable accessible au plus grand nombre.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body>
      <ToastProvider />
        {children}
      </body>
    </html>
  );
}
