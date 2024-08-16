import StyledComponentsRegistry from 'src/lib/registry';

import { RootProvider } from '@providers/root-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Teste Front React WeFit</title>
        <link rel="icon" href="images/favicon.ico" />
        <link as="font" rel="preconnect" href="https://fonts.googleapis.com" />
        <link as="font" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <RootProvider>{children}</RootProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
