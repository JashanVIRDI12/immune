'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './EditorialSection.module.css';

export default function EditorialSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.imageBlock}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className={styles.imageInner}>
                        <Image
                            src="/pexels-pixabay-416778.jpg"
                            alt="Editorial Science"
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className={styles.contentBlock}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <span className={styles.overline}>Cellular Rejuvenation</span>
                    <h2 className={styles.title}>
                        Rewriting the<br />
                        <em>Rules of Aging.</em>
                    </h2>
                    <p className={styles.desc}>
                        Integrating cutting-edge biotechnology with pristine botanical extracts.
                        Our protocols are engineered to support the body at a foundational level,
                        promoting cellular resilience and unbound vitality.
                    </p>
                    <Link href="/about" className={styles.btn}>
                        Our Philosophy <ArrowRight size={14} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
