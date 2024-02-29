export const navigation = {
  categories: [
    {
      id: 'cats',
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
          id: 'breeds',
          name: 'Breeds',
          items: [
            { name: 'Persian', id:"persian", href: `{cats/breeds/persian}`},
            { name: 'Maine Coon', id:"maine_coon", href: `{cats/breeds/maine_coon}` },
            { name: 'Ragdoll', id: 'ragdoll' },
            { name: 'Siamese', id: 'siamese' },
            { name: 'British Shorthair', id: 'shorthair' },
            { name: 'Bengal', id: 'bengal' }
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Collars', id: 'catcollars' },
            { name: 'Toys', id: 'cattoys' },
            { name: 'Leashes', id: 'catleashes' },
            { name: 'SteelBowl', id: 'catsteelBowl' }
           
          ],
        },
        {
          id: 'food',
          name: 'Cat Food',
          items: [
            { name: 'Dry Food', id: 'dry' },
            { name: 'Wet Food', id: 'wet' },
            { name: 'Puppy Food', id: 'kitty' }
            
          ],
        },
      ],
    },
    {
      id: 'dog',
      name: 'Dogs',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://img.freepik.com/premium-photo/vertical-shot-funny-golden-retriever-green-background_756748-80621.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Shop with us',
          id: '/golden_retrievers',
          imageSrc: 'https://img.freepik.com/free-photo/vertical-portrait-golden-retriever-looking-away-with-cloudy-sky_181624-44109.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'breed',
          name: 'Breed',
          items: [
            { name: 'Golden Retrievers', id: 'golden_retrievers' },
            { name: 'German Shepherd', id: 'german_shepherd' },
            { name: 'Labrador Retrievers', id: 'labrador_retrievers' },
            { name: 'Akita', id: 'akita' },
            { name: 'Alaskan Malamute', id: 'alaskan_malamute' }
            
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Toys', id: 'toys' },
            { name: 'Collars', id: 'collars' },
            { name: 'Leashes', id: 'leashes' },
            { name: 'SteelBowl', id: 'steelbowl' }
          ],
        },
        {
          id: 'dog_food',
          name: 'Dog Food',
          items: [
            { name: 'Dry Food', id: 'dry_food' },
            { name: 'Wet Food', id: 'wet_food' },
            { name: 'Puppy Food', id: 'puppy_food'}
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