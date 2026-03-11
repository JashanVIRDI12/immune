'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, X, Menu, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

const navItems = [
    { label: 'Collections', href: '/collections', sub: ['Immunity Core', 'Longevity Stack', 'Neuro Performance', 'Athletic Edge'] },
    { label: 'Science', href: '/science' },
    { label: 'Journal', href: '/journal' },
    { label: 'Our Story', href: '/about' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const [cartCount] = useState(2);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <header className={styles.header}>
            {/* Announcement strip */}
            <div className={`${styles.strip} ${scrolled ? styles.stripHidden : ''}`}>
                <div className={styles.stripInner}>
                    <span className={styles.stripText}>Complimentary Global Shipping on Orders Over $150</span>
                    <span className={styles.stripAction}>Shop Collection <ArrowRight size={10} /></span>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`${styles.navWrapper} ${scrolled ? styles.navWrapperScrolled : ''}`}>
                <nav className={styles.nav}>
                    {/* LeftLinks */}
                    <div className={styles.leftLinks}>
                        {navItems.slice(0, 2).map((item) => (
                            <div
                                key={item.label}
                                className={styles.linkWrap}
                                onMouseEnter={() => item.sub && setDropdown(item.label)}
                                onMouseLeave={() => setDropdown(null)}
                            >
                                <Link href={item.href} className={styles.link}>
                                    {item.label}
                                </Link>
                                <AnimatePresence>
                                    {item.sub && dropdown === item.label && (
                                        <motion.div
                                            className={styles.dropdown}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.2, ease: 'easeOut' }}
                                        >
                                            {item.sub.map(s => (
                                                <Link key={s} href="/collections" className={styles.dropItem}>
                                                    {s}
                                                    <span className={styles.dropItemArrow}>→</span>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Logo Center */}
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoText}>IMMUNE</span>
                    </Link>

                    {/* RightLinks */}
                    <div className={styles.rightLinks}>
                        {navItems.slice(2).map(item => (
                            <Link key={item.label} href={item.href} className={styles.link}>{item.label}</Link>
                        ))}
                        <button className={styles.iconBtn} aria-label="Search">
                            <Search size={16} strokeWidth={1.5} />
                        </button>
                        <Link href="/cart" className={styles.cartBtn} aria-label="Cart">
                            <span className={styles.cartText}>Cart</span>
                            <div className={styles.cartIconWrap}>
                                <ShoppingBag size={16} strokeWidth={1.5} />
                                {cartCount > 0 && (
                                    <motion.span
                                        className={styles.cartDot}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 400 }}
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </div>
                        </Link>
                        <button className={styles.menuBtn} onClick={() => setMobileOpen(true)}>
                            <Menu size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Premium Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setMobileOpen(false)}
                    >
                        <motion.div
                            className={styles.drawer}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className={styles.drawerTop}>
                                <span className={styles.logoText}>IMMUNE</span>
                                <button className={styles.closeBtn} onClick={() => setMobileOpen(false)}>
                                    <X size={24} strokeWidth={1.5} />
                                </button>
                            </div>

                            <div className={styles.drawerContent}>
                                <div className={styles.drawerLinks}>
                                    {navItems.map((item, i) => (
                                        <div key={item.label} className={styles.drawerLinkWrap}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
                                            >
                                                <Link href={item.href} className={styles.drawerLink} onClick={(e) => {
                                                    // Immediately close drawer without blocking navigation
                                                    setTimeout(() => setMobileOpen(false), 50);
                                                }}>
                                                    {item.label}
                                                </Link>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>

                                <motion.div
                                    className={styles.drawerFooter}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className={styles.drawerFooterLinks}>
                                        <Link href="#">FAQ</Link>
                                        <Link href="#">Contact</Link>
                                        <Link href="#">Account</Link>
                                    </div>
                                    <Link href="/collections" className={styles.drawerCta} onClick={(e) => {
                                        setTimeout(() => setMobileOpen(false), 50);
                                    }}>
                                        Discover the Collection <ArrowRight size={16} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
