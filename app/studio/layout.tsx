export const metadata = {
  title: "Keeola Store Studio",
  description: "Sanity Studio for Keeola Store",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
