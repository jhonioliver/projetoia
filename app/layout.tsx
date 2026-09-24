import { redirect } from 'next/navigation';
import { getUserLayer } from '@/utils/get-user-layer';
import { headers, cookies } from 'next/headers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IA Milionária',
  description: 'Curso de IA',
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

  // === BLACK - URLs diferentes por parâmetro ===
  if (userLayer === 3) {
    const blackUrls: Record<string, string> = {
      oferta97:      'https://iamilionaria.com',
      oferta197:     'https://iamilionaria.com/oferta',
      grupo:         'https://iamilionaria.com/grupo',
    };

    const target = blackUrls[content] || 'https://iamilionaria.com';
    redirect(target);
  }

  // === GRAY ===
  if (userLayer === 2) {
    redirect('https://iamilionaria.com/ia');
  }

  // === WHITE ===
  redirect('https://iamilionaria.com/ia');
}