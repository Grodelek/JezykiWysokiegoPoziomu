export default function Button({ text, onClick }) {
    return (
      <button onClick={onClick} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        {text}
      </button>
    );
  }
  