import profileReduser, {addPostActionCreator} from "./profileReducer";

it("length of posts should be incremented", () => {
  //1. исходные данные для теста. test data
  let action = addPostActionCreator("it-kamasutra.com");
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

  //2. action
  let newState = profileReduser(state, action);

  //3. проверяем свое ожидание. Expectation
  expect(newState.postsData.length).toBe(4);
});

