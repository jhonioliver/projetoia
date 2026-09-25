export default function WhiteContent() {
    const row1 = [
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__1-1.webp',
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__2-1.webp',
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__3-1.webp',
      'https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__4-1.webp',
    ];
  
    const row2 = [
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
      { title: 'Comunidade Exclusiva', price: 'R$ 97' },
      { title: 'Sorteio Mentoria Individual', price: 'R$ 1.000' },
      { title: 'Vitrine de Produtos Virais', price: 'R$ 47' },
    ];
  
    return (
      <main
        style={{
          margin: 0,
          padding: 0,
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          overflowX: 'hidden',
          background: '#FFFFFF',
        }}
      >
        {/* ===== BANNER TOPO ===== */}
        <div
          style={{
            background: '#FF0083',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '15px',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 'clamp(18px, 4vw, 30px)',
              fontWeight: 400,
            }}
          >
            Novo <strong>Estratégia</strong> de 2026!
          </p>
        </div>
  
        {/* ===== HERO ===== */}
        <section
          style={{
            background: '#FFFFFF',
            padding: 'clamp(20px, 5vw, 50px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: 700, width: '100%', textAlign: 'center' }}>
            <p
              style={{
                margin: '0 0 12px',
                fontSize: 'clamp(20px, 4vw, 25px)',
                fontWeight: 700,
                color: '#000',
                lineHeight: 1.35,
              }}
            >
              Aprenda a gerar influencers ultra-realistas geradas com IA para
              divulgações online
            </p>
            <p
              style={{
                margin: '0 0 28px',
                fontSize: 'clamp(16px, 3.5vw, 20px)',
                fontWeight: 400,
                color: '#000',
              }}
            >
              mesmo sem experiência e mesmo se não entenda nada de IA
            </p>
  
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                maxWidth: 520,
                margin: '0 auto',
              }}
            >
              <img
                src="https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__2-1.webp"
                alt="Modelo IA"
                style={{ width: '100%', borderRadius: 15, display: 'block' }}
              />
              <img
                src="https://iamilionaria.com/wp-content/uploads/2026/04/AnyConv.com__3-1.webp"
                alt="Modelo IA"
                style={{ width: '100%', borderRadius: 15, display: 'block' }}
              />
            </div>
          </div>
        </section>
  
        {/* ===== SEÇÃO 1 ===== */}
        <section
          style={{
            background: '#1E191A',
            padding: 'clamp(24px, 6vw, 80px) clamp(16px, 4vw, 32px) clamp(40px, 8vw, 105px)',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                margin: '0 0 34px',
                fontSize: 'clamp(20px, 4.5vw, 35px)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.35,
                maxWidth: 630,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Aprenda a criar modelos de IA realistas para utilizar como achar
              melhor.
            </p>
  
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 12,
              }}
              className="img-grid"
            >
              {row1.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Exemplo ${i + 1}`}
                  style={{ width: '100%', borderRadius: 15, display: 'block' }}
                />
              ))}
            </div>
          </div>
        </section>
  
        {/* ===== SEÇÃO 2 ===== */}
        <section
          style={{
            background: '#1E191A',
            padding: '0 clamp(16px, 4vw, 32px) clamp(40px, 8vw, 105px)',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                margin: '0 0 34px',
                fontSize: 'clamp(20px, 4.5vw, 35px)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.35,
                maxWidth: 730,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Aprenda a criar modelos de IA realistas para utilizar na sua empresa
              e promover os seus produtos.
            </p>
  
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 12,
              }}
            >
              {row2.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Exemplo ${i + 5}`}
                  style={{ width: '100%', borderRadius: 15, display: 'block' }}
                />
              ))}
            </div>
          </div>
        </section>
  
        {/* ===== OFERTA ===== */}
        <section
          style={{
            background: '#111111',
            backgroundImage:
              'url(https://iamilionaria.com/wp-content/uploads/2026/03/bg-rosa.webp)',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: 'clamp(40px, 6vw, 60px) 16px',
          }}
        >
          <div
            style={{
              maxWidth: 560,
              margin: '0 auto',
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.28)',
              borderRadius: 25,
              padding: 'clamp(16px, 4vw, 28px)',
            }}
          >
            <p
              style={{
                margin: '0 0 18px',
                textAlign: 'center',
                fontSize: 'clamp(20px, 4vw, 28px)',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              Comprando agora você receberá:
            </p>
  
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {benefits.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12,
                    background: 'rgba(0,0,0,0.28)',
                    border: '1px solid rgba(255,255,255,0.28)',
                    borderRadius: 18,
                    padding: '14px 16px',
                    color: '#FFFFFF',
                  }}
                >
                  <span style={{ fontSize: 14, lineHeight: 1.3 }}>{item.title}</span>
                  <span
                    style={{
                      fontSize: 13,
                      color: '#AAAAAA',
                      textDecoration: 'line-through',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
  
            {/* Preço */}
            <div style={{ textAlign: 'center', marginTop: 28 }}>
              <span
                style={{
                  display: 'inline-block',
                  background: '#FF0083',
                  color: '#fff',
                  fontWeight: 700,
                  padding: '6px 16px',
                  borderRadius: 30,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  fontSize: 13,
                  marginBottom: 12,
                }}
              >
                🔥 95% DE DESCONTO!
              </span>
  
              <p
                style={{
                  margin: '8px 0',
                  color: '#7A7A7A',
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: 1.2,
                }}
              >
                DE{' '}
                <span style={{ color: '#ff0000', textDecoration: 'line-through' }}>
                  R$1.964
                </span>{' '}
                POR APENAS
              </p>
  
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  gap: 4,
                  margin: '8px 0',
                }}
              >
                <div style={{ textAlign: 'right', paddingBottom: 8 }}>
                  <div style={{ color: '#999', fontSize: 14, textTransform: 'uppercase' }}>
                    12x de
                  </div>
                  <div style={{ color: '#1D1D1F', fontSize: 'clamp(28px, 8vw, 42px)', fontWeight: 600 }}>
                    R$
                  </div>
                </div>
                <div
                  style={{
                    color: '#1D1D1F',
                    fontSize: 'clamp(64px, 18vw, 100px)',
                    fontWeight: 700,
                    lineHeight: 0.95,
                    letterSpacing: -4,
                  }}
                >
                  10,33
                </div>
              </div>
  
              <p
                style={{
                  margin: '8px auto 0',
                  display: 'inline-block',
                  color: '#999',
                  fontSize: 15,
                  border: '1px solid rgba(153,153,153,0.6)',
                  borderRadius: 10,
                  padding: '5px 14px',
                }}
              >
                ou R$ 97,00 à vista
              </p>
  
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  marginTop: 16,
                }}
              >
                <img
                  src="https://iamilionaria.com/wp-content/uploads/2025/11/users-1.png"
                  alt="Alunos"
                  style={{ height: 28 }}
                />
                <span style={{ color: '#000', fontWeight: 700, fontSize: 15 }}>
                  +3.000 alunos
                </span>
              </div>
  
              <a
                href="https://pay.kirvano.com/8e3fca8a-b201-4625-ad64-e861599dec6f"
                style={{
                  display: 'block',
                  marginTop: 18,
                  background: 'linear-gradient(89deg, #00B400 0%, #00DE3B 100%)',
                  color: '#000',
                  fontWeight: 600,
                  fontSize: 16,
                  textAlign: 'center',
                  textDecoration: 'none',
                  padding: 24,
                  borderRadius: 99,
                }}
              >
                COMEÇAR AGORA MESMO!
              </a>
            </div>
          </div>
        </section>
  
        {/* ===== GARANTIA ===== */}
        <section
          style={{
            background: '#111111',
            padding: 'clamp(40px, 8vw, 80px) 20px',
            textAlign: 'center',
          }}
        >
          <img
            src="https://iamilionaria.com/wp-content/uploads/2026/03/garantia-rosa.webp"
            alt="Garantia"
            style={{
              width: 'min(280px, 70%)',
              margin: '0 auto 16px',
              display: 'block',
            }}
          />
          <h2
            style={{
              margin: '0 0 12px',
              color: '#FFFFFF',
              fontSize: 'clamp(26px, 6vw, 40px)',
              fontWeight: 600,
            }}
          >
            Garantia incondicional
          </h2>
          <p
            style={{
              margin: '0 auto',
              maxWidth: 670,
              color: '#CECECE',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              lineHeight: 1.7,
            }}
          >
            Após entrar no Curso, você terá 7 dias para acompanhar os conteúdos e
            se adaptar. Se dentro desse período, você sentir que não é pra você, é
            só entrar em contato comigo via email e solicitar o reembolso e
            devolvo 100% do valor investido no curso!
          </p>
        </section>
  
        {/* ===== FOOTER ===== */}
        <footer
          style={{
            background: '#101010',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#BB91AE',
              fontSize: 12,
              lineHeight: 1.5,
            }}
          >
            © Método IA | 2026
            <br />
            Todos os direitos reservados.
          </p>
        </footer>
  
        <style>{`
          @media (min-width: 768px) {
            .img-grid {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
        `}</style>
      </main>
    );
  }