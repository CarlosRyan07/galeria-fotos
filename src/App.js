import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Estados para armazenar as imagens e a palavra-chave da busca
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para controlar o tema

  // A chave da API Pexels (substitua pela sua chave)
  const apiKey = process.env.REACT_APP_PEXELS_API_KEY; // Substitua com sua chave da Pexels

  // Função para buscar fotos do Pexels, memorizada com useCallback
  const fetchPhotos = useCallback(async (query) => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        headers: {
          Authorization: apiKey,
        },
        params: {
          query: query,
          per_page: 10, // Quantidade de fotos que você quer mostrar
        },
      });
      setPhotos(response.data.photos); // Atualiza o estado com as fotos
    } catch (error) {
      console.error('Erro ao buscar as fotos:', error);
    }
    setLoading(false);
  }, [apiKey]); // Dependência de apiKey

  // Executar a busca sempre que a palavra-chave mudar
  useEffect(() => {
    if (searchTerm) {
      fetchPhotos(searchTerm);
    } else {
      setPhotos([]);
    }
  }, [searchTerm, fetchPhotos]); // Adicionando 'fetchPhotos' nas dependências

  // Alternar o tema (escuro/claro)
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Atualizar a classe do body
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

      {/* Barra de Pesquisa e Botão de Alternância de Tema */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquise por fotos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza a palavra-chave
        />
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Exibição das Fotos ou Imagem de Busca Vazia */}
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

      {/* Rodapé */}
      <footer>
        <p>© 2024 Galeria de Fotos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
