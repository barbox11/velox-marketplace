<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SearchBar from './SearchBar.vue'

// Animación GSAP
import { heroEntrance } from '../../animations/hero'

// Contenido Hero
const heroTitle = ref('CONDUCE LO EXTRAORDINARIO')

const heroSubtitle = ref(
  'Explora una colección exclusiva de automóviles y motocicletas de alto rendimiento seleccionados para quienes buscan algo extraordinario.'
)

// Referencias para GSAP
const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const searchRef = ref<HTMLElement | null>(null)

// Ejecutar animaciones al montar
onMounted(() => {
  if (
    titleRef.value &&
    subtitleRef.value &&
    searchRef.value
  ) {
    heroEntrance(
      titleRef.value,
      subtitleRef.value,
      searchRef.value
    )
  }
})
</script>

<template>
  <section class="hero">

    <!-- Imagen principal -->
    <div class="hero-image"></div>

    <!-- Efectos visuales -->
    <div class="hero-bg">
      <div class="glow glow-left"></div>
      <div class="glow glow-right"></div>
      <div class="stripe-pattern"></div>
    </div>

    <!-- Overlay -->
    <div class="hero-overlay"></div>

    <!-- Contenido -->
    <div class="hero-content">

      <div class="hero-text">

        <!-- Título -->
        <h1
          ref="titleRef"
          class="hero-title"
        >
          {{ heroTitle }}
        </h1>

        <!-- Subtítulo -->
        <p
          ref="subtitleRef"
          class="hero-subtitle"
        >
          {{ heroSubtitle }}
        </p>

      </div>

      <!-- Buscador -->
      <div ref="searchRef">
        <SearchBar />
      </div>

    </div>

  </section>
</template>

<style scoped>

.hero {
  position: relative;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  overflow: hidden;

  color: white;
}

/* Imagen fondo */
.hero-image {
  position: absolute;
  inset: 0;

  background-image: url('../../assets/imagenes/auto-home-convertido-a-grande.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  will-change: transform;
}

/* Overlay cinematográfico */
.hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      180deg,
      rgba(10,10,10,0.25) 0%,
      rgba(10,10,10,0.55) 50%,
      rgba(10,10,10,0.85) 100%
    );

  z-index: 2;
}

/* Contenedor efectos */
.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
}

/* Líneas decorativas */
.stripe-pattern {
  position: absolute;
  inset: 0;

  background:
    repeating-linear-gradient(
      0deg,
      rgba(255,255,255,0.01) 0px,
      rgba(255,255,255,0.01) 2px,
      transparent 2px,
      transparent 4px
    );

  pointer-events: none;
}

/* Glow base */
.glow {
  position: absolute;
  border-radius: 50%;

  filter: blur(140px);

  opacity: 0.12;

  mix-blend-mode: screen;
}

/* Glow izquierda */
.glow-left {
  width: 800px;
  height: 800px;

  top: 10%;
  left: -300px;

  background:
    radial-gradient(
      circle,
      var(--primary-glow) 0%,
      var(--primary) 40%,
      transparent 70%
    );

  animation: glow-pulse-left 8s ease-in-out infinite;
}

/* Glow derecha */
.glow-right {
  width: 800px;
  height: 800px;

  bottom: 5%;
  right: -300px;

  background:
    radial-gradient(
      circle,
      var(--primary-glow) 0%,
      var(--primary) 40%,
      transparent 70%
    );

  animation: glow-pulse-right 8s ease-in-out infinite;
}

/* Animación glow izquierda */
@keyframes glow-pulse-left {

  0% {
    opacity: .10;
    transform: translateX(0) scale(.95);
  }

  50% {
    opacity: .18;
    transform: translateX(40px) scale(1.08);
  }

  100% {
    opacity: .10;
    transform: translateX(0) scale(.95);
  }

}

/* Animación glow derecha */
@keyframes glow-pulse-right {

  0% {
    opacity: .10;
    transform: translateX(0) scale(.95);
  }

  50% {
    opacity: .18;
    transform: translateX(-40px) scale(1.08);
  }

  100% {
    opacity: .10;
    transform: translateX(0) scale(.95);
  }

}

/* Contenido principal */
.hero-content {
  position: relative;
  z-index: 10;

  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;
}

/* Texto */
.hero-text {
  max-width: 700px;
  text-align: center;
}

/* Título */
.hero-title {
  font-family: var(--heading);

  font-size: clamp(2.5rem, 8vw, 5rem);

  font-weight: 800;

  line-height: 1.05;

  letter-spacing: -0.03em;

  margin-bottom: 1.5rem;

  text-shadow:
    0 0 40px rgba(225, 6, 0, 0.2);
}

/* Subtítulo */
.hero-subtitle {
  font-family: var(--body);

  font-size: 1.125rem;

  line-height: 1.8;

  color: var(--text-secondary);

  max-width: 650px;

  margin: 0 auto;
}

/* Tablet */
@media (max-width: 1024px) {

  .hero-subtitle {
    font-size: 1rem;
  }

}

/* Mobile */
@media (max-width: 768px) {

  .hero {
    padding: 1.5rem;
  }

  .hero-content {
    gap: 2rem;
  }

  .hero-title {
    font-size: clamp(2rem, 10vw, 3.5rem);
  }

  .hero-subtitle {
    font-size: .95rem;
    line-height: 1.7;
  }

  .glow-left,
  .glow-right {
    width: 500px;
    height: 500px;
  }

}
</style>