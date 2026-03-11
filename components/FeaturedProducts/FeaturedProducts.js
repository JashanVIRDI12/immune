'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import styles from './FeaturedProducts.module.css';

const categories = ['All', 'Immunity', 'Longevity', 'Neuro', 'Athletic'];

const products = [
    { id: 1, name: 'Immunity Core Complex', subtitle: 'Foundation Protocol', category: 'Immunity', price: 148, originalPrice: 180, rating: 4.9, reviews: 842, tag: 'Bestseller', accent: '#29a86a' },
    { id: 2, name: 'Longevity Stack Pro', subtitle: 'Cellular Age Reversal', category: 'Longevity', price: 228, originalPrice: null, rating: 4.8, reviews: 430, tag: 'New', accent: '#5ccf94' },
    { id: 3, name: 'Neuro Performance+', subtitle: 'Cognitive Architecture', category: 'Neuro', price: 189, originalPrice: null, rating: 4.9, reviews: 615, tag: "Editor's Pick", accent: '#29a86a' },
    { id: 4, name: 'Athletic Edge Formula', subtitle: 'Peak Performance', category: 'Athletic', price: 165, originalPrice: 195, rating: 4.7, reviews: 298, tag: null, accent: '#5ccf94' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: (i) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }
    })
};

const textFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
};

export default function FeaturedProducts() {
    const [activeCategory, setActiveCategory] = useState('All');
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

    return (
        <section className={styles.section}>
            <div className={styles.orbLeft} />
            <div className={styles.orbRight} />

            <div className={styles.container}>
                {/* ── Ultra-Premium Section Header ── */}
                <div className={styles.sectionHead}>
                    <motion.div
                        className={styles.headTop}
                        variants={textFadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <div className={styles.eyebrowWrap}>
                            <span className={styles.eyebrowDot} />
                            <span className={styles.eyebrow}>Our Formulas</span>
                        </div>
                        <Link href="/collections" className={styles.viewAllLink}>
                            View Full Collection <ArrowUpRight size={14} strokeWidth={2} />
                        </Link>
                    </motion.div>

                    <div className={styles.headBottom}>
                        <motion.div
                            className={styles.titleBlock}
                            variants={textFadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <h2 className={styles.title}>
                                Precision<br />
                                <em>Engineered.</em>
                            </h2>
                            <div className={styles.titleAccentLine} />
                        </motion.div>

                        <motion.div
                            className={styles.headMeta}
                            variants={textFadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <p className={styles.desc}>
                                Each formulation is crafted to pharmaceutical standards, using only the highest-grade bioavailable ingredients with full transparent sourcing.
                            </p>
                            <div className={styles.headStats}>
                                <div className={styles.stat}>
                                    <span className={styles.statVal}>47+</span>
                                    <span className={styles.statLabel}>Clinical Studies</span>
                                </div>
                                <div className={styles.statDivider} />
                                <div className={styles.stat}>
                                    <span className={styles.statVal}>99%</span>
                                    <span className={styles.statLabel}>Bioavailability</span>
                                </div>
                                <div className={styles.statDivider} />
                                <div className={styles.stat}>
                                    <span className={styles.statVal}>GMP</span>
                                    <span className={styles.statLabel}>Certified</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Filter Row ── */}
                <motion.div
                    className={styles.filterRow}
                    variants={textFadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className={styles.filterPills}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {activeCategory === cat && <motion.span layoutId="filterDot" className={styles.filterDot} />}
                                {cat}
                            </button>
                        ))}
                    </div>
                    <span className={styles.filterCount}>{filtered.length} Formulations</span>
                </motion.div>

                <div className={styles.divider} />

                {/* ── Product Grid ── */}
                <motion.div
                    ref={ref}
                    className={styles.grid}
                    key={activeCategory}
                >
                    <AnimatePresence mode="wait">
                        {filtered.map((product, index) => (
                            <motion.div
                                key={`${activeCategory}-${product.id}`}
                                className={styles.card}
                                variants={cardVariants}
                                initial="hidden"
                                animate={inView ? "show" : "hidden"}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                                custom={index}
                                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                            >
                                {/* Image Zone */}
                                <Link href={`/product/${product.id}`} className={styles.cardImage}>
                                    {/* Abstract gradients and textures */}
                                    <div className={styles.cardGlow} style={{ '--accent': product.accent }} />
                                    <div className={styles.dotGrid} />
                                    <div className={styles.glassHighlight} />

                                    <motion.div
                                        className={styles.productVisual}
                                    >
                                        <Image
                                            src="/product.jpeg"
                                            alt={product.name}
                                            fill
                                            className={styles.productImage}
                                            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                                        />
                                    </motion.div>

                                    {/* Tag badge */}
                                    {product.tag && (
                                        <span className={styles.tagBadge}>{product.tag}</span>
                                    )}

                                    {/* Hover overlay with quick CTA */}
                                    <div className={styles.imageHoverOverlay}>
                                        <span className={styles.quickView}>
                                            <ArrowUpRight size={14} /> Quick View
                                        </span>
                                    </div>
                                </Link>

                                {/* Card Body */}
                                <div className={styles.cardBody}>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardCat}>{product.category}</span>
                                        <div className={styles.cardRating}>
                                            <Star size={10} fill={product.accent} color={product.accent} />
                                            <span>{product.rating}</span>
                                            <span className={styles.ratingCount}>({product.reviews})</span>
                                        </div>
                                    </div>

                                    <h3 className={styles.cardName}>{product.name}</h3>
                                    <p className={styles.cardSubtitle}>{product.subtitle}</p>

                                    <div className={styles.cardFooter}>
                                        <div className={styles.priceBlock}>
                                            <span className={styles.price}>${product.price}</span>
                                            {product.originalPrice && (
                                                <span className={styles.originalPrice}>${product.originalPrice}</span>
                                            )}
                                        </div>
                                        <Link href={`/product/${product.id}`} className={styles.addBtn} onClick={(e) => e.stopPropagation()}>
                                            <span>Add to Cart</span>
                                            <div className={styles.addIconWrap}>
                                                <ShoppingBag size={12} strokeWidth={2.5} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className={styles.bottomCta}
                    variants={textFadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className={styles.ctaDividerLine} />
                    <Link href="/collections" className={styles.bottomCtaBtn}>
                        <Sparkles size={14} />
                        Explore All Formulations
                        <ArrowRight size={14} />
                    </Link>
                    <div className={styles.ctaDividerLine} />
                </motion.div>
            </div>
        </section>
    );
}
