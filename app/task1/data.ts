export const NAV_LINKS = [
  { label: 'Shop', href: '#collection' },
  { label: 'Collections', href: '#lookbook' },
  { label: 'About', href: '#philosophy' },
  { label: 'Contact', href: '#newsletter' },
] as const

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop&q=80'

export const PRODUCTS = [
  {
    name: 'Silk Midi Dress',
    price: '$485',
    isNew: true,
    image:
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&h=800&fit=crop&q=80',
  },
  {
    name: 'Cashmere Cardigan',
    price: '$295',
    isNew: true,
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80',
  },
  {
    name: 'Linen Trousers',
    price: '$185',
    isNew: false,
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&q=80',
  },
] as const

export const LOOKBOOK_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=550&fit=crop&q=80',
    alt: 'Editorial look in neutral beige coat',
  },
  {
    src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=550&fit=crop&q=80',
    alt: 'Minimal cream outfit editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=550&fit=crop&q=80',
    alt: 'Soft brown tones fashion portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=550&fit=crop&q=80',
    alt: 'Natural linen textures look',
  },
  {
    src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=550&fit=crop&q=80',
    alt: 'Soft ivory and blush editorial',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'The quality is exceptional. Every piece feels like it was made just for me. True luxury.',
    author: 'Sophia Chen',
    location: 'New York',
  },
  {
    quote:
      'Finally found a brand that understands elegance without excess. Beautifully minimal.',
    author: 'Emma Laurent',
    location: 'Paris',
  },
  {
    quote:
      'Their attention to detail is remarkable. These are investment pieces you will treasure forever.',
    author: 'Aria Williams',
    location: 'London',
  },
] as const
