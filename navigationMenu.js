export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Cats',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://content.jdmagicbox.com/comp/mumbai/r5/022pxx22.xx22.191112104027.z6r5/catalogue/majestic-paw-s-pet-shop-lokhandwala-complex-andheri-west-mumbai-pet-shops-ikr6inpxjb.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Shop with us',
            href: '/',
            imageSrc: 'https://cdn.pixabay.com/photo/2018/01/11/23/16/woman-3077180_640.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Breeds',
            items: [
              { name: 'Persian', id:"top", href: `{women/clothing/tops}` },
              { name: 'Maine Coon', id:"women_dress", href: '#' },
              { name: 'Ragdoll', id: 'women_jeans' },
              { name: 'Siamese', id: 'lengha_choli' },
              { name: 'British Shorthair', id: 'sweater' },
              { name: 'Bengal', id: 't-shirt' }
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Collars', id: 'watch' },
              { name: 'Toys', id: 'wallet' },
              { name: 'Leashes', id: 'bag' },
              { name: 'SteelBowl', id: 'sunglasse' },
              { name: 'Harnesses', id: 'hat' }
             
            ],
          },
          {
            id: 'brands',
            name: 'Cat Food',
            items: [
              { name: 'Dry Food', id: '#' },
              { name: 'Wet Food', id: '#' },
              { name: 'Puppy Food', id: '#' }
              
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Dogs',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Shirt', id: 'shirt' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Sweaters', id: '#' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: '#' },
              { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: '#' },
              { name: 'Wallets', id: '#' },
              { name: 'Bags', id: '#' },
              { name: 'Sunglasses', id: '#' },
              { name: 'Hats', id: '#' },
              { name: 'Belts', id: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      // { name: 'Company', id: '/' },
      // { name: 'Stores', id: '/' },
    ],
  }