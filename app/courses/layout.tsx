import { Metadata } from "next";
import ProtectedRoute from "@/components/route/protected-routes";

export const metadata: Metadata = {
  title: "LearnAO",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <ProtectedRoute>{children}</ProtectedRoute>
      </body>
    </html>
  );
}