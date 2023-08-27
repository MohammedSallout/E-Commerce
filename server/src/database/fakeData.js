const fakeData = {
  users: [
    {
      username: "mohammed",
      email: "mohammed@example.com",
      password: "$2a$10$ijSZ0AfhqJj2Q0lSMdeFzeHjTeAB2E.c8Kz/kiNluffm2jyPi3h2K",
      userType: "admin",
    },
    {
      username: "mona",
      email: "mona@example.com",
      password: "$2a$10$ijSZ0AfhqJj2Q0lSMdeFzeHjTeAB2E.c8Kz/kiNluffm2jyPi3h2K",
      userType: "regular",
    },
  ],
  categories: [
    {
      name: "iPhone",
      img: "https://i.ibb.co/Jt14QJD/i-Phone-01.webp",
    },
    {
      name: "Tablets",
      img: "https://i.ibb.co/7NqnMMZ/9-300x300.jpg",
    },
    {
      name: "Laptop",
      img: "https://i.ibb.co/8YQ2KW6/10-300x300.jpg",
    },
    {
      name: "Accessories",
      img: "https://i.ibb.co/RBm1LxR/p4-300x300.jpg",
    },
  ],
  products: [
    {
      image: "https://i.ibb.co/Jt14QJD/i-Phone-01.webp",
      title: "iPhone 13 White Color",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
      price: 110.0,
      details: "",
      categoryId: 1,
    },
    {
      image: "https://i.ibb.co/brzsVrK/i-Phone-02.webp",
      title: "iPhone 13 Green Color",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
      price: 150.0,
      details: "",
      categoryId: 1,
    },
    {
      image: "https://i.ibb.co/R940mFr/Laptop-01.webp",
      title: "Laptop Apple Gray",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      price: 1280.0,
      details: "",
      categoryId: 3,
    },
  ],
  carts: [
    {
      image: "https://i.ibb.co/brzsVrK/i-Phone-02.webp",
      title: "iPhone 13 Green Color",
      price: 150.0,
      count: 2,
    },
  ],
};

export default fakeData;
