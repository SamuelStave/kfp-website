// src/app/about/page.tsx
"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

 const styles: { [key: string]: React.CSSProperties } = {
  container: { 
    backgroundColor: '#FFFFFF', 
    minHeight: '100vh',
    paddingBottom: '100px',
  },
  content: { 
    maxWidth: '1000px', 
    margin: '0 auto', 
    padding: '0 20px 100px 20px',
  },
  
  section: { 
    marginBottom: '80px', 
    opacity: loaded ? 1 : 0, 
    transform: loaded ? 'translateY(0)' : 'translateY(30px)', 
    transition: 'all 1s ease' 
  },
  sectionTitle: { 
    fontSize: '12px', 
    color: '#059669', 
    fontWeight: 600, 
    textTransform: 'uppercase', 
    letterSpacing: '0.1em', 
    marginBottom: '16px' 
  },
  heading: { 
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
    color: '#0F172A', 
    fontWeight: 700, 
    lineHeight: '1.2', 
    letterSpacing: '-0.02em', 
    margin: '0 0 20px 0' 
  },
  text: { 
    fontSize: '1rem', 
    color: '#475569', 
    lineHeight: '1.7', 
    margin: 0 
  },

  // Numbers Grid - Mobile Responsive
  numbersGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '24px', 
    borderTop: '1px solid #F1F5F9', 
    paddingTop: '40px',
  },
  numberItem: { 
    textAlign: 'center' 
  },
  number: { 
    fontSize: '2.5rem', 
    color: '#0F172A', 
    fontWeight: 700, 
    lineHeight: '1', 
    marginBottom: '8px' 
  },
  numberLabel: { 
    fontSize: '13px', 
    color: '#64748B', 
    fontWeight: 500 
  },

  // Offices Grid - Mobile Responsive
  officesGrid: { 
    display: 'grid', 
    gridTemplateColumns: '1fr', 
    gap: '20px', 
    marginTop: '32px',
  },
  officeCard: { 
    padding: '28px', 
    backgroundColor: '#F8FAFC', 
    borderRadius: '16px', 
    border: '1px solid #F1F5F9' 
  },
  officeTitle: { 
    fontSize: '16px', 
    color: '#0F172A', 
    fontWeight: 700, 
    margin: '0 0 12px 0' 
  },
  officeAddress: { 
    fontSize: '15px', 
    color: '#475569', 
    lineHeight: '1.6', 
    margin: 0 
  },
};

  return (
    <div style={styles.container}>
      <PageHeader title="Built on Trust." subtitle="We don't just sell land. We build futures and secure legacies for families across Nigeria." />
      
      <div style={styles.content}>
        {/* Story Section */}
        <div style={{...styles.section, transitionDelay: '0.2s'}}>
          <div style={styles.sectionTitle}>Our Story</div>
          <h2 style={styles.heading}>Making land ownership simple, honest, and affordable.</h2>
          <p style={styles.text}>
            King's Farms and Properties Ltd started with a simple goal: to remove the fear and stress from buying land in Nigeria. 
            We believe everyone deserves a place to call their own. No hidden fees. No long stories. Just verified, affordable land 
            and a team that guides you from the first inquiry to the day you hold your documents.
          </p>
        </div>

        {/* Numbers Section */}
        <div style={{...styles.section, transitionDelay: '0.4s'}}>
          <div style={styles.numbersGrid}>
            <div style={styles.numberItem}>
              <div style={styles.number}>10,000+</div>
              <div style={styles.numberLabel}>Lands Sold</div>
            </div>
            <div style={styles.numberItem}>
              <div style={styles.number}>15+</div>
              <div style={styles.numberLabel}>Years of Trust</div>
            </div>
            <div style={styles.numberItem}>
              <div style={styles.number}>2</div>
              <div style={styles.numberLabel}>Physical Offices</div>
            </div>
            <div style={styles.numberItem}>
              <div style={styles.number}>100%</div>
              <div style={styles.numberLabel}>Verified Documents</div>
            </div>
          </div>
        </div>

        {/* Offices Section */}
        <div style={{...styles.section, transitionDelay: '0.6s'}}>
          <div style={styles.sectionTitle}>Visit Us</div>
          <h2 style={styles.heading}>We are real. We are here.</h2>
          <p style={styles.text}>Come meet our team. See our proof. Drink tea with us.</p>
          
          <div style={styles.officesGrid}>
            <div style={styles.officeCard}>
              <h3 style={styles.officeTitle}>Kwara State Office</h3>
              <p style={styles.officeAddress}>Ago-Oja, Laduba Road,<br />Kwara State, Nigeria.</p>
            </div>
            <div style={styles.officeCard}>
              <h3 style={styles.officeTitle}>Lagos Office</h3>
              <p style={styles.officeAddress}>Epe,<br />Lagos State, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}