import React from 'react';

export default function Features() {
  return (
    <section style={{ padding: '40px', backgroundColor: '#f9f9f9', textAlign: 'center', color: '#333' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Project Features</h2>
      <p>Explore the core functionalities of our application below.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', minWidth: '250px', backgroundColor: '#fff' }}>
          <h3>Feature One</h3>
          <p>Description of the first amazing feature.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', minWidth: '250px', backgroundColor: '#fff' }}>
          <h3>Feature Two</h3>
          <p>Description of the second amazing feature.</p>
        </div>
      </div>
    </section>
  );
}