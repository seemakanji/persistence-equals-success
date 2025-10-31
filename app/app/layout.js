import "./globals.css";

export const metadata = {
  title: "Persistence Equals Success — Seema Kanji",
  description:
    "A memoir of resilience, law, and two paths to motherhood — surrogacy and adoption.",
  openGraph: {
    title: "Persistence Equals Success — Seema Kanji",
    description:
      "A memoir of resilience, law, and two paths to motherhood — surrogacy and adoption.",
    images: ["/assets/seema-headshot-1200x1600.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-800">{children}</body>
    </html>
  );
}
