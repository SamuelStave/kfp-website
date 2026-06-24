const styles: { [key: string]: React.CSSProperties } = {
  container: { 
    backgroundColor: '#FFFFFF', 
    minHeight: '100vh', 
    paddingBottom: '120px' 
  },
  content: { 
    maxWidth: '1000px', 
    margin: '0 auto', 
    padding: '0 20px' 
  },
  
  // Image Section - Mobile Responsive
  imageContainer: {
    width: '100%',
    height: '300px', // Smaller on mobile
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '28px',
    backgroundColor: '#F1F5F9',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  
  // Content
  header: { 
    marginBottom: '24px' 
  },
  type: {
    fontSize: '12px',
    color: '#059669',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '10px',
  },
  title: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    color: '#0F172A',
    fontWeight: 700,
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
    margin: '0 0 12px 0',
  },
  location: {
    fontSize: '15px',
    color: '#64748B',
    margin: 0,
  },
  
  // Details Grid - Mobile Responsive
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns on mobile
    gap: '16px',
    padding: '24px',
    backgroundColor: '#F8FAFC',
    borderRadius: '16px',
    marginBottom: '32px',
    border: '1px solid #E2E8F0',
  },
  detailItem: {
    textAlign: 'center',
  },
  detailLabel: {
    fontSize: '11px',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '6px',
  },
  detailValue: {
    fontSize: '16px',
    color: '#0F172A',
    fontWeight: 600,
  },
  
  // Description
  descriptionSection: { 
    marginBottom: '32px' 
  },
  sectionTitle: {
    fontSize: '18px',
    color: '#0F172A',
    fontWeight: 700,
    marginBottom: '12px',
  },
  description: {
    fontSize: '15px',
    color: '#475569',
    lineHeight: '1.7',
    margin: 0,
  },
  
  // Price & CTA - Mobile Responsive
  ctaSection: {
    display: 'flex',
    flexDirection: 'column', // Stack on mobile
    alignItems: 'stretch',
    padding: '24px',
    backgroundColor: '#0F172A',
    borderRadius: '16px',
    gap: '20px',
  },
  price: {
    fontSize: '28px',
    color: '#FFFFFF',
    fontWeight: 700,
    textAlign: 'center',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  primaryBtn: {
    backgroundColor: '#059669',
    color: '#FFFFFF',
    padding: '14px 24px',
    borderRadius: '100px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '14px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    padding: '14px 24px',
    borderRadius: '100px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '14px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.3)',
    cursor: 'pointer',
  },
  
  loading: {
    textAlign: 'center' as 'center',
    padding: '80px 20px',
    fontSize: '16px',
    color: '#64748B',
  },
};