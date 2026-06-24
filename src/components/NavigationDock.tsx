// src/components/NavigationDock.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationDock() {
  const pathname = usePathname();
  
  // Don't show on homepage
  if (pathname === "/") return null;

  const styles: { [key: string]: React.CSSProperties } = {
    nav: {
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      width: 'auto',
      animation: 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    },
    dock: {
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '100px',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    },
    logo: { 
      color: '#FFFFFF', 
      fontWeight: 600, 
      fontSize: '13px', 
      padding: '8px 12px',
      borderRight: '1px solid rgba(255,255,255,0.1)',
      marginRight: '4px',
    },
    navLinks: { 
      display: 'flex', 
      gap: '4px', 
      listStyle: 'none', 
      margin: 0, 
      padding: 0,
      overflowX: 'auto',
      maxWidth: 'calc(100vw - 120px)',
    },
    navLink: {
      color: '#94A3B8',
      textDecoration: 'none',
      fontSize: '12px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      transition: 'all 0.3s ease',
      padding: '8px 12px',
      borderRadius: '100px',
    },
    activeLink: { 
      color: '#FFFFFF', 
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Listings" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.dock}>
        <span style={styles.logo}>KFP</span>
        <ul style={styles.navLinks}>
          {links.map(link => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="nav-link"
                style={{...styles.navLink, ...(pathname === link.href ? styles.activeLink : {})}}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        @keyframes slideUp { 
          from { transform: translateX(-50%) translateY(20px); opacity: 0; } 
          to { transform: translateX(-50%) translateY(0); opacity: 1; } 
        }
        .nav-link:hover { 
          color: #FFFFFF !important; 
          background-color: rgba(255,255,255,0.1); 
        }
        @media (max-width: 768px) {
          .nav-link {
            padding: 8px 10px !important;
            font-size: 11px !important;
          }
        }
      `}</style>
    </nav>
  );
}