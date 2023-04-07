import "./globals.css";

export const metadata = {
  title: "Predle",
  description: "Daily guess Predecessor heroes with clues",
};

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
