import { Product } from '@/types'

export const newArrivalsProducts: Product[] = [
  { name: '1. New and sale badge', price: 110.0, badges: ['SALE'] as const, image: '/img/product-chair-01.jpg', originalPrice: 130.0, countdown: [0, 0, 0, 0], },
  { name: '2. New badge product', price: 80.0, badges: ['NEW'] as const, image: '/img/product-chair-02.jpg', countdown: [0, 0, 0, 0] ,discount:113},
  { name: '3. Variable Product', price: 50.0, badges: ['NEW'] as const, image: '/img/product-table-01.jpg', countdown: [0, 0, 0, 0] },
  { name: '4. Grey armchair', price: 19.0, badges: ['NEW'] as const, image: '/img/product-armchair-01.jpg', countdown: [0, 0, 0, 0] },
  { name: '5. Small wooden side table', price: 55.0, badges: ['SALE'] as const, image: '/img/product-table-02.jpg', countdown: [0, 0, 0, 0] },
  { name: '6. Simple Product', price: 70.0, badges: ['SALE'] as const, image: '/img/product-sofa-01.jpg', countdown: [0, 0, 0, 0] },
  { name: '7. Variable With Soldout', price: 39.0, badges: ['SALE'] as const, image: '/img/product-armchair-02.jpg', countdown: [0, 0, 0, 0] },
  { name: '8. Dark grey armchair', price: 19.0, badges: ['SOLD OUT'] as const, image: '/img/product-chair-03.jpg', countdown: [0, 0, 0, 0] },
  { name: '9. Countdown Product', price: 79.0, badges: ['NEW'] as const, image: '/img/product-countdown-01.jpg', countdown: [0, 0, 0, 0] },
   { name: '10. Simple Product', price: 70.0, badges: ['SALE'] as const, image: '/img/product-sofa-01.jpg', countdown: [0, 0, 0, 0] },
  { name: '11. Variable With Soldout', price: 39.0, badges: ['SALE'] as const, image: '/img/product-armchair-02.jpg', countdown: [0, 0, 0, 0] },
  { name: '12. Dark grey armchair', price: 19.0, badges: ['SOLD OUT'] as const, image: '/img/product-chair-03.jpg', countdown: [0, 0, 0, 0] },
  { name: '13. Countdown Product', price: 79.0, badges: ['NEW'] as const, image: '/img/product-countdown-01.jpg', countdown: [0, 0, 0, 0] },
   { name: '14. Small wooden side table', price: 55.0, badges: ['SALE'] as const, image: '/img/product-table-02.jpg', countdown: [0, 0, 0, 0] },
]

export const topSellingProducts: Product[] = [
  { name: 'Popular Chair', price: 110.0, image: '/img/product-chair-01.jpg', countdown: [0, 0, 0, 0] },
  { name: 'Popular Chair 2', price: 90.0, image: '/img/product-chair-02.jpg', countdown: [0, 0, 0, 0] },
  { name: 'Popular Table', price: 50.0, image: '/img/product-table-01.jpg', countdown: [0, 0, 0, 0] },
  { name: 'Popular Armchair', price: 70.0, image: '/img/product-armchair-01.jpg', countdown: [0, 0, 0, 0] },
]
