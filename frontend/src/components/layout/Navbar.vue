<script setup lang="ts">
import { ref } from 'vue'

// Estado menú móvil
const isMenuOpen = ref(false)

// Toggle menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">

      <!-- Logo -->
      <div class="navbar-brand">
        <span class="logo">VELOX</span>
      </div>

      <!-- Desktop Menu -->
      <ul class="navbar-menu">

        <li>
          <a href="#" class="nav-link active">
            Inicio
          </a>
        </li>

        <li>
          <a href="#" class="nav-link">
            Autos
          </a>
        </li>

        <li>
          <a href="#" class="nav-link">
            Motos
          </a>
        </li>

        <li>
          <a href="#" class="nav-link">
            Acerca de
          </a>
        </li>

      </ul>

      <!-- Actions -->
      <div class="navbar-actions">

        <!-- Usuario -->
        <button
          class="user-icon"
          aria-label="Cuenta"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>

        <!-- Hamburguesa -->
        <button
          class="menu-toggle"
          @click="toggleMenu"
        >
          ☰
        </button>

      </div>

    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">

      <div
        v-if="isMenuOpen"
        class="mobile-menu"
      >

        <a href="#" class="mobile-link">
          Inicio
        </a>

        <a href="#" class="mobile-link">
          Autos
        </a>

        <a href="#" class="mobile-link">
          Motos
        </a>

        <a href="#" class="mobile-link">
          Acerca de
        </a>

      </div>

    </transition>

  </nav>
</template>

<style scoped>

.navbar {
  position: sticky;
  top: 0;

  z-index: 100;

  backdrop-filter: blur(20px);

  background:
    rgba(18,18,18,0.75);

  border-bottom:
    1px solid rgba(255,255,255,0.08);
}

.navbar-container {
  max-width: 1400px;

  margin: 0 auto;

  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */

.logo {
  font-family: var(--heading);

  font-size: 1.6rem;

  font-weight: 800;

  letter-spacing: 4px;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-hover)
    );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Desktop menu */

.navbar-menu {
  display: flex;

  align-items: center;

  gap: 2.5rem;

  list-style: none;

  margin: 0;
  padding: 0;
}

.nav-link {
  position: relative;

  text-decoration: none;

  color: var(--text-secondary);

  font-family: var(--body);

  text-transform: uppercase;

  letter-spacing: 1px;

  font-size: .9rem;

  transition: .3s;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link.active {
  color: var(--primary);
}

.nav-link.active::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: -10px;

  width: 100%;
  height: 2px;

  background: var(--primary);
}

/* Actions */

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-icon {
  background: none;

  border: none;

  color: var(--text-secondary);

  cursor: pointer;

  transition: .3s;
}

.user-icon:hover {
  color: var(--primary);
}

.menu-toggle {
  display: none;

  background: none;

  border: none;

  color: white;

  font-size: 1.6rem;

  cursor: pointer;
}

/* Mobile menu */

.mobile-menu {
  display: flex;

  flex-direction: column;

  gap: 1rem;

  padding: 1.5rem 2rem;

  background:
    rgba(18,18,18,0.98);

  border-top:
    1px solid rgba(255,255,255,0.08);
}

.mobile-link {
  color: var(--text-secondary);

  text-decoration: none;

  text-transform: uppercase;

  transition: .3s;
}

.mobile-link:hover {
  color: var(--primary);
}

/* Animación */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all .3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */

@media (max-width: 900px) {

  .navbar-menu {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

}

@media (max-width: 768px) {

  .navbar-container {
    padding: 1rem;
  }

  .logo {
    font-size: 1.3rem;
  }

}
</style>