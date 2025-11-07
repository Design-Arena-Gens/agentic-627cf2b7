export default function Page() {
  const query = encodeURIComponent('taarak mehta ka ooltah chashmah');
  const origin = encodeURIComponent('https://agentic-627cf2b7.vercel.app');
  const src = `https://www.youtube.com/embed?listType=search&list=${query}&autoplay=1&mute=1&rel=0&playsinline=1&modestbranding=1&controls=1&origin=${origin}`;

  return (
    <main style={{ position: 'fixed', inset: 0 }}>
      <iframe
        title="TMKOC YouTube Player"
        src={src}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
      <a
        href="https://www.youtube.com/results?search_query=taarak+mehta+ka+ooltah+chashmah"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          color: '#fff',
          textDecoration: 'none',
          fontFamily: 'system-ui, Arial, sans-serif',
          background: 'rgba(0,0,0,0.5)',
          padding: '6px 10px',
          borderRadius: 6,
        }}
      >
        Open on YouTube ?
      </a>
    </main>
  );
}
