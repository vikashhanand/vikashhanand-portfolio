import './globals.css';

export const metadata = {
  title: 'Vikash Anand - Full Stack Developer Portfolio',
  description: 'Portfolio of Vikash Anand - Passionate full stack developer skilled in building modern web applications using Next.js, React, Node.js, MongoDB, and Tailwind CSS.',
  keywords: 'Vikash Anand, Full Stack Developer, Next.js, React, Node.js, MongoDB, Tailwind CSS, Portfolio',
  authors: [{ name: 'Vikash Anand' }],
  openGraph: {
    title: 'Vikash Anand - Full Stack Developer Portfolio',
    description: 'Passionate full stack developer building modern web applications.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-light antialiased">
        {children}
      </body>
    </html>
  );
}
