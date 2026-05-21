// Librería de animaciones
import gsap from 'gsap'

// Animación principal del hero
export const heroEntrance = (
  title: HTMLElement,
  subtitle: HTMLElement,
  search: HTMLElement
) => {
  // Timeline para secuencia cinematográfica
  const tl = gsap.timeline()

  // Animación del título
  tl.from(title, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
  })

  // Animación del subtítulo
  tl.from(
    subtitle,
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    },

    // Superposición suave
    '-=0.5'
  )

  // Animación del buscador
  tl.from(
    search,
    {
      y: 30,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.out',
    },

    // Inicio anticipado
    '-=0.4'
  )
}