'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Award, Leaf, Globe } from 'lucide-react';
import styles from './ScienceSection.module.css';

const pillars = [
    { icon: Microscope, title: 'Clinical Precision', desc: 'Every formula backed by peer-reviewed research and validated in clinical settings for measurable, quantifiable results.' },
    { icon: Award, title: 'Pharmaceutical Grade', desc: 'Manufactured in FDA-registered, GMP-certified facilities with strict pharmaceutical quality standards.' },
    { icon: Leaf, title: 'Bioavailability First', desc: 'Liposomal delivery, chelated minerals, and active forms only. Maximum absorption engineered in.' },
    { icon: Globe, title: 'Transparent Sourcing', desc: 'Full traceability from origin to your cabinet. Every batch has a certificate of analysis available.' },
];

const stats = [
    { val: '47+', label: 'Research Studies' },
    { val: '8', label: 'Patent-Pending Formulas' },
    { val: '100%', label: 'Ingredient Traceability' },
    { val: '12+', label: 'Years of Research' },
];

export default function ScienceSection() {
    return (
        <>
            {/* Dark editorial banner */}
            <section className={styles.darkBanner}>
                <div className={styles.orb} />
                <div className={styles.bannerInner}>
                    <motion.div
                        className={styles.bannerLeft}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                    >
                        <p className={styles.bannerOverline}>Science & Research</p>
                        <h2 className={styles.bannerTitle}>
                            Where Luxury Meets<br />
                            <em>Cellular Science</em>
                        </h2>
                    </motion.div>
                    <motion.div
                        className={styles.bannerRight}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                    >
                        <p className={styles.bannerDesc}>
                            We partner with leading research institutions and molecular biologists to craft formulas that operate at a fundamentally different level. Not supplements — biological upgrades.
                        </p>
                        <Link href="/science" className="btn btn-glass">
                            Our Research <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                </div>

                {/* Stat band inside the dark section */}
                <div className={styles.statBand}>
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            className={styles.statItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.statVal}>{s.val}</div>
                            <div className={styles.statLbl}>{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Glass pillars section */}
            <section className={styles.pillarsSection}>
                <div className={styles.pillarsContainer}>
                    {pillars.map(({ icon: Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            className={styles.pillar}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4, transition: { duration: 0.25 } }}
                        >
                            <div className={styles.pillarIconWrap}>
                                <Icon size={22} strokeWidth={1.4} color="var(--g-200)" />
                            </div>
                            <h3 className={styles.pillarTitle}>{title}</h3>
                            <p className={styles.pillarDesc}>{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}
