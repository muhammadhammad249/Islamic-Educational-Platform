'use client';

export default function RootNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0D0D0D',
          color: '#fff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '6rem',
              color: 'rgba(212, 175, 55, 0.15)',
              margin: 0,
              lineHeight: 1,
            }}
          >
            404
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)' }}>
            This page could not be found.
          </p>
          <a
            href="/en"
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              background: '#D4AF37',
              color: '#0D0D0D',
              fontWeight: 700,
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
            }}
          >
            Go Home
          </a>
        </div>
      </body>
    </html>
  );
}
