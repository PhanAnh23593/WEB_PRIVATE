// 1. Chuẩn bị dữ liệu (Mảng các Object)
const list_store = [ 
  {
    "name": "Cé La Vie Kitchen & Bar",
    "cuisine": "North Indian, Mediterranean, Continental, Sushi, Italian, Lebanese, Asian, Bar Food",
    "priceForTwo": 2200,
    "distance": "1.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20863533/06fc9c8faa0fcf64c1a56859ae934abb_featured_v2.jpg?output-format=webp",
    "discount": 15,
    "rating": 4.2,
    "location": "Middle Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Pukhtaan - Legacy of Padma Shri Chef Imtiaz Qureshi",
    "cuisine": "North Indian, Biryani, Kebab",
    "priceForTwo": 1300,
    "distance": "6 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/21390257/c7756f49507ec1352606cf5642b9f6da_featured_v2.jpg?output-format=webp",
    "discount": null,
    "rating": 4.1,
    "location": "Satyaniketan, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Hard Rock Cafe",
    "cuisine": "Mỹ, Continental, Italian, Wraps, Burger, Desserts, Fast Food, Beverages",
    "priceForTwo": 2800,
    "distance": "997 m",
    "image": "https://b.zmtcdn.com/data/pictures/6/20529116/1b39c4665c00eb96f5bb4542ae0b1fe2_featured_v2.jpg?output-format=webp",
    "discount": 20,
    "rating": 4.1,
    "location": "Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Cedar Club House",
    "cuisine": "Modern Indian, Mediterranean, Continental, Mexican, Turkish, Asian, Desserts, Bar Food",
    "priceForTwo": 1800,
    "distance": "1000 m",
    "image": "https://b.zmtcdn.com/data/pictures/4/21128204/3a91d85b5b19ac7044deb68ee188a982_featured_v2.jpg?output-format=webp",
    "discount": 10,
    "rating": 4.2,
    "location": "Janpath, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Dhaba - Estd 1986 Delhi",
    "cuisine": "North Indian, Desserts",
    "priceForTwo": 1400,
    "distance": "1.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/19176919/e5b0c632047d45716ee4ea51f0fe77ef_featured_v2.jpg?output-format=webp",
    "discount": 10,
    "rating": 4.4,
    "location": "Middle Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Somewhere Restaurant & Bar",
    "cuisine": "North Indian, Asian, European, Continental, Lebanese, Turkish, Mediterranean, Kebab",
    "priceForTwo": 2000,
    "distance": "1.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/20243538/6f8254d66c41568c64f0aff55387ca00_featured_v2.jpg?output-format=webp",
    "discount": 15,
    "rating": 4.2,
    "location": "Middle Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Tamasha",
    "cuisine": "North Indian, Asian, Mughlai, Chinese, Italian, Biryani, Desserts, Beverages",
    "priceForTwo": 2500,
    "distance": "1.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/18238278/8a78794b498468ce663b76c1d2cd8159_featured_v2.jpg?output-format=webp",
    "discount": 15,
    "rating": 4.3,
    "location": "Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Chido",
    "cuisine": "North Indian, Asian, Lebanese, Italian, European, Chinese, Beverages",
    "priceForTwo": 2000,
    "distance": "1.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/19952834/e60aee538e896574b55d2bc0f795742d_featured_v2.jpg?output-format=webp",
    "discount": 20,
    "rating": 4.1,
    "location": "Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The Darzi Bar & Kitchen",
    "cuisine": "North Indian, Chinese, Asian, Italian, Mughlai, Desserts, Tea, Beverages",
    "priceForTwo": 2800,
    "distance": "1.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/18423151/e6cbcb3162c11adcf58677f1c4110d9b_featured_v2.jpg?output-format=webp",
    "discount": 25,
    "rating": 4.2,
    "location": "Middle Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Local",
    "cuisine": "North Indian, Continental, Mexican, Italian, Oriental, Biryani, Beverages",
    "priceForTwo": 1500,
    "distance": "1.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/0/18382360/d90fa4ba89eaf1bd8e9aa2b1bf6b2b21_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Plum Coffee and Cocktails",
    "cuisine": "Continental, North Indian, Italian, Asian",
    "priceForTwo": 2000,
    "distance": "1 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20964973/60c85363f7b9c63afacd5bb551b50df6_featured_v2.jpg",
    "discount": 20,
    "rating": 4.3,
    "location": "Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Openhouse Cafe",
    "cuisine": "Continental, Chinese, North Indian, Mughlai, Pizza, Beverages, Desserts, Bar Food",
    "priceForTwo": 2000,
    "distance": "1.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/312601/5ae165fe31bfc309916514906ae1215e_featured_v2.jpg",
    "discount": 15,
    "rating": 4.3,
    "location": "Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Belisario",
    "cuisine": "Continental, European, Oriental, Italian, Asian, Desserts",
    "priceForTwo": 3500,
    "distance": "940 m",
    "image": "https://b.zmtcdn.com/data/pictures/6/20985886/4b2c31d64fde9b8216a453943633f2b2_featured_v2.jpg",
    "discount": 20,
    "rating": 4.5,
    "location": "Shangri-La Eros, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The W Restaurant",
    "cuisine": "Continental, North Indian, Italian, Chinese",
    "priceForTwo": 1500,
    "distance": "966 m",
    "image": "https://b.zmtcdn.com/data/pictures/3/20975873/cf6abe94f145653768f72c28f49a4681_featured_v2.jpg",
    "discount": 30,
    "rating": "New",
    "location": "Outer Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "38 Barracks",
    "cuisine": "North Indian, Biryani, Chinese, Kebab, Desserts, Beverages",
    "priceForTwo": 1100,
    "distance": "1.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/18241537/b602d131899e4c2124b20a95909855f5_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Meraak",
    "cuisine": "Cafe, Coffee, North Indian, Chinese, Asian, Continental, Biryani, Beverages",
    "priceForTwo": 1500,
    "distance": "8.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/21575291/b3a8355e0e9ae830f9e325adf6860f0e_featured_v2.jpg",
    "discount": 15,
    "rating": "New",
    "location": "Preet Vihar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Covah - The Cavern",
    "cuisine": "Continental, Middle Eastern, Mediterranean, Italian, Asian, Japanese, Salad, Bar Food",
    "priceForTwo": 3000,
    "distance": "22 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/21564342/e8b75d4905b110748df09a7061715060_featured_v2.jpg",
    "discount": null,
    "rating": 4.1,
    "location": "Sector 43, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Out Of The Box Courtyard",
    "cuisine": "Continental, North Indian, Italian, Pizza, Chinese, Asian, Fast Food, Beverages",
    "priceForTwo": 2200,
    "distance": "1.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/19495371/53ccc0683b72fbde87740d033a1ab646_featured_v2.jpg",
    "discount": 20,
    "rating": 4.1,
    "location": "Middle Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Cafe Wink",
    "cuisine": "Cafe, Continental, Italian, Fast Food, Sandwich, Pizza, Beverages, Desserts",
    "priceForTwo": 1000,
    "distance": "11 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/7224/8495d29c8e30408e5768794669041647_featured_v2.jpg",
    "discount": null,
    "rating": 4.4,
    "location": "Anand Vihar, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Dolche by Duty Free",
    "cuisine": "Continental, North Indian, Mediterranean, European, Italian, Bar Food, Desserts, Beverages",
    "priceForTwo": 1200,
    "distance": "8.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/21179761/3515c816c1fc6f2b230980fcc9080093_featured_v2.jpg",
    "discount": 20,
    "rating": "New",
    "location": "Gujranwala Town, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The Barbeque Times",
    "cuisine": "BBQ, South Indian, North Indian, Asian, Mughlai, Street Food, Bakery, Desserts",
    "priceForTwo": 1800,
    "distance": "26.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/20293756/ae3cb4694435378f86051e09c6674d5a_featured_v2.jpg",
    "discount": null,
    "rating": 4.2,
    "location": "Sector 50, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Delia My Bar Headquarters",
    "cuisine": "North Indian, Chinese, Fast Food, Beverages",
    "priceForTwo": 1600,
    "distance": "2.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20562173/5b99423fa7f26cf55d81315402f1319b_featured_v2.jpg",
    "discount": null,
    "rating": 4.1,
    "location": "Karol Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Qla",
    "cuisine": "European, Italian, Spanish, Desserts, Beverages",
    "priceForTwo": 3500,
    "distance": "11.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/312781/4827f038886ea3c34f9e44277dc74ed5_featured_v2.jpg",
    "discount": null,
    "rating": 4.2,
    "location": "Mehrauli, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Zurii Delhi",
    "cuisine": "North Indian, Asian, Chinese, Pasta, Pizza, Burger, Salad, Desserts",
    "priceForTwo": 1800,
    "distance": "9.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/20505575/34673142e0bb1d90451977e09750c4a0_featured_v2.jpg",
    "discount": 20,
    "rating": 4.4,
    "location": "Club Road, Punjabi Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Begeterre - Museum Themed Restaurant",
    "cuisine": "Asian, Modern Indian, Chinese, Seafood, Italian, Pizza, Desserts",
    "priceForTwo": 3000,
    "distance": "22 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/21433110/d5608976fedba896df8f8586041ffd18_featured_v2.jpg",
    "discount": null,
    "rating": 4.3,
    "location": "Sector 43, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Sana - Di - Ge",
    "cuisine": "North Indian, South Indian, Goan, Mangalorean, Kerala, Desserts, Beverages",
    "priceForTwo": 2700,
    "distance": "3.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/18265393/721eb71bb62fc3e31934fa5b9adf0cf4_featured_v2.jpg",
    "discount": 30,
    "rating": 4.7,
    "location": "Malcha Marg Market , New Delhi",
    "isPromoted": true
  },
  {
    "name": "Drama",
    "cuisine": "Modern Indian, Asian, Italian, Continental",
    "priceForTwo": 1500,
    "distance": "1.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/21209117/b6ed07abc6618d2da3e7b3f77dee08e9_featured_v2.jpg",
    "discount": 15,
    "rating": 4.3,
    "location": "Connaught Place, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Connaught Club House",
    "cuisine": "North Indian, Mughlai, Italian, Continental, Asian, Fast Food, Desserts",
    "priceForTwo": 3000,
    "distance": "1 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/19295106/3d44032078bfdd6967e4dc7be413d470_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "Janpath, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Bukhara - ITC Maurya",
    "cuisine": "North Indian, Kebab, Desserts",
    "priceForTwo": 8000,
    "distance": "4.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/2742/6d0e16c420a2d5cf79c9093ca5cd3c95_featured_v2.jpg",
    "discount": null,
    "rating": 4.4,
    "location": "ITC Maurya, Chanakyapuri, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Lord Of The Drinks",
    "cuisine": "Oriental, North Indian, Continental, Italian, Salad, Fast Food, Desserts, Beverages",
    "priceForTwo": 2400,
    "distance": "937 m",
    "image": "https://b.zmtcdn.com/data/pictures/3/312603/16d5cd13fbc13bcfece4d4333fb2e6ef_featured_v2.jpg",
    "discount": 15,
    "rating": 4.3,
    "location": "Outer Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Swan",
    "cuisine": "Italian, Pasta, Continental, Pizza, Asian, Japanese, Desserts",
    "priceForTwo": 2500,
    "distance": "11.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/19585490/6bce43fdf9efc3d369529bdb23929f36_featured_v2.jpg",
    "discount": null,
    "rating": 4.2,
    "location": "Mehrauli, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Yeti - The Himalayan Kitchen",
    "cuisine": "Tibetan, Asian, Momos, Nepalese, North Eastern, Shake, Beverages",
    "priceForTwo": 2500,
    "distance": "1.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/19129306/33cab35b72c7bfd1d1641ce440bb068f_featured_v2.jpg",
    "discount": 10,
    "rating": 4.2,
    "location": "The Colonnade, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Cyber Hub Social",
    "cuisine": "North Indian, Chinese, Biryani, Pasta, Burger, Pizza, Korean, Beverages",
    "priceForTwo": 2000,
    "distance": "18.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/2/308322/9fceaa15fa05d707cc2d311ae9be066d_featured_v2.jpg",
    "discount": null,
    "rating": 4.5,
    "location": "Cyber Hub, DLF Cyber City, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Mount Fuji Japanese Pan Asian Restaurant & Bar",
    "cuisine": "Japanese, Asian, Chinese, Thai, Sushi, Seafood, Desserts, Beverages",
    "priceForTwo": 2400,
    "distance": "1.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20324919/64f9a36ad23ae37fd09f368d29008333_featured_v2.jpg",
    "discount": 25,
    "rating": 4.6,
    "location": "Middle Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Dramz",
    "cuisine": "European, Japanese, Asian, North Indian",
    "priceForTwo": 3500,
    "distance": "11.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/307432/327d7b9fbb701d5679da9d1f6da019d0_featured_v2.jpg",
    "discount": null,
    "rating": 4,
    "location": "Mehrauli, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Parra By Khubani",
    "cuisine": "North Indian, Chinese, Italian, Japanese, European, Asian, Desserts, Pizza",
    "priceForTwo": 2100,
    "distance": "9 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/20959124/6d1999a6c1387231f85cd0db6f0afbbe_featured_v2.jpg",
    "discount": 10,
    "rating": "New",
    "location": "Model Town 2, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Kwality",
    "cuisine": "North Indian, BBQ, Mughlai, Finger Food, Desserts, Beverages",
    "priceForTwo": 2000,
    "distance": "819 m",
    "image": "https://b.zmtcdn.com/data/pictures/1/121/c3cd75105fede23eb8ff80b6c8850270_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "Connaught Place, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Warehouse Cafe",
    "cuisine": "North Indian, Italian, Asian, Kebab, Beverages",
    "priceForTwo": 2400,
    "distance": "1.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/301605/5f54f91d785c7650cc9fcc9e21d5b0d7_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The Salt Cafe",
    "cuisine": "Continental, Chinese, North Indian, Modern Indian, Lebanese, Japanese, Mediterranean, Italian",
    "priceForTwo": 2200,
    "distance": "18 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20954699/c241d41057f58bbe08a8debbf190307c_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "Hajipur, Noida",
    "isPromoted": false
  },
  {
    "name": "Mesa Lodhi",
    "cuisine": "European, Continental, Coffee, Desserts, Beverages",
    "priceForTwo": 1800,
    "distance": "4.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/20937942/e4a69208c811dad1f8785b2b02f5c93c_featured_v2.jpg",
    "discount": null,
    "rating": 4.9,
    "location": "Lodhi Colony, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Noor by Khubani",
    "cuisine": "Bar Food",
    "priceForTwo": 2500,
    "distance": "13 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/21322110/94691ee5e1fce9a4e1380c36484adafb_featured_v2.jpg",
    "discount": null,
    "rating": 4.1,
    "location": "Sector 38, Noida",
    "isPromoted": false
  },
  {
    "name": "Resaca",
    "cuisine": "North Indian, Continental, Sushi, Italian, Chinese, Desserts",
    "priceForTwo": 1500,
    "distance": "2.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/21329582/cdb5141f7f5766a77aa572b82fdfd98c_featured_v2.jpg",
    "discount": 15,
    "rating": 4.3,
    "location": "Karol Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Karigari By Chef Harpal Singh Sokhi",
    "cuisine": "North Indian, Kebab, Biryani, Mughlai",
    "priceForTwo": 1900,
    "distance": "16.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/20154588/d9362ce5f7431f8a8c7f0c4aeb5f77aa_featured_v2.jpg",
    "discount": null,
    "rating": 4.3,
    "location": "Sector 51, Noida",
    "isPromoted": false
  },
  {
    "name": "Dasaprakash",
    "cuisine": "South Indian, North Indian, Sandwich, Continental, Chinese, Desserts, Beverages",
    "priceForTwo": 1000,
    "distance": "1.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/19893005/ee40296f6cb8305065482457c93a0b16_featured_v2.jpg",
    "discount": 10,
    "rating": 4.2,
    "location": "Middle Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Khubani",
    "cuisine": "Mediterranean, Modern Indian, Middle Eastern, Asian, Italian, Desserts",
    "priceForTwo": 3500,
    "distance": "11.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20141509/67ff97aae96de6ff45815cb718e45d2b_featured_v2.jpg",
    "discount": null,
    "rating": 3.7,
    "location": "Aerocity, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Xero Courtyard",
    "cuisine": "Bar Food, Mỹ, Continental, North Indian, Cafe",
    "priceForTwo": 1800,
    "distance": "920 m",
    "image": "https://b.zmtcdn.com/data/pictures/0/20590850/28421bf5c94a3b524a31a2e29cc9777d_featured_v2.jpg",
    "discount": 20,
    "rating": 4.1,
    "location": "Janpath, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Maruchi",
    "cuisine": "Chinese, Asian, Pizza, Sushi, Japanese, Seafood, Pasta, Desserts",
    "priceForTwo": 3000,
    "distance": "10.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20284969/94946d5983ac4c925f9656841c4801ec_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "Lado Sarai, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Ministry Of Beer",
    "cuisine": "North Indian, Italian, Asian, Continental, Chinese, Beverages",
    "priceForTwo": 2800,
    "distance": "1.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/18418277/46c8ece776ea631abe95e239d85468b5_featured_v2.jpg",
    "discount": 15,
    "rating": 4.3,
    "location": "Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "DEL - Roseate House",
    "cuisine": "European, North Indian, Italian, Continental, Asian, Desserts",
    "priceForTwo": 5000,
    "distance": "12.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/18382353/8b808753f342f052f5296dc623880dbb_featured_v2.jpg",
    "discount": 25,
    "rating": 4.2,
    "location": "Roseate House, Aerocity, New Delhi",
    "isPromoted": false
  },
  {
    "name": "WITC-Wok In The Clouds",
    "cuisine": "Chinese, Continental, North Indian, Asian, Italian, Oriental, Desserts, Beverages",
    "priceForTwo": 2500,
    "distance": "1.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/3/3083/ec8204df0a7b26a6e284f2cab736231c_featured_v2.jpg",
    "discount": 15,
    "rating": 4.3,
    "location": "Middle Circle, Connaught Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "RYU Rooftop Bar",
    "cuisine": "North Indian, Asian, Italian, Sushi, Pasta, Pizza, Chinese, Bar Food",
    "priceForTwo": 2000,
    "distance": "24 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/19320335/f2d72fa1fa31d358b9b3fad220fdff3a_featured_v2.jpg",
    "discount": 20,
    "rating": 4.3,
    "location": "32nd Avenue, Milestone, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "MKT",
    "cuisine": "Asian, European, Japanese, North Indian, Mexican, Thai, Pizza, Pasta",
    "priceForTwo": 3000,
    "distance": "5 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/18687055/e1e59307a8114182fb131b90e96bd525_featured_v2.jpg",
    "discount": null,
    "rating": 4.1,
    "location": "Chanakya Mall, Chanakyapuri, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Themis Barbeque House",
    "cuisine": "North Indian, Italian, Mughlai, Salad, Desserts, Beverages, BBQ, Asian",
    "priceForTwo": 1800,
    "distance": "17.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/21068384/52ff874cb06b38c6d96d3e7f6d176291_featured_v2.jpg",
    "discount": 10,
    "rating": 4.2,
    "location": "Ambience Mall, DLF Phase 3, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Ilios",
    "cuisine": "Modern Indian, Chinese, North Indian, Oriental, Italian, Desserts, Beverages",
    "priceForTwo": 2000,
    "distance": "8 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20915793/e6a5cee2b070f39a35e707a16c8da410_featured_v2.jpg",
    "discount": 10,
    "rating": "New",
    "location": "Rajouri Garden, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Chili's Grill & Bar",
    "cuisine": "Mexican, Pizza, Pasta, Mỹ, Burger, Tex-Mex, Desserts",
    "priceForTwo": 2500,
    "distance": "12.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/18268712/f820a09324a925d877709bf518242259_featured_v2.jpg",
    "discount": null,
    "rating": 4.5,
    "location": "DLF Mall of India, Sector 18, Noida",
    "isPromoted": false
  },
  {
    "name": "Grasshopper - Asian Bistro & Bar",
    "cuisine": "Asian, Japanese, Sushi, Chinese, European, , Beverages, Cuisine Varies",
    "priceForTwo": 1500,
    "distance": "6.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/20929715/4b0a297f28d294103fc516afb1e83008_featured_v2.jpg",
    "discount": 25,
    "rating": 4.3,
    "location": "Defence Colony Main Market, Defence Colony, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Under The Neem",
    "cuisine": "North Indian, Healthy Food, Italian, Pizza, Pasta, Desserts, Beverages",
    "priceForTwo": 3000,
    "distance": "37.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/18857856/e2badc99ec4c9165b9052735ccda46ff_featured_v2.jpg",
    "discount": null,
    "rating": 4,
    "location": "Sector 83, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Zura",
    "cuisine": "Continental, Italian, Asian, Turkish, Sushi, Desserts",
    "priceForTwo": 1800,
    "distance": "7.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/21051175/d4cbb19289492336464287caa6b933ca_featured_v2.jpg",
    "discount": 10,
    "rating": 4.4,
    "location": "Safdarjung, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Effingut",
    "cuisine": "Mexican, Continental, North Indian, Beverages, Japanese, Pizza, Desserts",
    "priceForTwo": 3000,
    "distance": "10.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/20429438/9ddf09302110c2abc7419e464a0284c5_featured_v2.jpg",
    "discount": 10,
    "rating": 4.6,
    "location": "MGF Metropolitan Mall, Saket, New Delhi",
    "isPromoted": false
  },
  {
    "name": "The Sunday House",
    "cuisine": "Asian, Mediterranean, North Indian, Pizza, Pasta, Sushi",
    "priceForTwo": 1400,
    "distance": "9.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/19479304/6a5f390c8af6a698dde66add8a744bec_featured_v2.jpg",
    "discount": 15,
    "rating": 4.3,
    "location": "Punjabi Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Call Chotu - All Day Diner & Bar",
    "cuisine": "North Indian, Chinese, Thai, Street Food, Maharashtrian, Momos, Bakery, Ice Cream",
    "priceForTwo": 1000,
    "distance": "10.9 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/19807364/64960dd4086e7c7fa5dff349fd0ba1e1_featured_v2.jpg",
    "discount": null,
    "rating": 4.5,
    "location": "Saket, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Kiona Patio & Bar",
    "cuisine": "European, Asian",
    "priceForTwo": 1500,
    "distance": "9.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/20958306/b6b225d1cf53c7d158f5ae4a94ddc654_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Hauz Khas, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Anardana",
    "cuisine": "North Indian, Mughlai, Biryani, Kebab, Chinese, Continental, Pizza, Desserts",
    "priceForTwo": 2400,
    "distance": "21.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/21333778/e091160316ead2a9186946e3414f6108_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "DLF Phase 5, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Kasso",
    "cuisine": "Italian, Continental, Chinese, Sushi, North Indian, Seafood",
    "priceForTwo": 1800,
    "distance": "6.9 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/21017937/dfe1650fdd71eaafa6c55555597cd475_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Moti Nagar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Echoes",
    "cuisine": "Pizza, Burger, Momos, Coffee, Pasta, Shake, Chinese, North Indian",
    "priceForTwo": 500,
    "distance": "8.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/21145503/ef709d5eceee2de61bf2ec91e3bc4ac5_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "Kailash Colony, New Delhi",
    "isPromoted": false
  },
  {
    "name": "KINOKO Kitchen & Bar",
    "cuisine": "Asian, Japanese",
    "priceForTwo": 1100,
    "distance": "9.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/21514468/f58191ff014ce706423491ad80314129_featured_v2.jpg",
    "discount": 10,
    "rating": "New",
    "location": "Pacific Mall - NSP, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Comorin",
    "cuisine": "North Indian, Modern Indian, Finger Food, Bar Food, Desserts, Beverages",
    "priceForTwo": 3000,
    "distance": "22.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/18896450/97db0cb3d51045b1d6e5fb28b6f53a83_featured_v2.jpg",
    "discount": null,
    "rating": 4.7,
    "location": "DLF Horizon Center, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Music & Mountains - Hillside Cafe & Cocktail Garden",
    "cuisine": "Italian, Continental, Fast Food, Salad, Desserts, Beverages, Shake",
    "priceForTwo": 2800,
    "distance": "8.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/307065/444b69fd84e11b040861572f3914bcce_featured_v2.jpg",
    "discount": 15,
    "rating": 4.6,
    "location": "M Block Market, Greater Kailash 1 (GK1), New Delhi",
    "isPromoted": true
  },
  {
    "name": "Mia Bella - Romantic Kitchen & Bar",
    "cuisine": "Italian, Pizza, Pasta, Salad, Mediterranean, Shake, Beverages",
    "priceForTwo": 1200,
    "distance": "8.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/0/18602050/5672c5b51254d2e5e60076e7efafabaf_featured_v2.jpg",
    "discount": null,
    "rating": 4.1,
    "location": "Hauz Khas Village, New Delhi",
    "isPromoted": false
  },
  {
    "name": "The Barbeque Company",
    "cuisine": "BBQ, North Indian, Fast Food, Beverages",
    "priceForTwo": 1700,
    "distance": "8.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/3/19267043/4e86bfc9293daa1c36b22cd378bbebcf_featured_v2.jpg",
    "discount": 10,
    "rating": 4.1,
    "location": "Rajouri Garden, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Rooh",
    "cuisine": "Modern Indian, North Indian, Desserts, Beverages",
    "priceForTwo": 4500,
    "distance": "11.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/19012642/b9816b00c33a50a8f8ca7a31a4cdbcb8_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "Ambawatta One Complex, Mehrauli, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Akra",
    "cuisine": "Continental, Italian, Asian, Mediterranean, Modern Indian, Mughlai",
    "priceForTwo": 1500,
    "distance": "6.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/20719584/8342f1cc4c007e54ad8bf0d42c9dcd1f_featured_v2.jpg",
    "discount": 20,
    "rating": 4.1,
    "location": "Lajpat Nagar 3, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Melt House",
    "cuisine": "Cafe, Continental, Sandwich, Italian, Desserts, Coffee, Beverages, Bar Food",
    "priceForTwo": 1800,
    "distance": "10.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/20930027/f0826a6c14a0de492b7eb8ca7f0cc95a_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "M Block Market, Greater Kailash 2 (GK2), New Delhi",
    "isPromoted": false
  },
  {
    "name": "House Of Boho",
    "cuisine": "Mediterranean, Asian, Sushi, Italian, Pizza, Pasta, North Indian",
    "priceForTwo": 3200,
    "distance": "7.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/20685115/6643c9f8d3830f5f70e5f7c02e67b5f9_featured_v2.jpg",
    "discount": 20,
    "rating": 4.1,
    "location": "Ansal Plaza Mall, Khel Gaon Marg, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Basko",
    "cuisine": "Asian, Italian, Desserts, , Bar Food, International, Beverages, Modern Indian",
    "priceForTwo": 1800,
    "distance": "18.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/21568456/a590fd67086897ee8887749cb7e6dd79_featured_v2.jpg",
    "discount": null,
    "rating": 4.1,
    "location": "Starling Mall, Sector 110, Noida",
    "isPromoted": false
  },
  {
    "name": "Kutumbh",
    "cuisine": "North Indian, Biryani, Kebab, Chinese, Desserts, Beverages, Rolls, Salad",
    "priceForTwo": 1200,
    "distance": "9.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/21393111/fdd4288b77e261f93181f6657876ec79_featured_v2.jpg",
    "discount": 5,
    "rating": 4.3,
    "location": "Karkardooma, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The Big Tree Cafe",
    "cuisine": "North Indian, Continental, Pizza, Pasta, Italian, Coffee, Shake, Beverages",
    "priceForTwo": 1200,
    "distance": "23.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/20008376/6fc1a83588041360a178fbb9335aaa67_featured_v2.jpg",
    "discount": null,
    "rating": 4.1,
    "location": "Golf Course Road, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Noshh",
    "cuisine": "North Indian, Continental, Pizza, Pasta, Oriental, Sushi, Beverages",
    "priceForTwo": 1800,
    "distance": "8.9 km",
    "image": "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png",
    "discount": 10,
    "rating": "New",
    "location": "Mayapuri Phase 1, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Kheer - Roseate House",
    "cuisine": "North Indian, Kebab, Mughlai, Desserts",
    "priceForTwo": 6000,
    "distance": "12.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/18471249/8185eb202727a43c2576726638cdd948_featured_v2.jpg",
    "discount": 10,
    "rating": 4.4,
    "location": "Roseate House, Aerocity, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Green Mantis - Authentic Pan Asian",
    "cuisine": "Asian, Chinese, Sushi, Desserts, Beverages",
    "priceForTwo": 3200,
    "distance": "3.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/19829906/4a45087c2e4d42fca9d31ad86efaf0b5_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "Khan Market, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Havemore",
    "cuisine": "North Indian, Mughlai, Biryani, Beverages",
    "priceForTwo": 2000,
    "distance": "10.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/19662641/d1c08cd91a941f2af5dd1dbe0dc944fa_featured_v2.jpg",
    "discount": null,
    "rating": 4.8,
    "location": "MGF Metropolitan Mall, Saket, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Loca",
    "cuisine": "Mediterranean, Continental, Italian, Bar Food, Pizza, Pasta, Desserts, Beverages",
    "priceForTwo": 1500,
    "distance": "8 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/20801244/e96c0abc2e62e830316cd74d91a1266a_featured_v2.jpg",
    "discount": 10,
    "rating": 4.6,
    "location": "N Block Market, GK, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Olive Bar & Kitchen",
    "cuisine": "Italian, Pizza, Mediterranean, Continental, European, Beverages, Desserts",
    "priceForTwo": 5000,
    "distance": "11.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/8/3258/07957e7e9291547d2daae1519ac125ca_featured_v2.jpg",
    "discount": null,
    "rating": 4.6,
    "location": "Mehrauli, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Silbuttah - The Indian Story by Berco's",
    "cuisine": "North Indian, Mughlai, Kebab",
    "priceForTwo": 1300,
    "distance": "9.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/20699560/571228ce39355f717083d381fb0f99a3_featured_v2.jpg",
    "discount": 10,
    "rating": 4.7,
    "location": "Vishal Enclave, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Indy by Qla",
    "cuisine": "North Indian, Desserts, Beverages",
    "priceForTwo": 3000,
    "distance": "10.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/21369794/d00846e906ef0a1db5b0b838d0f59875_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "Eldeco Centre, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Noiz",
    "cuisine": "Bar Food, Asian, Italian, Pizza, Continental, North Indian, Coffee, Beverages",
    "priceForTwo": 1800,
    "distance": "7.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20539523/8bf11a779c87798e724c61c4835f940d_featured_v2.jpg",
    "discount": 25,
    "rating": 4.1,
    "location": "Ansal Plaza Mall, Khel Gaon Marg, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Chica Loca By Sunny Leone",
    "cuisine": "Middle Eastern, North Indian, Seafood",
    "priceForTwo": 2500,
    "distance": "21.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20981023/e135c501590fddc1cf4cb643148f303b_featured_v2.jpg",
    "discount": 15,
    "rating": 4.3,
    "location": "Sector 129, Noida",
    "isPromoted": false
  },
  {
    "name": "Unwind Cafe",
    "cuisine": "European, Asian, North Indian, Middle Eastern, Italian, Pizza, Pasta, Beverages",
    "priceForTwo": 1800,
    "distance": "7.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/19296830/ed91470fd76ac763ea04141856a763d2_featured_v2.jpg",
    "discount": 20,
    "rating": 4.2,
    "location": "Ansal Plaza Mall, Khel Gaon Marg, New Delhi",
    "isPromoted": true
  },
  {
    "name": "NAO - Next Asian Outing",
    "cuisine": "Korean, Asian, Chinese, Sushi, Desserts, Beverages",
    "priceForTwo": 1700,
    "distance": "10.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/20424114/225de5c279661f8e70d7d8beaff45d2f_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "M Block Market, Greater Kailash 2 (GK2), New Delhi",
    "isPromoted": false
  },
  {
    "name": "Castle's Barbeque",
    "cuisine": "North Indian, Beverages, Fast Food, Chinese, Salad, Mithai, Desserts",
    "priceForTwo": 2200,
    "distance": "9.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/19905791/4a267b1a9d5fb62ae431387973232313_featured_v2.jpg",
    "discount": 15,
    "rating": 3.9,
    "location": "Pacific Mall - NSP, New Delhi",
    "isPromoted": true
  },
  {
    "name": "VietNom",
    "cuisine": "Vietnamese, Asian, Healthy Food, Desserts, Beverages",
    "priceForTwo": 2000,
    "distance": "18.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/19046158/2052cdf98436ae910a77f6dee7e809c5_featured_v2.jpg",
    "discount": 10,
    "rating": 4.7,
    "location": "Cyber Hub, DLF Cyber City, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Blinque",
    "cuisine": "Asian, Continental, Modern Indian, Italian, Desserts",
    "priceForTwo": 2500,
    "distance": "8.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20146009/76e498726b6d7d9dca76c8fa02b97048_featured_v2.jpg",
    "discount": 20,
    "rating": 3.8,
    "location": "Rajouri Garden, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Fiaba",
    "cuisine": "Cafe, Italian, Bakery, Pizza, Continental, North Indian, Coffee, Desserts",
    "priceForTwo": 1200,
    "distance": "19.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/21049873/87fe3e200894a37a0a7fb7e66d96d195_featured_v2.jpg",
    "discount": 10,
    "rating": 3.9,
    "location": "Sector 72, Noida",
    "isPromoted": false
  },
  {
    "name": "Red",
    "cuisine": "Asian",
    "priceForTwo": 2500,
    "distance": "8.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20659123/b7b75c686c33bee4b65aefd24ace0e11_featured_v2.jpg",
    "discount": 10,
    "rating": "New",
    "location": "Basant Lok Market, Vasant Vihar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Bo Tai",
    "cuisine": "Thai, Japanese, Asian, Salad, Beverages",
    "priceForTwo": 3500,
    "distance": "11.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/18676964/a2c08e4968858d966d4aca5540c9cfdc_featured_v2.jpg",
    "discount": null,
    "rating": 4.7,
    "location": "Mehrauli, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Bobachee",
    "cuisine": "North Indian, Mughlai",
    "priceForTwo": 2500,
    "distance": "6.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/21109568/624276488eb8fe83a44b80977f307b8d_featured_v2.jpg",
    "discount": 15,
    "rating": 4.4,
    "location": "South Extension 2, New Delhi",
    "isPromoted": true
  },
  {
    "name": "One8 Commune",
    "cuisine": "Asian, Italian, Mexican, North Indian",
    "priceForTwo": 1800,
    "distance": "28.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/20537854/208ff757e0314edf6e10e9b0994f44a1_featured_v2.jpg",
    "discount": null,
    "rating": 4.4,
    "location": "M3M International Financial Center, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "The Cottage Cafe By La Polo",
    "cuisine": "Cafe, Coffee, Fast Food, Italian, Pizza, Burger, Desserts, Tea",
    "priceForTwo": 1200,
    "distance": "936 m",
    "image": "https://b.zmtcdn.com/data/pictures/7/21279007/3a0f79b8b177908ad6311c36d9668283_featured_v2.jpg",
    "discount": null,
    "rating": 3.8,
    "location": "Janpath, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The BBQ Industry",
    "cuisine": "BBQ, North Indian, Beverages",
    "priceForTwo": 1600,
    "distance": "10.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/17977777/7d6c11b4f16f28245fbe72ab37e59137_featured_v2.jpg",
    "discount": 10,
    "rating": 4.4,
    "location": "Jail Road, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Ivoryy",
    "cuisine": "European, Mediterranean, Asian, Continental, Beverages, Desserts, Kebab",
    "priceForTwo": 3500,
    "distance": "9.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/20150256/1ded953a7e2e8e29b028bfc27c822cb4_featured_v2.jpg",
    "discount": 10,
    "rating": 4.1,
    "location": "Panchshila Rendezvous Complex, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Cafe Hawkers",
    "cuisine": "North Indian, Chinese, Mexican, Fast Food, Desserts, Beverages",
    "priceForTwo": 1600,
    "distance": "1.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/18208892/7095ff896bb51f9bb7590fcf472d2cda_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Connaught Place, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Begam",
    "cuisine": "Middle Eastern, Turkish, Mediterranean",
    "priceForTwo": 3500,
    "distance": "6.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/21052830/4366dfaa1b736dde3053b87d8d20772e_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "Defence Colony, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Big Yellow Door",
    "cuisine": "North Indian, Bar Food, Beverages",
    "priceForTwo": 550,
    "distance": "26.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/21085960/bbc20950f4a5b0fb5e839bf871056868_featured_v2.jpg",
    "discount": null,
    "rating": 4.3,
    "location": "Sector 16, Faridabad",
    "isPromoted": false
  },
  {
    "name": "Verandah Moonshine",
    "cuisine": "North Indian, Mediterranean, Chinese, Pizza, Fast Food, Beverages",
    "priceForTwo": 1800,
    "distance": "9.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/18727335/4e09006a7f9be8ce3aa94e4721d055bc_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Punjabi Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Molecule Air Bar",
    "cuisine": "North Indian, Asian, Italian, European",
    "priceForTwo": 3400,
    "distance": "28.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/20741075/ebca818bf3a0b74deeea2b06e20dacb2_featured_v2.jpg",
    "discount": 15,
    "rating": 4.4,
    "location": "M3M International Financial Center, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Verandah Moonshine",
    "cuisine": "North Indian, Mediterranean, Chinese, Pizza, Fast Food, Beverages",
    "priceForTwo": 1800,
    "distance": "9.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/18727335/4e09006a7f9be8ce3aa94e4721d055bc_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Punjabi Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "OLLY - Olive's All Day Cafe & Bar",
    "cuisine": "Cafe, Beverages, Pizza, Pasta, Italian, Healthy Food, Continental, Desserts",
    "priceForTwo": 2500,
    "distance": "18.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/18671714/d4709d59878304c57e33cf9cfc1e35bd_featured_v2.jpg",
    "discount": null,
    "rating": 4.3,
    "location": "Cyber Hub, DLF Cyber City, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Cocoba",
    "cuisine": "Cafe, Mediterranean, Asian, South Indian, Goan, Mangalorean, Kerala, Desserts",
    "priceForTwo": 1800,
    "distance": "8.9 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/21381087/82d73ac36459846417bbfa22301680b0_featured_v2.jpg",
    "discount": 10,
    "rating": 4.2,
    "location": "SDA, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Coba",
    "cuisine": "Peruvian, Thai, Japanese, Chinese, Mexican, Mediterranean, Italian, Bar Food",
    "priceForTwo": 2500,
    "distance": "12.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/21017011/63ac8adb3e6f27bf542c8ed0c353bf93_featured_v2.jpg",
    "discount": 10,
    "rating": 4.4,
    "location": "Vasant Square Mall, Vasant Kunj, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Zaffran By Kasbah",
    "cuisine": "North Indian, Mughlai, Biryani",
    "priceForTwo": 2500,
    "distance": "8 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/3542/69839fda9c6d2440f83a89f6842e7397_featured_v2.jpg",
    "discount": 10,
    "rating": 4.6,
    "location": "Lala Lajpat Rai Marg, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Udipi's Aahar",
    "cuisine": "South Indian, Shake",
    "priceForTwo": 400,
    "distance": "18 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/21083761/33feff8ab3e6f164136bd95f3a1015dd_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "Hajipur, Noida",
    "isPromoted": false
  },
  {
    "name": "Kohu",
    "cuisine": "North Indian, Chinese, Italian, Mediterranean, Sushi, Salad",
    "priceForTwo": 1800,
    "distance": "9.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20996519/2aa9534da272da7869c4225f0cdb5841_featured_v2.jpg",
    "discount": 15,
    "rating": 3.9,
    "location": "Punjabi Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Cafe De Flora",
    "cuisine": "Cafe, Coffee, Fast Food, Salad, Pasta, Beverages, Sandwich",
    "priceForTwo": 1200,
    "distance": "3.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/20496594/77466d885fb672494837ec87aee612ce_featured_v2.jpg",
    "discount": null,
    "rating": 3.7,
    "location": "Chanakyapuri, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Penthouse Dutyfree - PHD",
    "cuisine": "North Indian, Chinese, Fast Food, Asian",
    "priceForTwo": 1500,
    "distance": "7.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/21619882/49a6b536d567acf7e6436e0c4c0b4fa5_featured_v2.jpg",
    "discount": 10,
    "rating": "New",
    "location": "Green Park, New Delhi",
    "isPromoted": true
  },
  {
    "name": "P.F. Chang's",
    "cuisine": "Asian, Chinese, Sushi, Japanese, Beverages",
    "priceForTwo": 2200,
    "distance": "18.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/21144671/f0adfe3ce1f1030a4119fde90b4413fb_featured_v2.jpg",
    "discount": null,
    "rating": 4,
    "location": "Cyber Hub, DLF Cyber City, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Rizq",
    "cuisine": "European, Italian, Continental, Pasta, Pizza, Middle Eastern, Desserts, Beverages",
    "priceForTwo": 2700,
    "distance": "6.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/20397795/e8c59d49a0f98123b9d6d279f0054c7c_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "Defence Colony, New Delhi",
    "isPromoted": true
  },
  {
    "name": "House of Migo",
    "cuisine": "Italian, Burger, Pizza, Pasta, Beverages, Coffee, Desserts",
    "priceForTwo": 2000,
    "distance": "24.9 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/20512286/98d99f35f718d1b30cd1ffcbe1922e9c_featured_v2.jpg",
    "discount": 10,
    "rating": 4.7,
    "location": "Sector 135, Noida",
    "isPromoted": false
  },
  {
    "name": "Moti Mahal Delux- Legendary Culinary",
    "cuisine": "North Indian, Mughlai, Chinese, Desserts, Beverages",
    "priceForTwo": 1800,
    "distance": "6.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/483/62808d7c1f13efd4cc068cf150da8e0b_featured_v2.jpg",
    "discount": 15,
    "rating": 4.1,
    "location": "South Extension 2 Market, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Cray",
    "cuisine": "Continental, Asian, North Indian, Italian",
    "priceForTwo": 2500,
    "distance": "12.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20886109/16679e78ac94dde93721b1ef5b3267b9_featured_v2.jpg",
    "discount": 10,
    "rating": 4.2,
    "location": "Vasant Square Mall, Vasant Kunj, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Elia Kitchen & Bar",
    "cuisine": "North Indian, Continental, Chinese, Biryani, Shake, Salad, Desserts, Beverages",
    "priceForTwo": 2700,
    "distance": "8.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/20599154/9bdc16f7c1497aa95c395eb53c7772c2_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Rajouri Garden, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Sultan- Radisson Blu Kaushambi",
    "cuisine": "North Indian, Chinese, Continental, Italian, Asian, Beverages",
    "priceForTwo": 3500,
    "distance": "11.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/19991230/c6930a5e936b89ddc1d95c65fbda3340_featured_v2.jpg",
    "discount": 25,
    "rating": 4.3,
    "location": "Radisson Blu Hotel, Kaushambi, Ghaziabad",
    "isPromoted": false
  },
  {
    "name": "Miss Pinto",
    "cuisine": "European, Italian",
    "priceForTwo": 2500,
    "distance": "8.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/19697290/1c0b8181713c602ba831fa28411ff81d_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "Basant Lok Market, Vasant Vihar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Barcode",
    "cuisine": "North Indian, Italian, Chinese, Continental, Desserts, Pizza, Wraps",
    "priceForTwo": 2000,
    "distance": "15.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/18598686/90d350def10e1b72f647ae0c931b2945_featured_v2.jpg",
    "discount": 20,
    "rating": 4.2,
    "location": "Sector 9, Dwarka, New Delhi",
    "isPromoted": false
  },
  {
    "name": "FIO Cookhouse and Bar",
    "cuisine": "European, Modern Indian, Italian, Pizza, North Indian, Seafood, Desserts, Beverages",
    "priceForTwo": 3400,
    "distance": "9.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/304239/0d4ee9a0beb509c240ff678171e83f60_featured_v2.jpg",
    "discount": 10,
    "rating": 4.4,
    "location": "Epicuria Food Mall, Nehru Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Imperfecto",
    "cuisine": "North Indian, Continental, Asian",
    "priceForTwo": 2000,
    "distance": "12.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/2/301442/e883da71a1d774b5423646cdabaf35e8_featured_v2.jpg",
    "discount": 10,
    "rating": 4,
    "location": "Gardens Galleria Mall, Sector 38, Noida",
    "isPromoted": false
  },
  {
    "name": "Gastronomica Kitchen & Bar",
    "cuisine": "Oriental, North Indian, Continental, European, Chinese, Salad, Beverages, Desserts",
    "priceForTwo": 2000,
    "distance": "8.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/310776/5af3a167cb13c50045ba022f6e79424f_featured_v2.jpg",
    "discount": 25,
    "rating": 4.3,
    "location": "M Block Market, Greater Kailash 1 (GK1), New Delhi",
    "isPromoted": true
  },
  {
    "name": "Sorbo",
    "cuisine": "Asian, Continental, Mediterranean",
    "priceForTwo": 2500,
    "distance": "21.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/21476146/4e23836763bdf7b6e600c1e7198f8aa4_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "DLF Phase 5, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "736 AD Culinary Bar",
    "cuisine": "North Indian, Chinese, Cafe",
    "priceForTwo": 1500,
    "distance": "7.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/21360475/6d2038e51c6d550a67263c2cd320beb2_featured_v2.jpg",
    "discount": null,
    "rating": 4.4,
    "location": "Delhi University-GTB Nagar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Cabo Deli",
    "cuisine": "North Indian, Continental, European, Fast Food, Salad, Pizza, Pasta, Desserts",
    "priceForTwo": 2300,
    "distance": "12.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/20972571/fafda299c9ff5c2e658875813052bbbf_featured_v2.jpg",
    "discount": 10,
    "rating": 4,
    "location": "Sainik Farms, New Delhi",
    "isPromoted": false
  },
  {
    "name": "London Street Cafe & Bar",
    "cuisine": "North Indian, Chinese, Italian, Salad, Bar Food, Continental, Desserts, Beverages",
    "priceForTwo": 1500,
    "distance": "9.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/19340783/3362e55e5b7b12579d27e2ada2dccbbe_featured_v2.jpg",
    "discount": 10,
    "rating": 4.2,
    "location": "Aditya Mega Mall, Karkardooma, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Cafe Uncover",
    "cuisine": "North Indian, Oriental, Continental",
    "priceForTwo": 1300,
    "distance": "16.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/19297258/c1b691d0b1bc6537de5c210f542eb351_featured_v2.jpg",
    "discount": null,
    "rating": 4.3,
    "location": "Sector 12, Dwarka, New Delhi",
    "isPromoted": false
  },
  {
    "name": "W Va Bien",
    "cuisine": "Asian, North Indian, Continental, Sushi, Italian, Biryani, Desserts, Beverages",
    "priceForTwo": 2000,
    "distance": "3.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/20023766/6218d9d810b1241727a2e857a3a3cd6b_featured_v2.jpg",
    "discount": 15,
    "rating": 4,
    "location": "Rajinder Nagar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Indian Accent",
    "cuisine": "Modern Indian, North Indian, Beverages",
    "priceForTwo": 6000,
    "distance": "4.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/2004/53e842ffbd65cfad41edff99ef5f7b8e_featured_v2.jpg",
    "discount": null,
    "rating": 4.9,
    "location": "The Lodhi, Lodhi Road, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Flos Music Bar",
    "cuisine": "Continental, Asian, Italian, Mỹ, North Indian",
    "priceForTwo": 2000,
    "distance": "9.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/21048892/39cd3ae8def301393ed983111f9f9c55_featured_v2.jpg",
    "discount": 20,
    "rating": "New",
    "location": "Model Town 3, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The Monk",
    "cuisine": "Chinese, Thai, Asian",
    "priceForTwo": 2000,
    "distance": "24 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/20987166/aabb2f2aff373786d23e9b7e3fa8801c_featured_v2.jpg",
    "discount": 15,
    "rating": 4.4,
    "location": "32nd Avenue, Milestone, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Gonzo - Pan Asian Kitchen",
    "cuisine": "Asian, Chinese, Japanese, Thai, Beverages, Coffee",
    "priceForTwo": 1400,
    "distance": "8.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20353459/12fad61dc7011d69d2779b42fd30098e_featured_v2.jpg",
    "discount": 15,
    "rating": 4.5,
    "location": "Basant Lok Market, Vasant Vihar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "145 Cafe And Bar",
    "cuisine": "North Indian, Kebab, Seafood, Continental, Italian, Desserts, Beverages, Bar Food",
    "priceForTwo": 1500,
    "distance": "18.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/21263496/a778ecb31b312017a76de40eccc48534_featured_v2.jpg",
    "discount": 15,
    "rating": 4.4,
    "location": "Cyber Hub, DLF Cyber City, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Q Vinn Laa",
    "cuisine": "North Indian, Continental, Asian, Chinese, Pizza, Desserts",
    "priceForTwo": 2500,
    "distance": "7.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/21168256/0b25681eb8d09e525d32a3cfcc32186a_featured_v2.jpg",
    "discount": 10,
    "rating": 4.1,
    "location": "Laxmi Nagar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Poiz",
    "cuisine": "North Indian, Continental, Italian, Chinese",
    "priceForTwo": 2000,
    "distance": "29.9 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/21319166/4078669295ac25ee4099471f56aaaa5f_featured_v2.jpg",
    "discount": 10,
    "rating": "New",
    "location": "AIPL Joy Street, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Downtown Village",
    "cuisine": "Bar Food, North Indian, Salad, Fast Food, Chinese, Italian, Continental",
    "priceForTwo": 2600,
    "distance": "8.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20154003/659e88d5c838f94d4ccafb330401c87b_featured_v2.jpg",
    "discount": 15,
    "rating": 4,
    "location": "Hauz Khas Village, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Big Pitcher",
    "cuisine": "North Indian, Asian, Continental, Chinese, Oriental, Mediterranean, Fast Food, Biryani",
    "priceForTwo": 1500,
    "distance": "23 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/19677039/0cac66bd9a7e9b29e06348d5b66e1ac1_featured_v2.jpg",
    "discount": 15,
    "rating": 4.3,
    "location": "Sector 29, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "The Salt Cafe Kitchen & Bar",
    "cuisine": "North Indian, Mughlai, Continental, Asian, Pizza, Pasta, Chinese, Salad",
    "priceForTwo": 2700,
    "distance": "7.9 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/18124353/3b90244d036c7e26dad17aab3fbbd806_featured_v2.jpg",
    "discount": 15,
    "rating": 4.5,
    "location": "Preet Vihar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The House Of Celeste",
    "cuisine": "North Indian, Continental, Asian, Pizza, Italian, Bar Food, Desserts, Beverages",
    "priceForTwo": 2000,
    "distance": "24 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/19282304/41093457fd65b63fa6f6925cd53eeafa_featured_v2.jpg",
    "discount": 20,
    "rating": 4.2,
    "location": "32nd Avenue, Milestone, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Dirty Rabbit",
    "cuisine": "Asian, North Indian, Chinese, Italian, Sushi, Continental, Fast Food, Desserts",
    "priceForTwo": 1900,
    "distance": "8.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/20985102/40e0b87fa482089d8d6b7d467c800398_featured_v2.jpg",
    "discount": 20,
    "rating": 4.1,
    "location": "Kailash Colony, New Delhi",
    "isPromoted": true
  },
  {
    "name": "64/6 -  Country Inn & Suites By Radisson",
    "cuisine": "North Indian, Chinese, Thai, Continental",
    "priceForTwo": 3500,
    "distance": "13.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/5210/e28637a61df39733180f993dd22c6222_featured_v2.jpg",
    "discount": 20,
    "rating": 4.6,
    "location": "Country Inn & Suites by Carlson, Sahibabad, Ghaziabad",
    "isPromoted": false
  },
  {
    "name": "RAAG - The Pan-Indian- by Miss Nora",
    "cuisine": "North Indian, Mughlai, Modern Indian",
    "priceForTwo": 1200,
    "distance": "9.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/21342651/464a20f0fd1af52a81d196ecc040ee6f_featured_v2.jpg",
    "discount": 15,
    "rating": 3.7,
    "location": "Rajouri Garden, New Delhi",
    "isPromoted": true
  },
  {
    "name": "AMA Cafe",
    "cuisine": "Cafe, Continental, Fast Food, Street Food, Pizza, Burger, Desserts",
    "priceForTwo": 900,
    "distance": "8.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/307374/dc77a7f3276f9d689f66e26fd0915065_featured_v2.jpg",
    "discount": null,
    "rating": 4.4,
    "location": "Majnu ka Tila , New Delhi",
    "isPromoted": false
  },
  {
    "name": "Saucy Cocktail Garden",
    "cuisine": "Asian, Continental, Chinese, North Indian, Pizza",
    "priceForTwo": 2000,
    "distance": "9.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/20660661/5ee508d6ce4c12a34192496400d28f9c_featured_v2.jpg",
    "discount": 25,
    "rating": 4,
    "location": "Rajouri Garden, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The Big Chill",
    "cuisine": "Italian, Pasta, Pizza, Salad, Waffle, Desserts, Ice Cream",
    "priceForTwo": 2400,
    "distance": "1.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/18919107/77dd7a1aceb2db4661638e1100a2e773_featured_v2.jpg",
    "discount": null,
    "rating": 4.5,
    "location": "The Colonnade, Connaught Place, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Tippling Street",
    "cuisine": "North Indian, Italian, Continental, Chinese, Asian, Desserts, Shake, Beverages",
    "priceForTwo": 2200,
    "distance": "9.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/18454951/93a8f4cfa082c5f3bb0261e50c9b86c3_featured_v2.jpg",
    "discount": 20,
    "rating": 4.2,
    "location": "Vishal Enclave, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Open Tap 29",
    "cuisine": "Bar Food, Oriental, Continental, Fast Food, North Indian, Beverages",
    "priceForTwo": 2500,
    "distance": "22.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/6/18252386/e812c0d46693549ed8024e2d7be878ef_featured_v2.jpg",
    "discount": 10,
    "rating": 4.4,
    "location": "Main Market, Sector 29, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "G3 Kitchen & Bar",
    "cuisine": "North Indian, Chinese, Thai, Sushi, Italian, Asian, European, Beverages",
    "priceForTwo": 1200,
    "distance": "8.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/20875155/d26baa4da12d99f94248e44abcc61a6b_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Preet Vihar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Bella Vie",
    "cuisine": "Cafe, Continental, Italian, Chinese, Pasta, Beverages, Shake, Desserts",
    "priceForTwo": 1000,
    "distance": "12.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20582403/003ca7983f8a92f5917a6b78673387dd_featured_v2.jpg",
    "discount": 10,
    "rating": 3.4,
    "location": "Champa Gali, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Ten Twenty Two - 1022",
    "cuisine": "North Indian, Asian, European, Japanese, Beverages, Mughlai, Desserts, Drinks Only",
    "priceForTwo": 1600,
    "distance": "9.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/2/20581872/664949a7df026c6dba2548cf2df28491_featured_v2.jpg",
    "discount": 15,
    "rating": 3.8,
    "location": "DDA Market, New Delhi",
    "isPromoted": true
  },
  {
    "name": "American Brew - All day American Breakfast & Cafe",
    "cuisine": "Cafe, Coffee, Beverages, Healthy Food, Italian, Continental, Pancake, Desserts",
    "priceForTwo": 1200,
    "distance": "6.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/20562003/9ac50cec0da425aa2b4275b3f4cdd961_featured_v2.jpg",
    "discount": 25,
    "rating": 4.4,
    "location": "Defence Colony, New Delhi",
    "isPromoted": false
  },
  {
    "name": "The Chatter House",
    "cuisine": "North Indian, Mỹ, Burger, Italian, Desserts, Beverages",
    "priceForTwo": 2500,
    "distance": "9.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/305240/bdf771b54bcce6011a00def61886f92b_featured_v2.jpg",
    "discount": null,
    "rating": 4.3,
    "location": "Epicuria Food Mall, Nehru Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Gulati",
    "cuisine": "North Indian, Mughlai, Biryani, Kebab, Desserts, Beverages",
    "priceForTwo": 2200,
    "distance": "2.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/799/019320f03175803dcb750751c688df8f_featured_v2.jpg",
    "discount": null,
    "rating": 4.5,
    "location": "Pandara Market, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Cecilia's Pizzeria",
    "cuisine": "Pizza",
    "priceForTwo": 1100,
    "distance": "9.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/21582281/7617ef0e533b748dd7ffb8ef2eb9d4f6_featured_v2.jpg",
    "discount": 10,
    "rating": "New",
    "location": "Rajouri Garden, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The Drunken Botanist",
    "cuisine": "Sushi, Italian, Continental, Asian, Chinese, Healthy Food, Desserts",
    "priceForTwo": 3000,
    "distance": "18.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/18649486/24c9a8d040cd65c989b2c7719d32ea1e_featured_v2.jpg",
    "discount": 20,
    "rating": 4.4,
    "location": "Cyber Hub, DLF Cyber City, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Team Kitchen and Bar",
    "cuisine": "North Indian, Chinese, Pizza, Fast Food, Desserts, Beverages, Bar Food, Pasta",
    "priceForTwo": 1000,
    "distance": "9.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/21418845/c694ab6a84e0234767490d01558be2a6_featured_v2.jpg",
    "discount": 10,
    "rating": 4.4,
    "location": "Cross River Mall, Karkardooma, New Delhi",
    "isPromoted": true
  },
  {
    "name": "You Mee",
    "cuisine": "Asian, Japanese, Sushi, Chinese, Thai, Desserts, Beverages",
    "priceForTwo": 2000,
    "distance": "18.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/4/18647454/da20a72ec56c91b277702e76615077ce_featured_v2.jpg",
    "discount": 10,
    "rating": 4.4,
    "location": "Cyber Hub, DLF Cyber City, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Uncultured Cafe And Bar",
    "cuisine": "Continental, Chinese, Italian, Finger Food, Fast Food, North Indian, Desserts, Beverages",
    "priceForTwo": 2500,
    "distance": "8.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/18441798/837171694bc0270f755548e4de2606db_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "Kailash Colony Market, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The Walk",
    "cuisine": "North Indian, Chinese, Pasta, Pizza, Momos, Sandwich, Fast Food, Beverages",
    "priceForTwo": 950,
    "distance": "23.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/20397821/8931b1396ca9a17bf3c80cb38db1efb3_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "Raj Nagar, Ghaziabad",
    "isPromoted": false
  },
  {
    "name": "Litchi Bistro",
    "cuisine": "Sandwich, European, Italian, Pizza, Pasta, Modern Indian",
    "priceForTwo": 1600,
    "distance": "9.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/21298707/03aba690019ac6c6c9f3c96216c9e841_featured_v2.jpg",
    "discount": 20,
    "rating": "New",
    "location": "Malviya Nagar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Flow Brew & Dine",
    "cuisine": "European, Asian, Japanese, Pasta, Pizza, North Indian, Desserts, Beverages",
    "priceForTwo": 3000,
    "distance": "10.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/20625226/546a138f062393a439c2c480d98bb883_featured_v2.jpg",
    "discount": null,
    "rating": 4.5,
    "location": "DLF Avenue, Saket, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Litchi Bistro",
    "cuisine": "Sandwich, European, Italian, Pizza, Pasta, Modern Indian",
    "priceForTwo": 1600,
    "distance": "9.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/21298707/03aba690019ac6c6c9f3c96216c9e841_featured_v2.jpg",
    "discount": 20,
    "rating": "New",
    "location": "Malviya Nagar, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Trippy Tequila",
    "cuisine": "Asian, North Indian, European, Burmese",
    "priceForTwo": 2200,
    "distance": "28.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20610729/33424099995e5621e3a11e7594179727_featured_v2.jpg",
    "discount": 10,
    "rating": 4.2,
    "location": "M3M International Financial Center, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Makhna Deli",
    "cuisine": "North Indian, Biryani, Seafood, Mughlai, Kebab, Desserts",
    "priceForTwo": 2000,
    "distance": "8.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/21547934/773f66330956b2e7e036a83a04ceb028_featured_v2.jpg",
    "discount": 10,
    "rating": 3.9,
    "location": "Kailash Colony, New Delhi",
    "isPromoted": true
  },
  {
    "name": "The Sky High",
    "cuisine": "North Indian, Chinese, Mughlai, Continental, Italian, Biryani, Beverages",
    "priceForTwo": 2000,
    "distance": "7.2 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/18395381/761fa3202ea61c25afb458c83f985e28_featured_v2.jpg",
    "discount": 20,
    "rating": 4.1,
    "location": "Ansal Plaza Mall, Khel Gaon Marg, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Canvas V. Plant Fwd Kitchen + Bar",
    "cuisine": "Continental, North Indian, Pizza, Italian, Pasta, Mỹ, Burger",
    "priceForTwo": 1500,
    "distance": "9.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/21136007/caf13bf332acc78fccecb335e333f03f_featured_v2.jpg",
    "discount": 10,
    "rating": 4.4,
    "location": "Panchsheel Park, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Tahia",
    "cuisine": "Turkish, North Indian, Italian, Chinese, Greek, Modern Indian, European, Asian",
    "priceForTwo": 2100,
    "distance": "18.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/chains/0/21125220/dcc41bda5e235677f87d8f0a8c9688c9_featured_v2.jpg",
    "discount": 10,
    "rating": 4.3,
    "location": "Hajipur, Noida",
    "isPromoted": false
  },
  {
    "name": "House Of Wok Prive",
    "cuisine": "Asian, Sushi, Chinese, Thai, Japanese, Seafood",
    "priceForTwo": 1800,
    "distance": "9 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/21137577/de29de176c50f53fa3c96ecbef8e098e_featured_v2.jpg",
    "discount": null,
    "rating": 4.5,
    "location": "Punjabi Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Pasta Street",
    "cuisine": "Italian, Pasta, Pizza, Continental, Salad, Healthy Food, Desserts, Beverages",
    "priceForTwo": 1800,
    "distance": "9.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/7/21410947/4123e65ff09e08be4239ae1a4f69c313_featured_v2.jpg",
    "discount": 10,
    "rating": 4.5,
    "location": "Punjabi Bagh, New Delhi",
    "isPromoted": false
  },
  {
    "name": "AIR - An Ivory Region",
    "cuisine": "Chinese, Salad, Momos, North Indian, Pizza, Beverages",
    "priceForTwo": 1900,
    "distance": "9.5 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/18856789/ce40fb2a1d3dcb104946e9eec8bed40d_featured_v2.jpg",
    "discount": 20,
    "rating": 3.3,
    "location": "Club Road, Punjabi Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Limitless Luxe",
    "cuisine": "European, Asian, Continental, North Indian, Pizza",
    "priceForTwo": 2200,
    "distance": "18.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/20526170/c04695bcf685ee02a1c2883ac76d3b9f_featured_v2.jpg",
    "discount": 20,
    "rating": 4.2,
    "location": "Skymark One, Noida",
    "isPromoted": false
  },
  {
    "name": "WILDE Kitchen and Bar",
    "cuisine": "European, Continental, Asian, North Indian, Mediterranean, Italian, Pizza, Bar Food",
    "priceForTwo": 1200,
    "distance": "8.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/21108881/9f2b5ddbe78696a6d4e893409912a1b6_featured_v2.jpg",
    "discount": 15,
    "rating": 4.2,
    "location": "Punjabi Bagh, New Delhi",
    "isPromoted": true
  },
  {
    "name": "Diggin",
    "cuisine": "Pizza, Pasta, Burger, Continental, Sandwich, Desserts, Beverages, Coffee",
    "priceForTwo": 1900,
    "distance": "3.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/18562836/8ffc3c3528f49d517fa001c1beb5134a_featured_v2.jpg",
    "discount": null,
    "rating": 4.2,
    "location": "Chanakyapuri, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Brew & Ice By Brown",
    "cuisine": "Chinese, Salad, Continental, Coffee, , Pizza, Bakery, Italian",
    "priceForTwo": 1000,
    "distance": "9.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/21028654/dd371b39541e1f81e0684f2ae5f7afc9_featured_v2.jpg",
    "discount": 10,
    "rating": 3.8,
    "location": "Nehru Place, New Delhi",
    "isPromoted": true
  },
  {
    "name": "CAD Tech Bar",
    "cuisine": "Bar Food, North Indian, Mughlai, Asian, Pizza, Fast Food, Shake, Beverages",
    "priceForTwo": 2200,
    "distance": "24.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/1/18953981/441b13b2d3300e2400a97a95ba77648b_featured_v2.jpg",
    "discount": 10,
    "rating": 4.1,
    "location": "32nd Avenue, Milestone, Gurgaon",
    "isPromoted": false
  },
  {
    "name": "Chard - Burgers Grill And Bar",
    "cuisine": "Burger, Continental, Coffee, Ice Cream, Beverages",
    "priceForTwo": 1000,
    "distance": "8.8 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/20746478/83f1b1b8458306a5b5993d79b6b586c1_featured_v2.jpg",
    "discount": null,
    "rating": 4.5,
    "location": "Basant Lok Market, Vasant Vihar, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Ek Premacha Chaha",
    "cuisine": "Tea, Beverages",
    "priceForTwo": 50,
    "distance": "12.9 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20764369/bfdd836b620b7f40850580bb8c52daf6_featured_v2.jpg",
    "discount": null,
    "rating": null,
    "location": "Khanpur, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Chache Di Hatti",
    "cuisine": "Street Food",
    "priceForTwo": 100,
    "distance": "6.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/3/6043/fd7a8acece4d1e2490bc8a642f7eee1e_featured_v2.jpg",
    "discount": null,
    "rating": 4.5,
    "location": "Kamla Nagar, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Fateh Chand Kachori",
    "cuisine": "Street Food",
    "priceForTwo": 100,
    "distance": "5.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/18937388/15f645fa91f572ebaaaf0f09e5e3601a_featured_v2.jpg",
    "discount": null,
    "rating": 4.4,
    "location": "Civil Lines, New Delhi",
    "isPromoted": false
  },
  {
    "name": "The Dakshiini Cafe",
    "cuisine": "South Indian, Desserts, Beverages",
    "priceForTwo": 100,
    "distance": "12.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/20986976/0c93e11a27e67be82cb19f7d00536bcb_featured_v2.jpg",
    "discount": null,
    "rating": 3.1,
    "location": "Sector 18, Noida",
    "isPromoted": false
  },
  {
    "name": "Shri Krishna Karas Dev Sweets",
    "cuisine": "Mithai, Chinese, Fast Food",
    "priceForTwo": 100,
    "distance": "12.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/19914856/92411c9956cd6a91c5c28f15f69447c0_featured_v2.jpg",
    "discount": null,
    "rating": 3.8,
    "location": "Wazirabad, Ghaziabad",
    "isPromoted": false
  },
  {
    "name": "Shri Balaji Variety Samosa",
    "cuisine": "Street Food",
    "priceForTwo": 100,
    "distance": "12.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/4/19464894/46175ab9fb87b87ad15e13e51c93c728_featured_v2.jpg",
    "discount": null,
    "rating": 3.2,
    "location": "Mayur Vihar Phase 3, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Chai Paratha Shudh A Veg Food Hub",
    "cuisine": "North Indian, Chinese, Fast Food",
    "priceForTwo": 100,
    "distance": "14.1 km",
    "image": "https://b.zmtcdn.com/data/pictures/0/21606720/bc8e0ccdf5f156a87448e9a7b2b286e7_o2_featured_v2.jpg",
    "discount": null,
    "rating": null,
    "location": "Indirapuram, Ghaziabad",
    "isPromoted": false
  },
  {
    "name": "Sharma Chhole Bhature",
    "cuisine": "Street Food",
    "priceForTwo": 100,
    "distance": "10.4 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/8968/ffe88d5b3471d5dd9b21d732239f5cc6_featured_v2.jpg",
    "discount": null,
    "rating": 4,
    "location": "Pitampura, New Delhi",
    "isPromoted": false
  },
  {
    "name": "YUMIVERSE",
    "cuisine": "Chinese, Fast Food, Beverages",
    "priceForTwo": 100,
    "distance": "17.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/21245528/ed1215ac835103ea4cb3189409f810f2_featured_v2.jpg",
    "discount": null,
    "rating": 3.7,
    "location": "Uttam Nagar, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Naveen's Corner",
    "cuisine": "Rolls",
    "priceForTwo": 100,
    "distance": "3.7 km",
    "image": "https://b.zmtcdn.com/data/pictures/6/18924876/2b4231ead19bda42eece98cd4c54e40d_featured_v2.jpg",
    "discount": null,
    "rating": 3.9,
    "location": "Karol Bagh, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Ali Paratha Wale",
    "cuisine": "Fast Food, North Indian, Street Food",
    "priceForTwo": 100,
    "distance": "12.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/8/20206948/ff7903534b8143a7d1419ca8e3fe67a2_featured_v2.jpg",
    "discount": null,
    "rating": null,
    "location": "Jasola, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Chandni Chowk Paratha Corner",
    "cuisine": "North Indian",
    "priceForTwo": 100,
    "distance": "6.6 km",
    "image": "https://b.zmtcdn.com/data/pictures/5/19184045/1afa8c7c5b09281ded8657a0836ceb90_featured_v2.jpg",
    "discount": null,
    "rating": 3.3,
    "location": "Laxmi Nagar, New Delhi",
    "isPromoted": false
  },
  {
    "name": "Samosa Man",
    "cuisine": "Street Food",
    "priceForTwo": 100,
    "distance": "14.3 km",
    "image": "https://b.zmtcdn.com/data/pictures/9/20581049/aef0e0f94fba0e5324602e5ca0279115_featured_v2.jpg",
    "discount": null,
    "rating": null,
    "location": "Sector 7, Dwarka, New Delhi",
    "isPromoted": false
  }
];
const container = document.getElementById("store_container");
const searchInput = document.getElementById("searchInput"); 


