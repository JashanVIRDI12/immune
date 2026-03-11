'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import styles from './page.module.css';

const allProducts = [
    { id: 1, name: 'Immunity Core Complex', category: 'Immunity', price: 148, rating: 4.9, reviews: 842, badge: 'Bestseller', tag: 'Most Popular', color: '#093624', delay: 0 },
    { id: 2, name: 'Longevity Stack Pro', category: 'Longevity', price: 228, rating: 4.8, reviews: 430, badge: 'New', tag: 'Limited Batch', color: '#1a3a5c', delay: 0.1 },
    { id: 3, name: 'Neuro Performance+', category: 'Neuro', price: 189, rating: 4.9, reviews: 615, badge: "Editor's Pick", tag: 'Top Rated', color: '#2d1b4e', delay: 0.2 },
    { id: 4, name: 'Athletic Edge Formula', category: 'Athletic', price: 165, rating: 4.7, reviews: 298, badge: null, tag: null, color: '#3d1a0a', delay: 0.3 },
    { id: 5, name: 'Adrenal Recovery Elite', category: 'Immunity', price: 138, rating: 4.8, reviews: 201, badge: null, tag: 'Staff Pick', color: '#2a1a00', delay: 0.4 },
    { id: 6, name: 'Mitochondrial Matrix', category: 'Longevity', price: 198, rating: 4.9, reviews: 379, badge: 'New', tag: null, color: '#0a2010', delay: 0.5 },
    { id: 7, name: 'Cortisol Shield', category: 'Neuro', price: 155, rating: 4.7, reviews: 164, badge: null, tag: null, color: '#1a0a2e', delay: 0.6 },
    { id: 8, name: 'Hydration Electrolyte Pro', category: 'Athletic', price: 89, rating: 4.6, reviews: 512, badge: null, tag: 'Fan Favourite', color: '#001a2a', delay: 0.7 },
];

const categories = ['All', 'Immunity', 'Longevity', 'Neuro', 'Athletic'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated', 'Newest'];

const fadeUpText = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

const fadeUpCard = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }
    })
};

export default function CollectionsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState('Featured');

    const filtered = activeCategory === 'All' ? allProducts : allProducts.filter(p => p.category === activeCategory);

    const sorted = [...filtered].sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        if (sortBy === 'Top Rated') return b.rating - a.rating;
        return 0;
    });

    return (
        <main className={styles.main}>
            <Navbar />

            {/* Ambient Backgrounds */}
            <div className={styles.ambientNoise} />
            <div className={styles.ambientOrb} />

            {/* Premium Header */}
            <header className={styles.pageHeader}>
                <div className={styles.headerContent}>
                    <motion.span
                        className={styles.pageEyebrow}
                        variants={fadeUpText}
                        initial="hidden"
                        animate="show"
                    >
                        ✦ Essential Optimization
                    </motion.span>

                    <div className={styles.titleWrap}>
                        <motion.h1
                            className={styles.pageTitle}
                            variants={fadeUpText}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.1 }}
                        >
                            Complete <br /> <em>Collection.</em>
                        </motion.h1>
                    </div>

                    <motion.p
                        className={styles.desc}
                        variants={fadeUpText}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                    >
                        Every formulation is engineered to pharmaceutical standards, crafted natively at the intersection of longevity science and ultra-luxury wellness.
                    </motion.p>
                </div>
            </header>

            <div className={styles.container}>
                {/* Minimalist Toolbar */}
                <div className={styles.toolbar}>
                    <div className={styles.filters}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className={styles.toolbarRight}>
                        <span className={styles.resultCount}>{sorted.length} Products</span>
                        <select
                            className={styles.sortSelect}
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                        >
                            {sortOptions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                    </div>
                </div>

                {/* Editorial Glass Grid */}
                <motion.div
                    className={styles.grid}
                >
                    <AnimatePresence mode="wait">
                        {sorted.length > 0 ? sorted.map((product, index) => (
                            <motion.div
                                key={`${activeCategory}-${product.id}`}
                                className={styles.card}
                                variants={fadeUpCard}
                                initial="hidden"
                                animate="show"
                                custom={index}
                                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            >
                                <Link href={`/product/${product.id}`} className={styles.cardImageLink}>
                                    <div className={styles.cardGlow} style={{ '--c': product.color }} />

                                    <div className={styles.productVisual}>
                                        <Image
                                            src="/product.jpeg"
                                            alt={product.name}
                                            width={200}
                                            height={200}
                                            className={styles.productImage}
                                        />
                                    </div>
                                </Link>

                                <div className={styles.cardBody}>
                                    <span className={styles.cardCat}>{product.category} Formulation</span>
                                    <h3 className={styles.cardName}>{product.name}</h3>

                                    <div className={styles.cardRating}>
                                        <Star size={10} fill="currentColor" color="var(--g-200)" />
                                        <span>{product.rating}</span>
                                        <span className={styles.ratingCount}>({product.reviews})</span>
                                    </div>

                                    <div className={styles.cardFooter}>
                                        <span className={styles.price}>${product.price}</span>
                                        <Link href={`/product/${product.id}`} className={styles.addBtn} onClick={e => e.stopPropagation()}>
                                            <ShoppingBag size={12} /> Bag
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )) : (
                            <motion.div
                                className={styles.emptyState}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <h2 className={styles.emptyTitle}>No Formulations Found.</h2>
                                <p className={styles.emptyDesc}>Try adjusting your filters or category selection.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
