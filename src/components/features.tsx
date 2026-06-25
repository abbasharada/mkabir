import React from 'react';

export default function Features() {
  const featuresList = [
    {
      title: "Blazing Fast Performance",
      description: "Optimized with Next.js Turbopack for near-instant rendering and lightning-fast page transitions."
    },
    {
      title: "Modular Clean Architecture",
      description: "Structured using robust components and layouts that seamlessly scale across development environments."
    },
    {
      title: "Fully Responsive UI",
      description: "Designed carefully to fluidly adapt from compact mobile layouts up to immersive widescreen displays."
    },
    {
      title: "Seamless Collaboration",
      description: "Built using synchronized git branch strategies to streamline integration workflows across engineering teams."
    }
  ];

  return (
    <section style={{ 
      padding: '80px 20px', 
      backgroundColor: '#f8fafc', 
      textAlign: 'center', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          color: '#0f172a', 
          marginBottom: '16px',
          letterSpacing: '-0.025em'
        }}>
          Core Application Features
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#475569', 
          marginBottom: '48px',
          maxWidth: '600px',
          marginRight: 'auto',
          marginLeft: 'auto'
        }}>
          Discover the architecture and performance engineering backing our team's collaborative release blueprint.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '24px', 
          marginTop: '20px' 
        }}>
          {featuresList.map((feat, idx) => (
            <div 
              key={idx} 
              style={{ 
                border: '1px solid #e2e8f0', 
                padding: '32px 24px', 
                borderRadius: '12px', 
                backgroundColor: '#ffffff',
                textAlign: 'left',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginBottom: '20px',
                fontSize: '1.125rem'
              }}>
                0{idx + 1}
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: '#1e293b', 
                marginBottom: '12px' 
              }}>
                {feat.title}
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#64748b', 
                lineHeight: '1.6' 
              }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}