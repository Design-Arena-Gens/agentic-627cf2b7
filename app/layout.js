export const metadata = {
  title: 'TMKOC on YouTube',
  description: 'Autoplay TMKOC search playlist from YouTube',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000' }}>{children}</body>
    </html>
  );
}
