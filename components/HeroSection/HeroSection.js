'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import styles from './HeroSection.module.css';

const fadeUp = { hidden: { opacity: 0, y: 32 }, show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: [0.76, 0, 0.24, 1] } }) };
const fadeIn = { hidden: { opacity: 0 }, show: (d = 0) => ({ opacity: 1, transition: { duration: 1.2, delay: d, ease: 'easeOut' } }) };

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yRight = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scaleOrb = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className={styles.hero}>
            <div className={styles.grain} />
            <motion.div className={styles.ambientOrb} style={{ scale: scaleOrb, opacity }} />

            <div className={styles.container}>
                {/* Left Side: Content */}
                <motion.div className={styles.leftCol} style={{ y: yLeft, opacity }}>
                    <motion.div
                        className={styles.pills}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.1}
                    >
                        <span className={styles.pill}>Latest Innovation</span>
                        <span className={styles.pillGhost}>Immuno-Regeneration</span>
                    </motion.div>

                    <div className={styles.titleWrap}>
                        <motion.h1
                            className={styles.title}
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            custom={0.2}
                        >
                            Redefine
                        </motion.h1>
                        <div className={styles.lineClip}>
                            <motion.h1
                                className={styles.title}
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                custom={0.3}
                            >
                                Your <em className={styles.italic}>Limits.</em>
                            </motion.h1>
                        </div>
                    </div>

                    <motion.p
                        className={styles.desc}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.4}
                    >
                        Pioneering the future of human performance. Ultra-premium bio-optimization formulated at the intersection of longevity science and luxury wellness.
                    </motion.p>

                    <motion.div
                        className={styles.ctaGroup}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.5}
                    >
                        <Link href="/collections" className={styles.primaryCta}>
                            Explore Collection <ArrowRight size={14} />
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.metrics}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.6}
                    >
                        <div className={styles.metric}>
                            <span className={styles.metricVal}>94%</span>
                            <span className={styles.metricLabel}>Absorption</span>
                        </div>
                        <div className={styles.metricDivider} />
                        <div className={styles.metric}>
                            <span className={styles.metricVal}>47+</span>
                            <span className={styles.metricLabel}>Clinical Studies</span>
                        </div>
                        <div className={styles.metricDivider} />
                        <div className={styles.metric}>
                            <span className={styles.metricVal}>12 Yrs</span>
                            <span className={styles.metricLabel}>R&D Excellence</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Image/Card */}
                <motion.div className={styles.rightCol} style={{ y: yRight, opacity }}>
                    <div className={styles.imageBackglow} />

                    <motion.div
                        className={styles.imageContainer}
                        variants={fadeIn}
                        initial="hidden"
                        animate="show"
                        custom={0.3}
                    >
                        {/* Main Image Frame */}
                        <motion.div
                            className={styles.imageWrap}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Abstract inner ring */}
                            <div className={styles.innerRing} />

                            <Image
                                src="/product.jpeg"
                                alt="Immunity Core Complex"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />

                            <div className={styles.imageOverlay} />

                            {/* Particle elements */}
                            <motion.div
                                className={styles.particle1}
                                animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className={styles.particle2}
                                animate={{ y: [0, 30, 0], opacity: [0.2, 0.6, 0.2] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </motion.div>

                        {/* Floating Badges */}
                        <motion.div
                            className={styles.floatingGlass}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <span className={styles.glassLabel}>Purity</span>
                            <span className={styles.glassVal}>10x</span>
                        </motion.div>

                        <motion.div
                            className={styles.floatingGlassTop}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <span className={styles.glassIcon}>✧</span>
                            <span className={styles.glassText}>Clinical Grade</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Marquee */}
            <motion.div
                className={styles.marqueeContainer}
                variants={fadeIn}
                initial="hidden"
                animate="show"
                custom={0.6}
            >
                <div className={styles.marquee}>
                    <div className={styles.marqueeTrack}>
                        {Array.from({ length: 4 }).map((_, gi) => (
                            <span key={`group-${gi}`} className={styles.marqueeGroup}>
                                <span className={styles.marqueeItem}>FDA Registered Facility</span>
                                <span className={styles.marqueeDot}>✦</span>
                                <span className={styles.marqueeItem}>GMP Certified</span>
                                <span className={styles.marqueeDot}>✦</span>
                                <span className={styles.marqueeItem}>Third-Party Tested</span>
                                <span className={styles.marqueeDot}>✦</span>
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
