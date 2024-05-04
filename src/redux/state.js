// let srcImg = 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais';
// let postsData = [
//   {id: 1, message: 'Hi, how are you?', like: '78'},
//   {id: 2, message: 'It is my second post!', like: '1'},
//   {id: 3, message: 'It is my first post! Hello, world! Hello, React!', like: '100'},
// ];

// let dialogsData = [
//   {id: 1, name: 'Sergey'},
//   {id: 2, name: 'Katy'},
//   {id: 3, name: 'Vera'},
//   {id: 4, name: 'Alise'},
//   {id: 5, name: 'Helen'},
//   {id: 6, name: 'Dimon'},
// ];

// let postData = [
//   {id: 1, message: 'Hi!'},
//   {id: 2, message: 'The style prop works like a normal style prop'},
//   {id: 3, message: 'You can pass a render prop as children to customize the content'},
//   {id: 4, message: 'Please note that this API is marked unstable and may be subject to breaking changes without a major release.'},
// ];

let state = {

  profilePage: {
    srcImg: 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338& ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais',

    postsData: [
      {id: 1, message: 'Hi, how are you?', like: '78'},
      {id: 2, message: 'It is my second post!', like: '1'},
      {id: 3, message: 'It is my first post! Hello, world! Hello, React!', like: '100'},
    ],
  },

  dialogsPage: {
    dialogsData: [
      {id: 1, name: 'Sergey'},
      {id: 2, name: 'Katy'},
      {id: 3, name: 'Vera'},
      {id: 4, name: 'Alise'},
      {id: 5, name: 'Helen'},
      {id: 6, name: 'Dimon'},
    ],

    postData: [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'The style prop works like a normal style prop'},
      {id: 3, message: 'You can pass a render prop as children to customize the content'},
      {id: 4, message: 'Please note that this API is marked unstable and may be subject to breaking changes without a major release.'},
    ],
  },

  navBar: {
    navList: [
      {item: 'Profile', href:'/profile'},
      {item:'Messages', href:'/dialogs'},
      {item:'News', href:'/news'},
      {item:'Music', href:'/music'},
      {item:'Settings', href:'/settings'},
    ]
  }

}

export default state;
