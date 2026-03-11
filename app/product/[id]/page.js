'use client';
import { useState } from 'react';
import { use } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import {
    ShoppingBag, Heart, Star, Shield, Zap, Award,
    Plus, Minus, ArrowLeft, Check, Leaf, FlaskConical,
    ChevronDown, ChevronUp, Truck, RefreshCw
} from 'lucide-react';
import styles from './page.module.css';

const products = {
    1: {
        id: 1, name: 'Immunity Core Complex', category: 'Immunity',
        price: 148, originalPrice: 180, rating: 4.9, reviews: 842,
        color: '#093624', tagline: 'The foundational immune protocol for extraordinary humans',
        desc: 'A precision matrix of 23 clinically-dosed bioavailable nutrients engineered to work in cellular synchrony. Not just immune support — total immune architecture. Our proprietary BioSync™ delivery system ensures each molecule reaches its cellular target with maximum bioavailability.',
        ingredients: [
            'Glutathione (Liposomal) 500mg',
            'Zinc Glycinate 30mg',
            'Vitamin D3 5000IU + K2 200mcg',
            'Elderberry Extract 1000mg',
            'Beta-Glucan 250mg',
            'Quercetin Phytosome 500mg',
        ],
        benefits: [
            'Activates innate & adaptive immunity',
            'Depletes oxidative stress at cellular level',
            'Supports mucosal barrier integrity',
            'Reduces inflammatory cytokine cascade',
        ],
        sizes: ['30-Day Supply', '60-Day Supply', '90-Day Supply'],
        badge: 'Bestseller',
    },
};

const RELATED = [
    { id: 2, name: 'Longevity Stack Pro', category: 'Longevity', price: 228, tag: 'New' },
    { id: 3, name: 'Neuro Performance+', category: 'Neuro', price: 189, tag: "Editor's Pick" },
    { id: 6, name: 'Mitochondrial Matrix', category: 'Longevity', price: 198, tag: 'New' },
];

