<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="tier tier-1">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="tier tier-2">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </div>
      <div class="tier tier-3">
        <!-- Vous pouvez ajouter d'autres éléments ici si nécessaire -->
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
@keyframes gradientBackground {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(270deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
  background-size: 400% 400%;
  animation: gradientBackground 15s ease infinite;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px; /* Augmentez la largeur de la barre de navigation */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: rgba(255, 255, 255, 0.2); /* Couleur de fond avec opacité */
  backdrop-filter: blur(10px); /* Effet de flou */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3); /* Bordure subtile */
  font-family: 'Poppins', sans-serif;
}

nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
}

.tier {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.tier-2 {
  justify-content: space-around;
}

nav a {
  position: relative;
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  text-align: center;
  width: 100%;
  font-size: 1.2rem; /* Augmentez la taille de la police */
  overflow: hidden; /* Assurez-vous que le contenu reste à l'intérieur du bouton */
  transition: color 0.3s; /* Ajoutez une transition pour un effet plus fluide */
}

nav a::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle, rgba(66, 185, 131, 0.5), transparent);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s;
  z-index: -1;
}

nav a:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

nav a:hover {
  color: #fff; /* Changez la couleur du texte au survol */
}

nav a.router-link-active {
  font-weight: bold;
  background-color: #42b983; /* Changez la couleur de fond active selon vos besoins */
  color: #fff;
  border-radius: 4px;
}

main {
  margin-left: 270px; /* Ajustez cette valeur selon la nouvelle largeur de votre header */
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem; /* Augmentez la taille de la police */
}
</style>