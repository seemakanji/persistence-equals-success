import "./globals.css";

export const metadata = {
  title: "Persistence Equals Success — Seema Kanji",
  description: "A memoir website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