export default function ProductPage({ params }) {
    const resolvedParams = use(params);
    const product = products[resolvedParams.id] || products[1];
    const [qty, setQty] = useState(1);
    const [selectedSize, setSelectedSize] = useState('30-Day Supply');
    const [wishlisted, setWishlisted] = useState(false);
    const [activeTab, setActiveTab] = useState('benefits');
    const [added, setAdded] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);

    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2200);
    };

    const faqs = [
        { q: 'When will I see results?', a: 'Most customers notice improved energy and resilience within 2–3 weeks of consistent daily use.' },
        { q: 'Are there any allergens?', a: 'Our formula is free from gluten, dairy, soy, and artificial additives. Produced in a GMP-certified facility.' },
        { q: 'Can I take this with other supplements?', a: 'Yes. IMMUNE formulas are designed to stack synergistically. Consult your physician if you are on prescription medication.' },
    ];

    return (
        <main className={styles.main}>
            <Navbar />

            {/* Breadcrumb */}
            <div className={styles.breadcrumbBar}>
                <div className={styles.breadcrumbInner}>
                    <Link href="/collections" className={styles.backLink}>
                        <ArrowLeft size={14} strokeWidth={2} /> Collections
                    </Link>
                    <span className={styles.breadSep}>/</span>
                    <span className={styles.breadCurrent}>{product.name}</span>
                </div>
            </div>

            {/* Main layout */}
            <div className={styles.layout}>
                {/* ── LEFT: Image panel ── */}
                <div className={styles.imagePanel}>
                    <div className={styles.imageStickyWrap}>
                        {/* Badge */}
                        {product.badge && (
                            <span className={styles.floatingBadge}>{product.badge}</span>
                        )}
                        {/* Main image */}
                        <div className={styles.mainImageWrap}>
                            <Image
                                src="/product.jpeg"
                                alt={product.name}
                                fill
                                className={styles.mainImage}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <div className={styles.imageSheen} />
                        </div>
                        {/* Thumbnail strip */}
                        <div className={styles.thumbRow}>
                            {[0, 1, 2].map(i => (
                                <button key={i} className={`${styles.thumb} ${i === 0 ? styles.thumbActive : ''}`}>
                                    <Image
                                        src="/product.jpeg"
                                        alt={`View ${i + 1}`}
                                        fill
                                        className={styles.thumbImg}
                                        sizes="80px"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: Info panel ── */}
                <div className={styles.infoPanel}>
                    {/* Category + Rating row */}
                    <div className={styles.metaRow}>
                        <span className={styles.categoryPill}>{product.category}</span>
                        <div className={styles.ratingRow}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={13} fill="#d4a843" color="#d4a843" />
                            ))}
                            <span className={styles.ratingNum}>{product.rating}</span>
                            <span className={styles.ratingCount}>({product.reviews.toLocaleString()})</span>
                        </div>
                    </div>

                    {/* Name */}
                    <h1 className={styles.productName}>{product.name}</h1>
                    <p className={styles.tagline}>{product.tagline}</p>

                    {/* Price */}
                    <div className={styles.priceRow}>
                        <span className={styles.price}>${product.price}</span>
                        {product.originalPrice && (
                            <>
                                <span className={styles.originalPrice}>${product.originalPrice}</span>
                                <span className={styles.saveBadge}>Save ${product.originalPrice - product.price}</span>
                            </>
                        )}
                    </div>

                    {/* Divider */}
                    <div className={styles.hr} />

                    {/* Supply selector */}
                    <div className={styles.sizeSection}>
                        <div className={styles.sectionLabelRow}>
                            <span className={styles.sectionLabel}>Supply</span>
                            <span className={styles.sectionHint}>Best value: 90-Day</span>
                        </div>
                        <div className={styles.sizes}>
                            {product.sizes.map(s => (
                                <button
                                    key={s}
                                    className={`${styles.sizeBtn} ${selectedSize === s ? styles.sizeActive : ''}`}
                                    onClick={() => setSelectedSize(s)}
                                >
                                    {s}
                                    {s === '90-Day Supply' && <span className={styles.sizeTag}>Best Value</span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className={styles.qtySection}>
                        <span className={styles.sectionLabel}>Quantity</span>
                        <div className={styles.qtyControl}>
                            <button className={styles.qtyBtn} onClick={() => setQty(Math.max(1, qty - 1))}>
                                <Minus size={13} />
                            </button>
                            <span className={styles.qtyNum}>{qty}</span>
                            <button className={styles.qtyBtn} onClick={() => setQty(qty + 1)}>
                                <Plus size={13} />
                            </button>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className={styles.ctaRow}>
                        <button
                            className={`${styles.addCartBtn} ${added ? styles.addCartSuccess : ''}`}
                            onClick={handleAdd}
                        >
                            {added ? (
                                <><Check size={17} strokeWidth={2.5} /> Added to Cart!</>
                            ) : (
                                <><ShoppingBag size={17} /> Add to Cart · ${product.price * qty}</>
                            )}
                        </button>
                        <button
                            className={`${styles.wishBtn} ${wishlisted ? styles.wished : ''}`}
                            onClick={() => setWishlisted(!wishlisted)}
                            aria-label="Wishlist"
                        >
                            <Heart size={18} fill={wishlisted ? '#093624' : 'none'} />
                        </button>
                    </div>

                    {/* Delivery badges */}
                    <div className={styles.deliveryRow}>
                        <div className={styles.deliveryItem}>
                            <Truck size={14} color="#093624" />
                            <span>Free shipping on orders $150+</span>
                        </div>
                        <div className={styles.deliveryItem}>
                            <RefreshCw size={14} color="#093624" />
                            <span>30-day money-back guarantee</span>
                        </div>
                    </div>

                    <div className={styles.hr} />

                    {/* Tabs */}
                    <div className={styles.tabs}>
                        {['benefits', 'ingredients', 'science'].map(tab => (
                            <button
                                key={tab}
                                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className={styles.tabContent}>
                        {activeTab === 'benefits' && (
                            <ul className={styles.benefitsList}>
                                {product.benefits.map(b => (
                                    <li key={b} className={styles.benefitItem}>
                                        <span className={styles.benefitCheck}><Check size={11} strokeWidth={3} /></span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {activeTab === 'ingredients' && (
                            <div className={styles.ingredientGrid}>
                                {product.ingredients.map(ing => (
                                    <div key={ing} className={styles.ingredientPill}>
                                        <Leaf size={12} color="#093624" />
                                        <span>{ing}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'science' && (
                            <p className={styles.scienceText}>{product.desc}</p>
                        )}
                    </div>

                    <div className={styles.hr} />

                    {/* Trust signals */}
                    <div className={styles.trustGrid}>
                        <div className={styles.trustCard}>
                            <Shield size={20} color="#093624" />
                            <span className={styles.trustTitle}>GMP Certified</span>
                            <span className={styles.trustSub}>Pharmaceutical-grade facility</span>
                        </div>
                        <div className={styles.trustCard}>
                            <FlaskConical size={20} color="#093624" />
                            <span className={styles.trustTitle}>Third-Party Tested</span>
                            <span className={styles.trustSub}>Every batch verified</span>
                        </div>
                        <div className={styles.trustCard}>
                            <Award size={20} color="#093624" />
                            <span className={styles.trustTitle}>Certified Pure</span>
                            <span className={styles.trustSub}>No fillers, no compromises</span>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className={styles.faqSection}>
                        <p className={styles.faqHeading}>Frequently Asked</p>
                        {faqs.map((faq, i) => (
                            <div key={i} className={styles.faqItem}>
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                >
                                    {faq.q}
                                    {expandedFaq === i ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                </button>
                                {expandedFaq === i && (
                                    <p className={styles.faqAnswer}>{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── You may also like ── */}
            <section className={styles.relatedSection}>
                <div className={styles.relatedInner}>
                    <p className={styles.relatedOverline}>Complete Your Protocol</p>
                    <h2 className={styles.relatedTitle}>Others Also Love</h2>
                    <div className={styles.relatedGrid}>
                        {RELATED.map(r => (
                            <Link key={r.id} href={`/product/${r.id}`} className={styles.relatedCard}>
                                <div className={styles.relatedImgWrap}>
                                    <Image
                                        src="/product.jpeg"
                                        alt={r.name}
                                        fill
                                        className={styles.relatedImg}
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                    />
                                    {r.tag && <span className={styles.relatedTag}>{r.tag}</span>}
                                </div>
                                <div className={styles.relatedBody}>
                                    <span className={styles.relatedCat}>{r.category}</span>
                                    <p className={styles.relatedName}>{r.name}</p>
                                    <span className={styles.relatedPrice}>${r.price}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
