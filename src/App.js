import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Estados para armazenar as imagens e a palavra-chave da busca
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // A chave da API Pexels (substitua pela sua chave)
  const apiKey = 'xbR0ZuzLjGxjwZkI10qo2bWTrWgs3JMOm9slKpCvOcEcoxIiVZ6cHazF'; // Substitua com sua chave da Pexels

  // Função para buscar fotos do Pexels
  const fetchPhotos = async (query) => {
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
  };

  // Executar a busca sempre que a palavra-chave mudar
  useEffect(() => {
    if (searchTerm) {
      fetchPhotos(searchTerm);
    } else {
      setPhotos([]);
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <header>
        <h1>Galeria de Fotos</h1>
      </header>

      {/* Barra de Pesquisa */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquise por fotos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza a palavra-chave
        />
      </div>

      {/* Exibição das Fotos */}
      <div className="photo-grid">
        {loading ? (
          <p className="loading">Carregando...</p> // Centraliza a mensagem "Carregando..."
        ) : photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <img src={photo.src.medium} alt={photo.alt} />
              <p>{photo.alt}</p>
            </div>
          ))
        ) : searchTerm ? (
          <p className="no-photos">Nenhuma foto encontrada.</p> // Exibe a mensagem caso não encontre fotos
        ) : null}
      </div>

      {/* Rodapé */}
      <footer>
        <p>© 2025 Galeria de Fotos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
