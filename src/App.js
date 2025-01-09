import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const apiKey = process.env.REACT_APP_PEXELS_API_KEY;

  // Função memoizada com useCallback
  const fetchPhotos = useCallback(async (query) => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        headers: {
          Authorization: apiKey,
        },
        params: {
          query: query,
          per_page: 10,
        },
      });
      setPhotos(response.data.photos);
    } catch (error) {
      console.error('Erro ao buscar as fotos:', error);
    }
    setLoading(false);
  }, [apiKey]);  // Dependência de apiKey, para que a função seja atualizada caso a chave mude

  useEffect(() => {
    if (searchTerm) {
      fetchPhotos(searchTerm);
    } else {
      setPhotos([]);
    }
  }, [searchTerm, fetchPhotos]);  // Agora fetchPhotos está memoizado e pode ser usado sem problema

  useEffect(() => {
    document.title = "Galeria de Fotos";
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <header>
        <h1>Galeria de Fotos</h1>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquise por fotos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>

      <div className="photo-grid">
        {loading ? (
          <p className="loading">Carregando...</p>
        ) : photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <img src={photo.src.medium} alt={photo.alt} />
              <p>{photo.alt}</p>
            </div>
          ))
        ) : searchTerm ? (
          <p className="no-photos">Nenhuma foto encontrada.</p>
        ) : (
          <p className="no-search-message">Digite algo para começar a buscar!</p>
        )}
      </div>

      <footer>
        <p>© 2024 Galeria de Fotos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
