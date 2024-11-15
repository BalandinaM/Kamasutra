

let initialState = {
  navList: [
    {id:1, item: 'Profile', href:'/profile/'},
    {id:2, item:'Messages', href:'/dialogs'},
    {id:3, item:'News', href:'/news'},
    {id:4, item:'Music', href:'/music'},
    {id:5, item:'Settings', href:'/settings'},
    {id:6, item:'Search friends', href:'/users'},
    {id:7, item:'Login', href:'/login'},
  ],
};

const navBarReducer = (state = initialState, action) => {


      return state;
}

export default navBarReducer;
