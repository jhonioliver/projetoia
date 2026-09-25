import { redirect } from 'next/navigation';
import WhiteContent from '@/components/pages/white/home';
import { getUserLayer } from '@/utils/get-user-layer';
import { headers, cookies } from 'next/headers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Método IA',
  description: 'Inteligência Artificial',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cks = await cookies();
  const hdrs = await headers();

  const userLayer = await getUserLayer({ cks, hdrs });
  const content = cks.get('xcat_valid')?.value || '';

  // === BLACK → redirect externo ===
  if (userLayer === 3) {
    const blackUrls: Record<string, string> = {
      oferta97:      'https://iamilionaria.com',
      oferta197:     'https://iamilionaria.com/oferta',
      grupo:         'https://iamilionaria.com/grupo',
    };

    const target = blackUrls[content] || 'https://iamilionaria.com';
    redirect(target);
  }

  // === GRAY → página interna ===
  if (userLayer === 2) {
    return (
      <html lang="pt-BR">
        <body className="antialiased">
          <WhiteContent />
        </body>
      </html>
    );
  }

  // === WHITE → página interna ===
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <WhiteContent />
      </body>
    </html>
  );
}