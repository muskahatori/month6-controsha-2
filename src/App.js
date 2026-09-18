import { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState(null); 

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  if (!posts) return <p style={{ textAlign: 'center', marginTop: '40px' }}>Загрузка...</p>;

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Посты ({posts.length})</h1>

      <div style={{ display: 'grid', gap: '16px' }}>
        {posts.map(({ id, title, body }) => (
          <div
            key={id}
            style={{
              padding: '16px 20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
          >
            <h3 style={{ margin: '0 0 8px', textTransform: 'capitalize' }}>{title}</h3>
            <p style={{ margin: 0, color: '#555', lineHeight: 1.5 }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
