// src/components/Footer.tsx

export default function Footer() {
  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      backgroundColor: '#0F172A',
      color: '#FFFFFF',
      padding: '24px 0',
      fontFamily: 'var(--font-poppins), sans-serif',
      borderTop: '1px solid #1E293B',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
    },
    copyright: {
      fontSize: '13px',
      color: '#94A3B8',
      fontWeight: 400,
    },
    links: {
      display: 'flex',
      gap: '24px',
    },
    link: {
      fontSize: '13px',
      color: '#94A3B8',
      textDecoration: 'none',
      fontWeight: 400,
      transition: 'color 0.3s ease',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.copyright}>
          2026 King's Farms and Properties Ltd. Built on Trust.
        </div>
        <div style={styles.links}>
          <a href="/about" style={styles.link} className="footer-link">Privacy</a>
          <a href="/contact" style={styles.link} className="footer-link">Terms</a>
        </div>
      </div>
      <style>{`
        .footer-link:hover { color: #FFFFFF !important; }
      `}</style>
    </footer>
  );
}