import dialogsReduser, {addMessageActionCreator}  from "./dialogsReducer";

let state = {
  postData: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'The style prop works like a normal style prop'},
    {id: 3, message: 'You can pass a render prop as children to customize the content'},
    {id: 4, message: 'Please note that this API is marked unstable and may be subject to breaking changes without a major release.'},
  ],
};

it("length of posts should be incremented", () => {
  //1. исходные данные для теста. test data
  let action = addMessageActionCreator("Hello!");

  //2. action
  let newState = dialogsReduser(state, action);

  //3. проверяем свое ожидание. Expectation
  expect(newState.postData.length).toBe(5);
});

it("added message must be correct", () => {
  //1. исходные данные для теста. test data
  let action = addMessageActionCreator("Hello");

  //2. action
  let newState = dialogsReduser(state, action);

  //3. проверяем свое ожидание. Expectation
  expect(newState.postData[4].message).toBe("Hello");
});
