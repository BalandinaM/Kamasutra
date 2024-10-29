import profileReduser, {addPostActionCreator, deletePost, setUserStatus, addLike} from "./profileReducer";

let state = {
    postsData: [
      { id: 1, message: "Hi, how are you?", like: "78" },
      { id: 2, message: "It is my second post!", like: "1" },
      {
        id: 3,
        message: "It is my first post! Hello, world! Hello, React!",
        like: "100",
      },
    ],
  };

it("length of posts should be incremented", () => {
  //1. исходные данные для теста. test data
  let action = addPostActionCreator("it-kamasutra.com");

  //2. action
  let newState = profileReduser(state, action);

  //3. проверяем свое ожидание. Expectation
  expect(newState.postsData.length).toBe(4);
});

it("added message must be correct", () => {
  //1. исходные данные для теста. test data
  let action = addPostActionCreator("it-kamasutra.com");

  //2. action
  let newState = profileReduser(state, action);

  //3. проверяем свое ожидание. Expectation
  expect(newState.postsData[3].message).toBe("it-kamasutra.com");
});

it("after deleting the message, the length of the array should decrease", () => {
  //1. исходные данные для теста. test data
  let action = deletePost(2);

  //2. action
  let newState = profileReduser(state, action);

  //3. проверяем свое ожидание. Expectation
  expect(newState.postsData.length).toBe(2);
});

it("after deleting length should not be decrement if id is incorrect", () => {
  //1. исходные данные для теста. test data
  let action = deletePost(100);

  //2. action
  let newState = profileReduser(state, action);

  //3. проверяем свое ожидание. Expectation
  expect(newState.postsData.length).toBe(3);
});

it("added status must be correct", () => {
  let action = setUserStatus("I'm a frontend developer");

  let newState = profileReduser(state, action);

  expect(newState.status).toBe("I'm a frontend developer");
})

it("likes counter should increase when clicked", () => {
 let action = addLike(1);

 let newState = profileReduser(state, action);

 expect(newState.postsData[0].like).toBe(100500)
})
