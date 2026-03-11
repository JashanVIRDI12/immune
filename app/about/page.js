'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';

const fadeUpText = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

export default function AboutPage() {
    return (
        <main className={styles.main}>

            <div className={styles.ambientNoise} />
            <div className={styles.ambientOrb} />

            <header className={styles.pageHeader}>
                <div className={styles.headerContent}>
                    <motion.span
                        className={styles.pageEyebrow}
                        variants={fadeUpText}
                        initial="hidden"
                        animate="show"
                    >
                        ✦ Brand Heritage
                    </motion.span>

                    <div className={styles.titleWrap}>
                        <motion.h1
                            className={styles.pageTitle}
                            variants={fadeUpText}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.1 }}
                        >
                            Our <br /> <em>Story.</em>
                        </motion.h1>
                    </div>

                    <motion.p
                        className={styles.desc}
                        variants={fadeUpText}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                    >
                        Started as OM SAI Pharma & Surgicals. Evolved into a visionary life sciences aesthetic brand redefining human potential and cellular architecture.
                    </motion.p>
                </div>
            </header>

            <div className={styles.container}>
                <motion.div
                    className={styles.storySection}
                    variants={fadeUpText}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <h2>The Genesis.</h2>
                    <p>Rooted in rigorous pharmaceutical distribution, we began as OM SAI Pharma & Surgicals. We recognized a vast void between traditional medical interventions and preventative performance optimization.</p>
                    <p>The transition to IMMUNE represents an evolution from supplying surgical necessities to engineering avant-garde therapeutic longevity molecules. We believe health is not merely the absence of disease, but the maximization of cellular vitality.</p>
                </motion.div>

                <motion.div
                    className={styles.storyImage}
                    variants={fadeUpText}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <div style={{ width: '100%', height: '100%', background: 'var(--g-400)', opacity: 0.05, borderRadius: 'inherit' }} />
                </motion.div>

                <motion.div
                    className={styles.storySection}
                    variants={fadeUpText}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: 0.2 }}
                >
                    <h2>The Mission.</h2>
                    <p>IMMUNE was born from an obsession with human peak performance and aesthetic exceptionalism. The intersection of deeply researched clinical frameworks with uncompromising premium design led us to establish a new category: high-luxury cellular support.</p>
                    <p>Our commitment remains unwavering: uncompromised ingredient sourcing, transparent pharmacological data, and bioavailable formulas that elevate human architecture from within.</p>
                </motion.div>
            </div>

        </main>
    );
}
