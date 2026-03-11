'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Shield, ChevronRight } from 'lucide-react';
import styles from './page.module.css';

const initialItems = [
    { id: 1, name: 'Immunity Core Complex', size: '30-Day Supply', price: 148, qty: 1, color: '#093624', vialColor1: '#093624cc', vialColor2: '#093624' },
    { id: 2, name: 'Longevity Stack Pro', size: '60-Day Supply', price: 228, qty: 1, color: '#1a3a5c', vialColor1: '#1a3a5ccc', vialColor2: '#1a3a5c' },
];

export default function CartPage() {
    const [items, setItems] = useState(initialItems);
    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState(false);

    const updateQty = (id, delta) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
            )
        );
    };
    const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
    const shipping = subtotal >= 150 ? 0 : 15;
    const total = subtotal - discount + (items.length > 0 ? shipping : 0);

    return (
        <main className={styles.main}>
            <div className={styles.ambientNoise} />
            <div className={styles.ambientOrb} />

            <Navbar />

            <div className={styles.container}>
                <div className={styles.headerContent}>
                    <h1 className={styles.pageTitle}>Your Cart</h1>
                    <span className={styles.itemCount}>{items.length} items</span>
                </div>

                {items.length === 0 ? (
                    <div className={styles.empty}>
                        <ShoppingBag size={64} color="var(--g-300)" opacity={0.5} strokeWidth={1} />
                        <h2 className={styles.emptyTitle}>Your cart is empty</h2>
                        <p className={styles.emptyDesc}>Looks like you haven't added any products to your cart yet.</p>
                        <Link href="/collections" className={styles.shopBtn}>
                            Explore Collection <ArrowRight size={15} />
                        </Link>
                    </div>
                ) : (
                    <div className={styles.layout}>
                        {/* Cart Items */}
                        <div className={styles.itemsCol}>
                            {items.map(item => (
                                <div key={item.id} className={styles.cartItem}>
                                    <div className={styles.itemImage} style={{ background: `linear-gradient(135deg, ${item.color}60, ${item.color}10)` }}>
                                        <div className={styles.itemVial} style={{ background: `linear-gradient(180deg, ${item.vialColor1}, ${item.vialColor2})` }} />
                                        <span className={styles.itemBrand}>IMMUNE</span>
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <h3 className={styles.itemName}>{item.name}</h3>
                                        <span className={styles.itemSize}>{item.size}</span>
                                        <div className={styles.itemActions}>
                                            <div className={styles.qtyControl}>
                                                <button className={styles.qtyBtn} onClick={() => updateQty(item.id, -1)}><Minus size={14} /></button>
                                                <span className={styles.qtyNum}>{item.qty}</span>
                                                <button className={styles.qtyBtn} onClick={() => updateQty(item.id, 1)}><Plus size={14} /></button>
                                            </div>
                                            <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                                                <Trash2 size={12} /> Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.itemPrice}>
                                        ${(item.price * item.qty).toLocaleString()}
                                    </div>
                                </div>
                            ))}

                            {/* Promo code */}
                            <div className={styles.promoSection}>
                                <div className={styles.promoForm}>
                                    <input
                                        type="text"
                                        placeholder="Enter promo code"
                                        className={styles.promoInput}
                                        value={promoCode}
                                        onChange={e => setPromoCode(e.target.value)}
                                    />
                                    <button
                                        className={styles.promoBtn}
                                        onClick={() => { if (promoCode) setPromoApplied(true); }}
                                    >
                                        Apply
                                    </button>
                                </div>
                                {promoApplied && (
                                    <span className={styles.promoSuccess}>✓ 10% discount applied</span>
                                )}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className={styles.summaryCol}>
                            <div className={styles.summaryCard}>
                                <h2 className={styles.summaryTitle}>Order Summary</h2>
                                <div className={styles.summaryLines}>
                                    <div className={styles.summaryLine}>
                                        <span>Subtotal</span>
                                        <span>${subtotal}</span>
                                    </div>
                                    {promoApplied && (
                                        <div className={`${styles.summaryLine} ${styles.discountLine}`}>
                                            <span>Discount (10%)</span>
                                            <span>−${discount}</span>
                                        </div>
                                    )}
                                    <div className={styles.summaryLine}>
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                                    </div>
                                </div>
                                <div className={styles.summaryDivider} />
                                <div className={styles.summaryTotal}>
                                    <span>Total</span>
                                    <span>${total}</span>
                                </div>

                                <Link href="#" className={styles.checkoutBtn}>
                                    Checkout <ChevronRight size={16} />
                                </Link>

                                <div className={styles.trustRow}>
                                    <Shield size={12} strokeWidth={2.5} color="var(--grey-400)" />
                                    <span>Secure checkout · SSL encrypted</span>
                                </div>
                                <div className={styles.paymentIcons}>
                                    {['VISA', 'MC', 'AMEX', 'PAYPAL'].map(p => (
                                        <span key={p} className={styles.payIcon}>{p}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Guarantee */}
                            <div className={styles.guaranteeCard}>
                                <div className={styles.guaranteeIcon}>30</div>
                                <div className={styles.guaranteeContent}>
                                    <div className={styles.guaranteeTitleText}>Day Money Back</div>
                                    <div className={styles.guaranteeText}>No questions asked. Purchase with complete confidence.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}