let list_ = "";

for (let i = 0; i < list_store.length; i++) {
    const res = list_store[i];

    let ratingshow = "";

    if (res.rating !== null && res.rating !== "New") {
          ratingshow = `<span class="rating_green">${res.rating} ★</span>`;
    } else {
        ratingshow = `<span class="rating_gray">New</span>`;
    }

    let discountText = "";
    if (res.discount !== null) {
         discountText = `<div style="color: blue; font-size: 12px;"> ${res.discount}</div>`;
    }

    list_ += `
        <div class="card">
            <img src="${res.image}" alt="${res.name}" class="card_img">
            <div class="card_content">
                <div>
                    <h3 class="res_name">${res.name}</h3>
                    <div class="res_cuisine">${res.cuisine}</div>
                    <div class="res_info"> ${res.location} | ${res.distance}</div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                    <div>
                        ${ratingshow}
                        <span style="font-size: 14px; color: #555; margin-left: 5px;">
                            ${res.priceForTwo}
                        </span>
                    </div>
                    ${discountText}
                </div>
            </div>
        </div>
    `;
}


container.innerHTML = list_;





searchInput.addEventListener("keyup", function(event) {
    const keyword = searchInput.value.toLowerCase().trim();

    let Search = ""; 
    for (let i = 0; i < list_store.length; i++) {
        const res = list_store[i];
        if (res.name.toLowerCase().includes(keyword) === false) {
            continue; 
        }
        let ratingHtml = "";
        if (res.rating !== null && res.rating !== "New") {
            ratingHtml = `<span class="rating-green">${res.rating} ★</span>`;
        } else {
            ratingHtml = `<span class="rating-gray">New</span>`;
        }
        let discountText = "";
        if (res.discount !== null) {
             discountText = `<div style="color: blue; font-size: 12px;"> ${res.discount}</div>`;
        }

        Search += `
        <div class="card">
            <img src="${res.image}" alt="${res.name}" class="card_img">
            <div class="card_content">
                <div>
                    <h3 class="res_name">${res.name}</h3>
                    <div class="res_cuisine">${res.cuisine}</div>
                    <div class="res_info"> ${res.location} | ${res.distance}</div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                    <div>
                        ${ratingHtml}
                        <span style="font-size: 14px; color: #555; margin-left: 5px;">
                            ${res.priceForTwo}
                        </span>
                    </div>
                    ${discountText}
                </div>
            </div>
        </div>
        `;
    }
    if (Search === "") {
        container.innerHTML = "<div>Không tìm thấy nhà hàng nào!</div>";
    } else {
        container.innerHTML = Search;
    }
});