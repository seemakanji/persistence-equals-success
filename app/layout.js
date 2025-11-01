export const metadata = {
  title: "Persistence Equals Success — Seema Kanji",
  description: "A memoir website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
