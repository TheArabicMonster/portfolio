<template>
  <div class="projects-container">
    <h1 class="title">Projects</h1>
    <p class="description">Here you can showcase your projects...</p>
    
    <div class="projects-timeline-container">
      <div class="projects-wrapper" ref="projectsWrapper">
        <div class="projects">
          <div class="project" 
               v-for="(project, index) in projects" 
               :key="index" 
               data-aos="fade-left"
               :data-aos-delay="index * 300"
               :data-aos-duration="800"
               data-aos-easing="ease-out">
            <div class="project-card" @click="openProject(project)">
              <img :src="project.image" alt="Project screenshot" class="project-image" />
              <div class="project-content">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
              </div>
            </div>
            <div class="connector"></div>
          </div>
        </div>
        <div class="timeline" data-aos="fade-in" data-aos-duration="400"></div>
      </div>
    </div>
    <ProjectModal 
      :show="selectedProject !== null"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectModal from '../components/ProjectModal.vue';

const projects = [
  {
    image: 'path/to/image1.jpg',
    title: 'Project 1',
    description: 'Description of project 1.'
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Project 2',
    description: 'Description of project 2.'
  },
  {
    image: 'path/to/image3.jpg',
    title: 'Project 3',
    description: 'Description of project 3.'
  },
  {
    image: 'path/to/image4.jpg',
    title: 'Project 4',
    description: 'Description of project 4.'
  },
  {
    image: 'path/to/image5.jpg',
    title: 'Project 5',
    description: 'Description of project 5.'
  },
  {
    image: 'path/to/image6.jpg',
    title: 'Project 6',
    description: 'Description of project 6.'
  }
  // Ajoutez plus de projets ici
];

const selectedProject = ref(null);

const openProject = (project) => {
  selectedProject.value = project;
};

const projectsWrapper = ref(null);

const handleScroll = (event) => {
  if (projectsWrapper.value) {
    event.preventDefault(); // Empêcher le défilement vertical de la page
    projectsWrapper.value.scrollLeft += event.deltaY;
  }
};

onMounted(() => {
  AOS.init({
    offset: 0,
    delay: 0,
    duration: 800,
    easing: 'ease-out',
    once: false,
    mirror: false,
    anchorPlacement: 'top-center'
  });

  if (projectsWrapper.value) {
    projectsWrapper.value.addEventListener('wheel', handleScroll, { passive: false });
  }
});
</script>

<style scoped>
.projects-container {
  padding: 2rem;
  min-height: 100vh;
  position: relative;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.description {
  margin-bottom: 4rem;
}

.projects-timeline-container {
  position: relative;
  padding-bottom: 100px;
}

.projects-wrapper {
  position: relative;
  overflow-x: auto; /* Permettre le défilement horizontal */
  overflow-y: hidden; /* Masquer la barre de défilement verticale */
}

.projects {
  display: flex;
  gap: 6rem; /* Augmenter l'espace entre les projets */
  padding: 1rem;
  margin-bottom: 4rem;
  scroll-snap-type: x mandatory;
}

.project {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
}

.project-card {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.project-content {
  padding: 1rem;
}

.timeline {
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  height: 4px;
  background: #333;
}

.connector {
  width: 2px;
  height: 50px;
  background: #333;
  margin-top: 1rem;
}

/* Customiser la scrollbar */
.projects::-webkit-scrollbar {
  height: 8px;
}

.projects::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.projects::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.projects::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>