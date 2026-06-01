<script setup lang="ts">
import { ref } from 'vue'

const searchForm = ref({
  search: '',
  vehicleType: 'Autos',
  priceRange: '$20k - $50k',
  year: '2023 - 2025'
})

const handleSearch = () => {
  console.log('Search:', searchForm.value)
}
</script>

    <template>
  <div class="search-container">
    <form class="search-form" @submit.prevent="handleSearch">
      <div class="search-group">
        <label for="search" class="search-label">BUSCAR</label>
        <input 
          id="search"
          v-model="searchForm.search"
          type="text" 
          placeholder="Marca o Modelo"
          class="search-input"
        />
      </div>

      <div class="search-group">
        <label for="vehicleType" class="search-label">TIPO DE VEHÍCULO</label>
        <select 
          id="vehicleType"
          v-model="searchForm.vehicleType"
          class="search-select"
        >
          <option>Autos</option>
          <option>Motocicletas</option>
          <option>SUV</option>
          <option>Camiones</option>
        </select>
      </div>

      <div class="search-group">
        <label for="priceRange" class="search-label">RANGO DE PRECIO</label>
        <select 
          id="priceRange"
          v-model="searchForm.priceRange"
          class="search-select"
        >
          <option>$20k - $50k</option>
          <option>$50k - $100k</option>
          <option>$100k - $200k</option>
          <option>$200k+</option>
        </select>
      </div>

      <div class="search-group">
        <label for="year" class="search-label">AÑO</label>
        <select 
          id="year"
          v-model="searchForm.year"
          class="search-select"
        >
          <option>2023 - 2025</option>
          <option>2020 - 2023</option>
          <option>2015 - 2020</option>
          <option>2010 - 2015</option>
        </select>
      </div>

      <button type="submit" class="search-button" aria-label="Buscar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </button>
    </form>
  </div>
</template>

<style scoped>
.search-container {
  width: 100%;
  max-width: 1100px;
}

.search-form {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;
  animation: fade-in-up 0.8s ease-out 0.4s both;
}

.search-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 150px;
}

.search-label {
  font-family: var(--body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: var(--primary);
  text-transform: uppercase;
}

.search-input,
.search-select {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-family: var(--body);
  font-weight: 400;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: var(--text-muted);
}

.search-input:focus,
.search-select:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(225, 6, 0, 0.5);
  box-shadow: 0 0 20px rgba(225, 6, 0, 0.2);
}

.search-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23D1D5DB' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.5rem;
}

.search-button {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(225, 6, 0, 0.3);
}

.search-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(225, 6, 0, 0.4);
}

.search-button:active {
  transform: translateY(0);
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .search-form {
    padding: 1rem;
    gap: 0.75rem;
  }

  .search-group {
    min-width: 120px;
  }

  .search-input,
  .search-select {
    font-size: 0.85rem;
    padding: 0.6rem 0.75rem;
  }

  .search-button {
    width: 42px;
    height: 42px;
  }
}

@media (max-width: 480px) {
  .search-form {
    flex-direction: column;
  }

  .search-group {
    width: 100%;
    min-width: unset;
  }

  .search-button {
    width: 100%;
  }
}
</style>
