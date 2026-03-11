import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = {
    Shop: ['All Products', 'Immunity Core', 'Longevity Stack', 'Neuro Performance', 'Athletic Edge', 'Bundles'],
    Company: ['Our Story', 'Science', 'Sustainability', 'Careers', 'Press'],
    Support: ['FAQ', 'Shipping & Returns', 'Contact Us', 'Track Order', 'Wholesale'],
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.topInner}>
                    {/* Brand column */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logoWrap}>
                            <span className={styles.logoText}>IMMUNE</span>
                        </Link>
                        <p className={styles.tagline}>
                            Engineered for those who refuse to settle. Science-backed wellness for the extraordinary.
                        </p>
                        <div className={styles.socials}>
                            {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className={styles.socialBtn} aria-label="Social">
                                    <Icon size={14} strokeWidth={1.7} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link groups */}
                    {Object.entries(footerLinks).map(([category, items]) => (
                        <div key={category} className={styles.linkGroup}>
                            <h4 className={styles.linkGroupTitle}>{category}</h4>
                            <ul className={styles.linkList}>
                                {items.map(item => (
                                    <li key={item}>
                                        <Link href="#" className={styles.footLink}>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div className={styles.newsletter}>
                        <h3 className={styles.newsletterTitle}>Join the Inner Circle</h3>
                        <p className={styles.newsletterDesc}>Early access, science drops, and curated wellness intelligence.</p>
                        <div className={styles.newsletterForm}>
                            <input type="email" placeholder="Your email address" className={styles.emailInput} />
                            <button className={styles.submitBtn}><ArrowRight size={15} /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom strip */}
            <div className={styles.bottom}>
                <div className={styles.bottomInner}>
                    <p className={styles.copy}>© {new Date().getFullYear()} Immune Labs Inc. All rights reserved.</p>
                    <div className={styles.bottomLinks}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
                            <Link key={l} href="#" className={styles.bottomLink}>{l}</Link>
                        ))}
                    </div>
                    <div className={styles.certBadges}>
                        <span className={styles.cert}>GMP Certified</span>
                        <span className={styles.cert}>Third-Party Tested</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
