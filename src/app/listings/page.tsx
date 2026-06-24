// src/app/listings/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { supabase } from "@/lib/supabase";

// Define the shape of our Land data
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

export default function ListingsPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [lands, setLands] = useState<Land[]>([]);

  useEffect(() => { 
    setLoaded(true);
    
    // Fetch lands from Supabase
    const fetchLands = async () => {
      const { data, error } = await supabase
        .from('lands')
        .select('*')
        .eq('is_available', true)
        .order('created_at', { ascending: false });
      
      if (data) {
        setLands(data);
      }
    };
    fetchLands();
  }, []);

  const filters = ["All", "Residential", "Commercial", "Farmland", "Investment"];
  const filteredLands = activeFilter === "All" ? lands : lands.filter(l => l.type === activeFilter);

  // ... (Keep the rest of your styles and JSX the same)


  // Add these mobile-responsive styles to the listings page

const styles: { [key: string]: React.CSSProperties } = {
  container: { 
    backgroundColor: '#FFFFFF', 
    minHeight: '100vh',
    paddingBottom: '100px', // Space for fixed nav
  },
  content: { 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 20px 100px 20px', // Reduced padding on mobile
  },
  
  // Filter Bar - Mobile Responsive
  filterContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    gap: '8px', 
    flexWrap: 'wrap', 
    marginBottom: '40px',
    padding: '0 10px',
    opacity: loaded ? 1 : 0, 
    transform: loaded ? 'translateY(0)' : 'translateY(20px)', 
    transition: 'all 0.8s ease 0.2s',
  },
  filterBtn: {
    padding: '10px 18px', 
    borderRadius: '100px', 
    border: '1px solid #E2E8F0', 
    backgroundColor: '#FFFFFF',
    color: '#64748B', 
    fontSize: '13px', 
    fontWeight: 500, 
    cursor: 'pointer', 
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },
  filterBtnActive: {
    backgroundColor: '#0F172A', 
    color: '#FFFFFF', 
    border: '1px solid #0F172A',
  },

  // Grid - Mobile Responsive
  grid: {
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
    gap: '24px',
  },
  
  // Card - Mobile Responsive
  card: {
    backgroundColor: '#FFFFFF', 
    borderRadius: '16px', 
    border: '1px solid #F1F5F9', 
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', 
    cursor: 'pointer',
    opacity: loaded ? 1 : 0, 
    transform: loaded ? 'translateY(0)' : 'translateY(30px)',
  },
  cardImage: {
    height: '200px', 
    backgroundColor: '#F1F5F9', 
    backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop')",
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
  },
  cardContent: { 
    padding: '20px' 
  },
  cardType: { 
    fontSize: '11px', 
    color: '#059669', 
    fontWeight: 600, 
    textTransform: 'uppercase', 
    letterSpacing: '0.05em', 
    marginBottom: '8px' 
  },
  cardTitle: { 
    fontSize: '16px', 
    color: '#0F172A', 
    fontWeight: 700, 
    margin: '0 0 8px 0', 
    lineHeight: '1.3' 
  },
  cardLocation: { 
    fontSize: '13px', 
    color: '#64748B', 
    margin: '0 0 16px 0', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '6px' 
  },
  cardFooter: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    borderTop: '1px solid #F1F5F9', 
    paddingTop: '16px' 
  },
  cardPrice: { 
    fontSize: '18px', 
    color: '#0F172A', 
    fontWeight: 700 
  },
  cardBtn: { 
    fontSize: '12px', 
    color: '#059669', 
    fontWeight: 600, 
    textDecoration: 'none', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '4px' 
  },
};

  return (
    <div style={styles.container}>
      <PageHeader title="Available Lands" subtitle="Explore our verified, affordable plots across Nigeria. Your kingdom awaits." />
      
      <div style={styles.content}>
        {/* Filters */}
        <div style={styles.filterContainer}>
          {filters.map(filter => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              style={{...styles.filterBtn, ...(activeFilter === filter ? styles.filterBtnActive : {})}}
              className="filter-btn"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {filteredLands.map((land, index) => (
            <div 
              key={land.id} 
              style={{...styles.card, transitionDelay: `${index * 0.1}s`}}
              className="land-card"
            >
              <div style={{
  ...styles.cardImage,
  backgroundImage: land.image_url ? `url(${land.image_url})` : "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop')"
}}></div>
              <div style={styles.cardContent}>
                <div style={styles.cardType}>{land.type}</div>
                <h3 style={styles.cardTitle}>{land.title}</h3>
                <p style={styles.cardLocation}>📍 {land.location} • {land.size}</p>
                <div style={styles.cardFooter}>
                  <span style={styles.cardPrice}>{land.price}</span>
                  <Link href="/contact" style={styles.cardBtn} className="card-link">View Details →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .filter-btn:hover { border-color: #CBD5E1 !important; transform: translateY(-2px); }
        .land-card:hover { transform: translateY(-8px) !important; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08); border-color: #E2E8F0 !important; }
        .card-link:hover { gap: 8px !important; }
      `}</style>
    </div>
  );
}