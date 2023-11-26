export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "iphone 14",
    description: "Short description",
    price: 2999,
    brand: "apple",
    category: "Phone",
    inStock: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2F1694245643713-iphone14-white.png?alt=media&token=2486cd23-8aa9-449e-8563-8c8a3278d0b4",
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2F1694245647731-iphone14-gray.png?alt=media&token=ba0019e0-a6cb-4da7-b214-6252bf57f7e3",
      },
    ],
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Logitech MX Keys Advanced Wireless Illuminated Keyboard, Tactile Responsive Typing, Backlighting, Bluetooth, USB-C, Apple macOS, Microsoft Windows, Linux, iOS, Android, Metal Build (Black)",
    description:
      "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
    price: 102.99,
    brand: "logitech",
    category: "Accesories",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Flogitech-graphite.png?alt=media&token=d07334d8-ab2b-4648-a38b-2a062a1a49bc",
      },
    ],
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Apple iPhone 12, 64GB",
    description:
      'The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day E~Shop Renewed Guarantee.\n- This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.\n- This product is in "Excellent condition". The screen and body show no signs of cosmetic damage visible from 12 inches away.\n- This product will have a battery that exceeds 80% capacity relative to new.\n- Accessories may not be original, but will be compatible and fully functional. Product may come in generic box.\n- Product will come with a SIM removal tool, a charger and a charging cable. Headphone and SIM card are not included.\n- This product is eligible for a replacement or refund within 90-day of receipt if it does not work as expected.\n- Refurbished phones are not guaranteed to be waterproof.',
    price: 40,
    brand: "Apple",
    category: "Phone",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Fiphone%2012%20black.png?alt=media&token=8fe19551-173a-4550-9d02-20afffc79b12",
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Fiphone%2012%20blue.png?alt=media&token=ede757d2-b631-4451-b80c-123861f16c92",
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Fiphone%2012%20red.png?alt=media&token=945e1ffb-953e-467a-8325-5a8fbbbf3153",
      },
    ],
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "Logitech MX Master 2S Wireless Mouse – Use on Any Surface, Hyper-Fast Scrolling, Ergonomic Shape, Rechargeable, Control Upto 3 Apple Mac and Windows Computers, Graphite",
    description:
      "Cross computer control: Game changing capacity to navigate seamlessly on 3 computers, and copy paste text, images, and files from 1 to the other using Logitech flow\nDual connectivity: Use with upto 3 Windows or Mac computers via included Unifying receiver or Bluetooth Smart wireless technology. Gesture button- Yes",
    price: 70,
    brand: "logitech",
    category: "Accesories",
    inStock: true,
    images: [
      {
        color: "Graphite",
        colorCode: " #383838",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Flogitech-graphite.png?alt=media&token=d07334d8-ab2b-4648-a38b-2a062a1a49bc",
      },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Nerunsa",
    category: "Watch",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2F1695192445608-watch-black.jpg?alt=media&token=4446b901-01ab-4152-8953-e36b22608755",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2F1695192448311-watch-silver.jpg?alt=media&token=a76bec63-f616-4647-9dd3-b3d23407ba4f",
      },
    ],
    reviews: [],
  },
];
