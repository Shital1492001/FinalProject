export const color = [
  "Red",
  "Pink",
  "Grey",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "Red", label: "Red" },
      { value: "Pink", label: "Pink" },
      { value: "Grey", label: "Grey" },
      { value: "brown", label: "Brown" },
      { value: "Blue", label: "Blue" },
      { value: "purple", label: "Purple" },
      {value:"yellow",label:"Yellow"}
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
    ],
  },
  
];

export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 To ₹399" },
      { value: "399-999", label: "₹399 To ₹999" },
      { value: "999-1999", label: "₹999 To ₹1999" },
      { value: "1999-2999", label: "₹1999 To ₹2999" },
      { value: "3999-49999", label: "₹3999 To ₹49999" },
    ],
  },
  {
    id: "disccout",
    name: "Disccount Range",
    options: [
      {value:"0",label:"0%"},
      {value: "10",label: "10% And Above"},
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      
    ],
  },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
