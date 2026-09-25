export default function WhiteContent() {
    const imagesRow1 = [
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__1-1.webp',
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__2-1.webp',
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__3-1.webp',
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__4-1.webp',
    ];
  
    const imagesRow2 = [
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__5-1.webp',
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__6-1.webp',
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__7-1.webp',
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__8-1.webp',
    ];
  
    const benefits = [
      { title: 'Método Completo IA Milionária', price: 'R$ 397' },
      { title: 'Criação de Modelos IA Ultra Realista', price: 'R$ 247' },
      { title: 'Estrutura Profissional para Redes Sociais', price: 'R$ 97' },
      { title: 'Estratégias de Viralização Rápida', price: 'R$ 197' },
      { title: 'Setup de Vendas Automáticas', price: 'R$ 197' },
      { title: 'Suporte Individual Ilimitado', price: 'R$ 97' },
      { title: 'Acesso Vitalício', price: 'R$ 47' },
    ];
  
    return (
      <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        {/* Banner topo */}
        <div className="bg-[#FF0083] text-white text-center py-3 px-4">
          <p className="text-lg md:text-2xl font-normal">
            Novo <strong>Estratégia</strong> de 2026!
          </p>
        </div>
  
        {/* Hero */}
        <section className="bg-white px-5 py-10 md:py-14">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-xl md:text-2xl font-bold leading-snug">
              Aprenda a gerar influencers ultra-realistas geradas com IA para divulgações online
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              mesmo sem experiência e mesmo se não entenda nada de IA
            </p>
  
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto pt-6">
              <img
                src="https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__2-1.webp"
                alt="Modelo IA"
                className="w-full rounded-2xl object-cover"
              />
              <img
                src="https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__3-1.webp"
                alt="Modelo IA"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Seção 1 - grid imagens */}
        <section className="bg-[#1E191A] text-white px-5 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-xl md:text-3xl font-bold leading-snug max-w-xl mx-auto">
              Aprenda a criar modelos de IA realistas para utilizar como achar melhor.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {imagesRow1.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Exemplo ${i + 1}`}
                  className="w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          </div>
        </section>
  
        {/* Seção 2 - grid imagens */}
        <section className="bg-[#1E191A] text-white px-5 pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-xl md:text-3xl font-bold leading-snug max-w-xl mx-auto">
              Aprenda a criar modelos de IA realistas para utilizar na sua empresa e promover os seus produtos.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {imagesRow2.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Exemplo ${i + 5}`}
                  className="w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          </div>
        </section>
  
        {/* Oferta */}
        <section className="bg-[#111111] text-white px-5 py-12 md:py-16">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Comprando agora você receberá:
            </h2>
  
            <div className="space-y-3">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-black/30 border border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="text-sm md:text-base">{item.title}</span>
                  <span className="text-sm text-gray-400 line-through ml-3 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
  
            <div className="text-center space-y-2 pt-4">
              <p className="text-xs tracking-widest text-[#FF0083] font-bold uppercase">
                🔥 95% DE DESCONTO!
              </p>
              <p className="text-sm text-gray-400">
                DE <span className="text-red-500 line-through">R$1.964</span> POR APENAS
              </p>
              <div className="flex items-end justify-center gap-1 py-2">
                <span className="text-gray-400 text-sm mb-2">12x de</span>
                <span className="text-4xl md:text-5xl font-bold">R$</span>
                <span className="text-6xl md:text-7xl font-bold leading-none">10,33</span>
              </div>
              <p className="text-sm text-gray-400 border border-gray-600 inline-block px-4 py-1 rounded-lg">
                ou R$ 97,00 à vista
              </p>
              <p className="text-sm font-bold text-black bg-white/90 inline-block px-3 py-1 rounded-full mt-2">
                +3.000 alunos
              </p>
            </div>
  
            <a
              href="https://pay.kirvano.com/8e3fca8a-b201-4625-ad64-e861599dec6f"
              className="block w-full text-center bg-gradient-to-r from-[#00B400] to-[#00DE3B] text-black font-bold text-base py-4 rounded-full hover:opacity-90 transition"
            >
              COMEÇAR AGORA MESMO!
            </a>
          </div>
        </section>
  
        {/* Garantia */}
        <section className="bg-[#111111] text-white px-5 py-12 md:py-16">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <img
              src="https://iamilionaria.com/wp-content/uploads/2026/03/garantia-rosa.webp"
              alt="Garantia"
              className="w-48 md:w-64 mx-auto"
            />
            <h2 className="text-2xl md:text-3xl font-semibold">Garantia incondicional</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Após entrar no Curso, você terá 7 dias para acompanhar os conteúdos e se adaptar.
              Se dentro desse período, você sentir que não é pra você, é só entrar em contato
              comigo via email e solicitar o reembolso e devolvo 100% do valor investido no curso!
            </p>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-[#101010] text-center py-8 px-4">
          <p className="text-xs text-[#BB91AE] leading-relaxed">
            © Método IA | 2026
            <br />
            Todos os direitos reservados.
          </p>
        </footer>
      </main>
    );
  }