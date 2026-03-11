'use client';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import styles from './page.module.css';
import Image from 'next/image';

const fadeUpText = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

export default function SciencePage() {
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
                        ✦ Clinical Formulations
                    </motion.span>

                    <div className={styles.titleWrap}>
                        <motion.h1
                            className={styles.pageTitle}
                            variants={fadeUpText}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.1 }}
                        >
                            The Science of <br /> <em>Longevity.</em>
                        </motion.h1>
                    </div>

                    <motion.p
                        className={styles.desc}
                        variants={fadeUpText}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                    >
                        Our research goes beyond conventional supplementation. We engineer advanced cellular therapeutics designed to optimize human performance and expand healthspan radically.
                    </motion.p>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.contentRow}>
                    <motion.div
                        className={styles.imageWrap}
                        variants={fadeUpText}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Placeholder for real science imagery */}
                        <div style={{ width: '100%', height: '100%', background: 'var(--g-200)', opacity: 0.1 }} />
                    </motion.div>

                    <motion.div
                        className={styles.textContent}
                        variants={fadeUpText}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Precision Molecule Delivery.</h2>
                        <p>Traditional supplements suffer from poor bioavailability, meaning your body only absorbs a fraction of what you consume. Our patented liposomal and nano-emulsion technologies encapsulate active compounds in lipid bilayers.</p>
                        <p>This mimics the cell's natural membrane architecture, allowing molecules to bypass digestive degradation and deliver therapeutic doses directly to cellular targets. The result is rapid absorption, extended half-life, and profound efficacy.</p>
                    </motion.div>
                </div>

                <div className={`${styles.contentRow} ${styles.reverse}`}>
                    <motion.div
                        className={styles.imageWrap}
                        variants={fadeUpText}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Placeholder for real science imagery */}
                        <div style={{ width: '100%', height: '100%', background: 'var(--g-400)', opacity: 0.1 }} />
                    </motion.div>

                    <motion.div
                        className={styles.textContent}
                        variants={fadeUpText}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Epigenetic Modulation.</h2>
                        <p>Ageing is predominantly an epigenetic phenomenon – a loss of the genetic instruction manual over time. Our formulations are specifically designed to interact with your epigenome.</p>
                        <p>By activating crucial sirtuin pathways and naturally boosting NAD+ levels, we help restore youthful transcriptional states. It is not just about extending lifespan; it is about extending healthspan—the period of life spent in peak physiological health.</p>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
