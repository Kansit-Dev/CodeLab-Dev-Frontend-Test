export const NAV_LINKS = [
  { label: 'Shop', href: '#collection' },
  { label: 'Collections', href: '#lookbook' },
  { label: 'About', href: '#philosophy' },
  { label: 'Contact', href: '#newsletter' },
] as const

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop&q=80'

export const HERO_IMAGE_SECONDARY =
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&h=1200&fit=crop&q=85'

export const PRODUCTS = [
  {
    name: 'Silk Midi Dress',
    price: '$485',
    category: 'Dresses',
    isNew: true,
    image:
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&h=800&fit=crop&q=80',
  },
  {
    name: 'Cashmere Cardigan',
    price: '$295',
    category: 'Knitwear',
    isNew: true,
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80',
  },
  {
    name: 'Linen Wide-Leg Trousers',
    price: '$185',
    category: 'Trousers',
    isNew: false,
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&q=80',
  },
  {
    name: 'Satin Slip Blouse',
    price: '$215',
    category: 'Tops',
    isNew: true,
    image:
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&h=800&fit=crop&q=80',
  },
  {
    name: 'Wool Coat',
    price: '$890',
    category: 'Outerwear',
    isNew: false,
    image:
      'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&h=800&fit=crop&q=80',
  },
  {
    name: 'Leather Tote Bag',
    price: '$345',
    category: 'Accessories',
    isNew: false,
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&q=80',
  },
] as const

export const PRODUCT_CATEGORIES = ['All', 'Dresses', 'Knitwear', 'Trousers', 'Tops', 'Outerwear', 'Accessories'] as const

export const LOOKBOOK_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=550&fit=crop&q=80',
    alt: 'Editorial look in neutral beige coat',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=550&fit=crop&q=80',
    alt: 'Minimal cream outfit editorial',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=550&fit=crop&q=80',
    alt: 'Soft brown tones fashion portrait',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=550&fit=crop&q=80',
    alt: 'Natural linen textures look',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=550&fit=crop&q=80',
    alt: 'Soft ivory and blush editorial',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=550&fit=crop&q=80',
    alt: 'Modern minimal runway look',
    span: 'normal',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'The quality is exceptional. Every piece feels like it was made just for me. True luxury without the pretense.',
    author: 'Sophia Chen',
    location: 'New York',
    rating: 5,
  },
  {
    quote:
      'Finally found a brand that understands elegance without excess. Beautifully minimal, timelessly chic.',
    author: 'Emma Laurent',
    location: 'Paris',
    rating: 5,
  },
  {
    quote:
      'Their attention to detail is remarkable. These are investment pieces you will treasure forever.',
    author: 'Aria Williams',
    location: 'London',
    rating: 5,
  },
] as const

export const CATEGORIES = [
  {
    name: 'The Edit',
    desc: 'Curated essentials for every season',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop&q=80',
    count: 42,
  },
  {
    name: 'Outerwear',
    desc: 'Statement coats & jackets',
    image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&h=800&fit=crop&q=80',
    count: 18,
  },
  {
    name: 'Accessories',
    desc: 'The finishing touch',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&q=80',
    count: 31,
  },
] as const

export const BRAND_STATS = [
  { value: '2018', label: 'Founded' },
  { value: '40+', label: 'Countries' },
  { value: '98%', label: 'Satisfaction' },
  { value: '12K+', label: 'Clients' },
] as const
