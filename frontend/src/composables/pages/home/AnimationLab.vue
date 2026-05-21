    <script setup lang="ts">

    // Hooks de Vue
    import { onMounted, ref } from 'vue'

    // Animación del hero
    import { heroEntrance } from '../../../animations/hero.ts'

    /*
    |--------------------------------------------------------------------------
    | Refs del DOM
    |--------------------------------------------------------------------------
    |
    | Guardan referencias reales de elementos HTML
    | para poder animarlos con GSAP.
    |
    */

    const titleRef = ref<HTMLElement | null>(null)

    const subtitleRef = ref<HTMLElement | null>(null)

    const searchRef = ref<HTMLElement | null>(null)

    /*
    |--------------------------------------------------------------------------
    | onMounted
    |--------------------------------------------------------------------------
    |
    | Se ejecuta cuando el componente ya existe en pantalla.
    | Aquí iniciamos las animaciones.
    |
    */

    onMounted(() => {

    // Verifica que los elementos existan
    if (
        titleRef.value &&
        subtitleRef.value &&
        searchRef.value
    ) {

        // Ejecuta animación principal
        heroEntrance(
        titleRef.value,
        subtitleRef.value,
        searchRef.value
        )
    }
    })

    </script>

    <template>

    <!-- Contenedor principal -->
    <main
        class="relative min-h-screen overflow-hidden bg-black text-white"
    >

        <!-- Imagen de fondo -->
        <div
        class="absolute inset-0 bg-cover bg-center opacity-40"
        style="
            background-image: url('/src/assets/hero.png');
        "
        />

        <!-- Overlay oscuro -->
        <div
        class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"
        />

        <!-- Contenido -->
        <section
        class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
        >

        <!-- Título -->
        <h1
            ref="titleRef"
            class="max-w-5xl text-5xl font-extrabold uppercase leading-tight md:text-7xl"
        >
            Drive The Extraordinary
        </h1>

        <!-- Subtítulo -->
        <p
            ref="subtitleRef"
            class="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl"
        >
            Discover the pinnacle of automotive engineering.
            Find your perfect high-performance car or motorcycle.
        </p>

        <!-- Search bar -->
        <div
            ref="searchRef"
            class="mt-10 flex w-full max-w-5xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:flex-row"
        >

            <!-- Input -->
            <input
            type="text"
            placeholder="Search vehicle..."
            class="flex-1 rounded-xl bg-black/40 px-4 py-4 outline-none"
            />

            <!-- Botón -->
            <button
            class="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-red-500"
            >
            Search
            </button>

        </div>

        </section>

    </main>

    </template>