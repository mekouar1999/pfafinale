import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Ici, vous pouvez implémenter la logique de connexion avec les données de connexion
    // par exemple, une requête à votre API
    // Pour cet exemple, je vais simplement vérifier si les champs sont remplis
    if (username && password) {
      setLoggedIn(true);
      alert('Connecté avec succès !');
    } else {
      alert('Veuillez remplir tous les champs !');
    }
  };

  const handleLogout = () => {
    // Vous pouvez implémenter la logique de déconnexion ici
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Bienvenue, {username} !</h2>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <div>
          <h2>Connectez-vous</h2>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Connexion</button>
        </div>
      )}
    </div>
  );
};

export default Login;
