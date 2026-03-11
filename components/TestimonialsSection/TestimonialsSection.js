'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TestimonialsSection.module.css';

const testimonials = [
    {
        id: 1, initials: 'EM', name: 'Dr. Elena Marchetti', role: 'Functional Medicine Physician',
        location: 'Milan, Italy', rating: 5, product: 'Longevity Stack Pro',
        text: 'I recommend Immune\'s Longevity Stack to my most discerning patients. The bioavailability is measurable — we track markers and the results are consistently exceptional. This is not wellness theater, this is real science.',
    },
    {
        id: 2, initials: 'JW', name: 'James Whitfield', role: 'Olympic Athlete, Triathlon',
        location: 'Sydney, Australia', rating: 5, product: 'Athletic Edge Formula',
        text: 'My VO2 max improved by 4 points in 8 weeks. My recovery window shortened dramatically. The Athletic Edge Formula is the only supplement where I could feel a quantifiable difference from day one.',
    },
    {
        id: 3, initials: 'SC', name: 'Sophia Chen-Nakamura', role: 'Tech Executive',
        location: 'San Francisco, USA', rating: 5, product: 'Immunity Core Complex',
        text: 'I\'ve tried every premium supplement brand at every price point. Immune is categorically different — not just in results but in the philosophy. They treat the human body with the same respect as engineering a precision instrument.',
    },
];

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const t = testimonials[active];

    return (
        <section className={styles.section}>
            {/* Ambient orb */}
            <div className={styles.orb} />

            <motion.div
                className={styles.overlineRow}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className={styles.line} />
                <span className={styles.overline}>Client Voices</span>
                <div className={styles.line} />
            </motion.div>

            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
            >
                Transformations That<br /><em>Speak for Themselves</em>
            </motion.h2>

            <div className={styles.layout}>
                {/* Quote area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={t.id}
                        className={styles.quoteArea}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className={styles.quoteMarks}>"</div>
                        <blockquote className={styles.quoteText}>{t.text}</blockquote>
                        <div className={styles.quoteFooter}>
                            <div className={styles.quoteAvatar}>{t.initials}</div>
                            <div>
                                <div className={styles.quoteName}>{t.name}</div>
                                <div className={styles.quoteRole}>{t.role} — {t.location}</div>
                            </div>
                            <div className={styles.quoteProduct}>Re: {t.product}</div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Selector */}
                <div className={styles.selector}>
                    {testimonials.map((item, i) => (
                        <button
                            key={item.id}
                            className={`${styles.selectorBtn} ${active === i ? styles.selectorActive : ''}`}
                            onClick={() => setActive(i)}
                        >
                            <div className={styles.selectorAvatar}>{item.initials}</div>
                            <div>
                                <div className={styles.selectorName}>{item.name}</div>
                                <div className={styles.selectorRole}>{item.role}</div>
                            </div>
                            {active === i && (
                                <motion.div className={styles.activeIndicator} layoutId="activeIndicator" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
