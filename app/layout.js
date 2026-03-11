import './globals.css';

export const metadata = {
  title: 'IMMUNE — Ultra Luxury Wellness',
  description: 'Immune is the pinnacle of luxury wellness. Scientifically formulated supplements and biohacking solutions for those who demand the extraordinary.',
  keywords: 'immune, luxury wellness, supplements, biohacking, premium health',
  openGraph: {
    title: 'IMMUNE — Ultra Luxury Wellness',
    description: 'The pinnacle of luxury wellness',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ background: '#060a08' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#060a08' }}>{children}</body>
    </html>
  );
}

