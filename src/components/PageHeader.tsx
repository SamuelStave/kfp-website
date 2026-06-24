// src/components/PageHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    header: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #F1F5F9', // Very subtle border
      paddingTop: '40px',
      paddingBottom: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    topBar: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '60px',
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(-10px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    logo: {
      fontSize: '15px',
      fontWeight: 700,
      letterSpacing: '0.05em',
      color: '#0F172A',
      textTransform: 'uppercase',
      textDecoration: 'none',
    },
    contactLink: {
      fontSize: '13px',
      color: '#64748B',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'color 0.3s ease',
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 700,
      color: '#0F172A',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      margin: 0,
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#64748B',
      marginTop: '20px',
      fontWeight: 400,
      maxWidth: '600px',
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <Link href="/" style={styles.logo}>KFP Ltd.</Link>
        <a href="tel:+2348037319301" style={styles.contactLink} className="contact-link">
          +234 803 731 9301
        </a>
      </div>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.subtitle}>{subtitle}</p>
      
      <style>{`
        .contact-link:hover { color: #059669 !important; }
      `}</style>
    </header>
  );
}