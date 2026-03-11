'use client';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const fadeUpText = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

const fadeUpCard = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    })
};

const articles = [
    { id: 1, cat: 'Science', title: 'The Role of NAD+ in Cellular Senescence', excerpt: 'Understanding the mechanistic pathways behind cellular aging and how precursor supplementation alters the biological clock.' },
    { id: 2, cat: 'Lifestyle', title: 'Optimizing Circadian Rhythms for Deep Recovery', excerpt: 'How to align your light exposure and sleep architecture to maximize the efficacy of your formulation stack.' },
    { id: 3, cat: 'Ingredients', title: 'Liposomal Vitamin C vs Ascorbic Acid', excerpt: 'A deep dive into clinical bioavailability metrics: why delivery mechanism matters more than raw dosage.' },
    { id: 4, cat: 'Research', title: 'Mitochondrial Density in Elite Athletes', excerpt: 'Examining the cellular adaptations that allow sustained high performance output, and how we replicate them.' },
    { id: 5, cat: 'Editorial', title: 'The Future of Preventative Healthcare', excerpt: 'Moving from reactive symptom management to proactive baseline elevation. The paradigm shift is here.' },
    { id: 6, cat: 'Science', title: 'Neuroplasticity and Nootropic Synergies', excerpt: 'How precise combinations of adaptogens and cognitive enhancers remodel neural networks over time.' },
];

export default function JournalPage() {
    return (
        <main className={styles.main}>
            <Navbar />

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
                        ✦ Editorial & Research
                    </motion.span>

                    <div className={styles.titleWrap}>
                        <motion.h1
                            className={styles.pageTitle}
                            variants={fadeUpText}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.1 }}
                        >
                            The <br /> <em>Journal.</em>
                        </motion.h1>
                    </div>

                    <motion.p
                        className={styles.desc}
                        variants={fadeUpText}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                    >
                        Insights, clinical deep dives, and perspectives on the intersection of human performance, longevity science, and modern aesthetics.
                    </motion.p>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {articles.map((article, i) => (
                        <motion.div
                            key={article.id}
                            className={styles.articleCard}
                            custom={i}
                            variants={fadeUpCard}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            <div className={styles.cardImage}>
                                {/* Image placeholder */}
                                <div style={{ width: '100%', height: '100%', background: 'var(--dark-0)', borderBottom: '1px solid rgba(255,255,255,0.05)' }} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.cardMeta}>{article.cat}</span>
                                <h3 className={styles.cardTitle}>{article.title}</h3>
                                <p className={styles.cardExcerpt}>{article.excerpt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
