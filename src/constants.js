export const MAX_CONTENT_COUNT = 4
export const MAX_CAPTION_COUNT = 3

export const STEPS = [
  'Questions',
  'Upload your conent',
  'Add text',
  'Choose style',
  'Preview',
]
export const STEP_PREV = 'PREV'
export const STEP_CURRENT = 'CURRENT'
export const STEP_NEXT = 'NEXT'

export const MAX_CAPTION_TEXT_LENGTH = 15

export const TAGS = {
  '0': {
    name: 'New Product Introduction',
    children: [
      ['Our New Arrival', 'Be The First', 'Don’t miss this', 'Check'],
      [
        'Available in all sizes',
        'Available in all colors',
        'Hurry Up',
        'In all our shops',
        'Limited Offer',
      ],
      [
        'Free Shipping',
        'Buy Now',
        'Order Now',
        'Discover More',
        'Free Delivery',
        'Contact Us',
        'Learn More',
      ],
    ],
  },
  '1': {
    name: 'New Product Arrival',
    children: [],
  },
  '2': {
    name: 'Special Sale',
    children: [
      [
        'Flash Sale',
        'Last Chance Sale',
        'Exclusive Sale',
        'Holiday Sale',
        'Black Friday',
        'Weekend Sale',
        'Christmas Sale',
        'Summer Sale',
      ],
      [
        'Final Sale',
        'Buy One, Get…',
        '20% Off',
        'Save 40$',
        '50$ Off',
        'Extra Sale 30%',
        '24 hours only',
        'This Weekend Only',
        'Last Chance',
      ],
      [
        'Expires Soon',
        'Limited Time Offer',
        'Offer Ends Soon',
        'Buy Now',
        'Get Now',
        'Shop Now',
      ],
    ],
  },
  '3': {
    name: 'Special Offer',
    children: [],
  },
  '4': {
    name: 'Product Collection',
    children: [],
  },
}
