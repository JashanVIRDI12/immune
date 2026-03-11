'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './CTABanner.module.css';

const ticker = ['Immunity', 'Longevity', 'Performance', 'Science', 'Precision', 'Bioavailability'];

export default function CTABanner() {
    return (
        <section className={styles.section}>
            {/* Orbs */}
            <div className={styles.orb1} />
            <div className={styles.orb2} />

            <div className={styles.container}>
                <motion.div
                    className={styles.left}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    viewport={{ once: true }}
                >
                    <div className={styles.overline}>Limited Edition</div>
                    <h2 className={styles.title}>
                        Your Biology Is<br />
                        <em>Your Responsibility</em>
                    </h2>
                </motion.div>

                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                    viewport={{ once: true }}
                >
                    <p className={styles.desc}>
                        Join over 50,000 individuals who have chosen to take control. Start your precision wellness protocol today and experience the Immune difference within 30 days — or your money back.
                    </p>
                    <div className={styles.ctas}>
                        <Link href="/collections" className="btn btn-primary">
                            Shop The Collection <ArrowRight size={14} />
                        </Link>
                        <Link href="/science" className="btn btn-glass">
                            Our Science
                        </Link>
                    </div>
                    <p className={styles.guarantee}>
                        30-Day Satisfaction Guarantee &nbsp;·&nbsp; Free Shipping Over $150 &nbsp;·&nbsp; Third-Party Tested
                    </p>
                </motion.div>
            </div>

            {/* Green accent marquee */}
            <div className={styles.accentBand}>
                <div className={styles.marqueeTrack}>
                    {Array.from({ length: 6 }).map((_, gi) =>
                        ticker.map(c => (
                            <span key={`${gi}-${c}`} className={styles.marqueeItem}>
                                {c} <span className={styles.marqueeDot}>✦</span>
                            </span>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
