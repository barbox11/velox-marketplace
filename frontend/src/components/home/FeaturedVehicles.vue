    <script setup lang="ts">
    import { ref } from 'vue'

    interface Vehicle {
    id: number
    name: string
    price: string
    year: string
    specs: {
        engine: string
        power: string
        weight: string
    }
    image: string
    category: string
    }

    const vehicles = ref<Vehicle[]>([
    {
        id: 1,
        name: 'PORSCHE 911 GT3',
        price: '$580.000.000',
        year: '2024 • Weissach Package',
        specs: {
        engine: '2.7L',
        power: '518 HP',
        weight: '4.0L FR'
        },
        image: 'porche.jpg',
        category: 'AUTOS'
    },
    {
        id: 2,
        name: 'LAMBORGHINI STO',
        price: '$590.000.000',
        year: '2025 • Track Edition',
        specs: {
        engine: '3.0L',
        power: '640 HP',
        weight: '5.2L V10'
        },
        image: 'lambo1.jpg',
        category: 'AUTOS'
    },
    {
        id: 3,
        name: 'DUCATI V4R',
        price: '$79.999.000',
        year: '2024 • Factory Racing',
        specs: {
        engine: '2.8L',
        power: '216 HP',
        weight: '172 KG'
        },
        image: 'ducati1.jpg',
        category: 'MOTOS'
    }
    ])
    </script>

    <template>
    <section class="featured-section">
        <div class="featured-container">
        <!-- Header -->
        <div class="featured-header">
            <div class="header-left">
            <h2 class="featured-title">VEHÍCULOS DESTACADOS</h2>
            <div class="title-underline"></div>
            </div>
            <a href="#" class="view-all-link">VER TODO EL INVENTARIO</a>
        </div>

        <!-- Vehicles Grid -->
        <div class="vehicles-grid">
            <div v-for="vehicle in vehicles" :key="vehicle.id" class="vehicle-card">
            <!-- Image -->
            <div class="vehicle-image">
                <img :src="`/src/assets/imagenes/${vehicle.image}`" :alt="vehicle.name" />
            </div>

            <!-- Content -->
            <div class="vehicle-content">
                <div class="vehicle-header">
                <h3 class="vehicle-name">{{ vehicle.name }}</h3>
                <span class="vehicle-price">{{ vehicle.price }}</span>
                </div>

                <p class="vehicle-year">{{ vehicle.year }}</p>

                <!-- Specs -->
                <div class="vehicle-specs">
                <div class="spec">
                    <span class="spec-value">{{ vehicle.specs.engine }}</span>
                </div>
                <div class="spec">
                    <span class="spec-value">{{ vehicle.specs.power }}</span>
                </div>
                <div class="spec">
                    <span class="spec-value">{{ vehicle.specs.weight }}</span>
                </div>
                </div>

                <!-- Button -->
                <button class="view-details-btn">VER DETALLES</button>
            </div>
            </div>
        </div>
        </div>
    </section>
    </template>

    <style scoped>
    .featured-section {
    background: var(--bg-dark);
    padding: 5rem 2rem;
    position: relative;
    }

    .featured-container {
    max-width: 1400px;
    margin: 0 auto;
    }

    /* Header */
    .featured-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 4rem;
    gap: 2rem;
    }

    .header-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    }

    .featured-title {
    font-family: var(--heading);
    font-size: clamp(1.875rem, 5vw, 2.5rem);
    font-weight: 800;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    }

    .title-underline {
    width: 80px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
    }

    .view-all-link {
    font-family: var(--body);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--primary);
    text-decoration: none;
    letter-spacing: 1.5px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    }

    .view-all-link:hover {
    color: var(--primary-hover);
    transform: translateX(5px);
    }

    /* Vehicles Grid */
    .vehicles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    justify-items: center;
    }

    .vehicle-card {
    width: 100%;
    max-width: 350px;
    background: var(--bg-soft);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    }

    .vehicle-card:hover {
    background: var(--bg-card);
    border-color: rgba(225, 6, 0, 0.3);
    box-shadow: 0 8px 32px rgba(225, 6, 0, 0.1);
    transform: translateY(-8px);
    }

    /* Image */
    .vehicle-image {
    width: 100%;
    height: 240px;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.7) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .vehicle-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 35%;
    transition: transform 0.3s ease;
    }

    .vehicle-card:hover .vehicle-image img {
    transform: scale(1.05);
    }

    /* Content */
    .vehicle-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
    }

    .vehicle-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    }

    .vehicle-name {
    font-family: var(--heading);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    flex: 1;
    }

    .vehicle-price {
    font-family: var(--heading);
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary);
    white-space: nowrap;
    }

    .vehicle-year {
    font-family: var(--body);
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0;
    font-weight: 500;
    }

    /* Specs */
    .vehicle-specs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(225, 6, 0, 0.05);
    border-radius: 8px;
    }

    .spec {
    text-align: center;
    }

    .spec-value {
    display: block;
    font-family: var(--body);
    font-size: 0.875rem;
    color: var(--text-muted);
    font-weight: 500;
    line-height: 1.5;
    }

    /* Button */
    .view-details-btn {
    background: var(--primary);
    color: white;
    border: none;
    padding: 0.875rem 2rem;
    border-radius: 6px;
    font-family: var(--body);
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(225, 6, 0, 0.2);
    }

    .view-details-btn:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(225, 6, 0, 0.3);
    }

    .view-details-btn:active {
    transform: translateY(0);
    }

    /* Responsive */
    @media (max-width: 1024px) {
    .featured-section {
        padding: 4rem 1.5rem;
    }

    .featured-header {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 3rem;
    }

    .vehicles-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .vehicle-card {
        max-width: 100%;
    }
    }

    @media (max-width: 768px) {
    .featured-section {
        padding: 3rem 1rem;
    }

    .featured-title {
        font-size: 1.5rem;
    }

    .vehicles-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .vehicle-content {
        padding: 1.5rem;
    }

    .vehicle-specs {
        padding: 1rem;
    }
    }
    </style>
