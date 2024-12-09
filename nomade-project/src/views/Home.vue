<template>
    <div>
      <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/experience">Experience</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
        </nav>
      </header>
      <main>
        <h1>Welcome to my portfolio!</h1>
      </main>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>