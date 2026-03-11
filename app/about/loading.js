export default function Loading() {
    return (
        <main style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#060a08',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
            }}>
                <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    fontWeight: 300,
                    letterSpacing: '0.35em',
                    color: '#f0ede8',
                    textTransform: 'uppercase',
                    opacity: 0.9,
                }}>IMMUNE</span>
                <div style={{
                    width: '48px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #29a86a, transparent)',
                    animation: 'loadPulse 1.5s ease-in-out infinite',
                }} />
            </div>
            <style>{`
                @keyframes loadPulse {
                    0%, 100% { opacity: 0.3; transform: scaleX(0.6); }
                    50% { opacity: 1; transform: scaleX(1.5); }
                }
            `}</style>
        </main>
    );
}
