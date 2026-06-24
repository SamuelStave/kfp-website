// src/app/listings/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import PageHeader from "@/components/PageHeader";

interface Land {
  id: number;
  title: string;
  type: string;
  location: string;
  size: string;
  price: string;
  image_url: string;
  description: string;
  is_available: boolean;
}

export default function ListingDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [land, setLand] = useState<Land | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLand = async () => {
      const { data, error } = await supabase
        .from('lands')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (data) {
        setLand(data);
      }
      setLoading(false);
    };
    fetchLand();
  }, [slug]);

  const styles: { [key: string]: React.CSSProperties } = {
    container: { backgroundColor: '#FFFFFF', minHeight: '100vh', paddingBottom: '120px' },
    content: { maxWidth: '1000px', margin: '0 auto', padding: '0 20px' },
    imageContainer: { width: '100%', height: '400px', borderRadius: '24px', overflow: 'hidden', marginBottom: '40px', backgroundColor: '#F1F5F9' },
    image: { width: '100%', height: '100%', objectFit: 'cover' },
    header: { marginBottom: '32px' },
    type: { fontSize: '14px', color: '#059669', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' },
    title: { fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0F172A', fontWeight: 700, lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 16px 0' },
    location: { fontSize: '16px', color: '#64748B', margin: 0 },
    detailsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', padding: '32px', backgroundColor: '#F8FAFC', borderRadius: '16px', marginBottom: '40px', border: '1px solid #E2E8F0' },
    detailItem: { textAlign: 'center' },
    detailLabel: { fontSize: '12px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' },
    detailValue: { fontSize: '18px', color: '#0F172A', fontWeight: 600 },
    descriptionSection: { marginBottom: '40px' },
    sectionTitle: { fontSize: '20px', color: '#0F172A', fontWeight: 700, marginBottom: '16px' },
    description: { fontSize: '16px', color: '#475569', lineHeight: '1.7', margin: 0 },
    ctaSection: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px', backgroundColor: '#0F172A', borderRadius: '16px', flexWrap: 'wrap', gap: '24px' },
    price: { fontSize: '32px', color: '#FFFFFF', fontWeight: 700 },
    buttonGroup: { display: 'flex', gap: '16px', flexWrap: 'wrap' },
    primaryBtn: { backgroundColor: '#059669', color: '#FFFFFF', padding: '16px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease', border: 'none', cursor: 'pointer' },
    secondaryBtn: { backgroundColor: 'transparent', color: '#FFFFFF', padding: '16px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' },
    loading: { textAlign: 'center', padding: '100px 0', fontSize: '18px', color: '#64748B' },
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <PageHeader title="Loading..." subtitle="" />
        <div style={styles.content}>
          <div style={styles.loading}>Loading property details...</div>
        </div>
      </div>
    );
  }

  if (!land) {
    return (
      <div style={styles.container}>
        <PageHeader title="Property Not Found" subtitle="" />
        <div style={styles.content}>
          <div style={styles.loading}>
            Sorry, this property is no longer available.
            <br />
            <Link href="/listings" style={{ color: '#059669', marginTop: '16px', display: 'inline-block' }}>
              Browse other properties
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <PageHeader title="" subtitle="" />
      
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img 
            src={land.image_url || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000'} 
            alt={land.title}
            style={styles.image}
          />
        </div>

        <div style={styles.header}>
          <div style={styles.type}>{land.type}</div>
          <h1 style={styles.title}>{land.title}</h1>
          <p style={styles.location}>{land.location}</p>
        </div>

        <div style={styles.detailsGrid}>
          <div style={styles.detailItem}>
            <div style={styles.detailLabel}>Price</div>
            <div style={styles.detailValue}>{land.price}</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.detailLabel}>Size</div>
            <div style={styles.detailValue}>{land.size}</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.detailLabel}>Type</div>
            <div style={styles.detailValue}>{land.type}</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.detailLabel}>Status</div>
            <div style={{...styles.detailValue, color: land.is_available ? '#059669' : '#EF4444'}}>
              {land.is_available ? 'Available' : 'Sold'}
            </div>
          </div>
        </div>

        <div style={styles.descriptionSection}>
          <h2 style={styles.sectionTitle}>Description</h2>
          <p style={styles.description}>{land.description}</p>
        </div>

        <div style={styles.ctaSection}>
          <div style={styles.price}>{land.price}</div>
          <div style={styles.buttonGroup}>
            <a 
              href="https://wa.me/2348037319301" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.primaryBtn}
              className="btn-primary"
            >
              Inquire Now
            </a>
            <Link href="/listings" style={styles.secondaryBtn}>
              Back to Listings
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .btn-primary:hover {
          background-color: #047857 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}