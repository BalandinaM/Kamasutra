const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
  usersData: [
    {id: 1, followed: false, fullName:  {name: 'Sergey', surname: 'Ivanov'}, location: {country: 'Belarus', city: 'Minsk'}, title: 'Hey-Hey!!!', hrefImg: 'https://img.freepik.com/free-photo/cute-dog-with-sunglasses-posing-for-portrait-generative-ai_188544-12590.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1714348800&semt=ais',},
    {id: 2, followed: false, fullName: {name: 'Katy', surname: 'Petrova'}, location: {country: 'Russia', city: 'Moskow'}, title: 'Hey-Hey!!!', hrefImg: 'https://i.pinimg.com/736x/37/d1/28/37d12877e296094971827f1e8b909bd4.jpg',},
    {id: 3, followed: true, fullName: {name: 'Vera', surname: 'Ivanova'}, location: {country: 'Russia,', city: 'Orel'}, title: 'Hey-Hey!!!', hrefImg: 'https://avavatar.ru/images/full/47/HF24oiPlGyYzBjF2.jpg',},
    {id: 4, followed: false, fullName: {name: 'Alise', surname: 'Sidorova'}, location: {country: 'Russia', city: 'Ekaterinburg'}, title: 'Hey-Hey!!!', hrefImg: 'https://shapka-youtube.ru/wp-content/uploads/2021/10/ava-sobaka-v-kapyushone.jpg',},
    {id: 5, followed: true, fullName: {name: 'Helen', surname: 'Peterson'}, location: {country: 'Russia', city: 'Ekaterinburg'}, title: 'Hey-Hey!!!', hrefImg: 'https://kartinki.pics/uploads/posts/2022-05/1652237087_1-kartinkin-net-p-kartinki-na-avu-sobaki-1.jpg',},
    {id: 6, followed: true, fullName: {name: 'Dimon', surname: 'Petrov'}, location: {country: 'Russia', city: 'Ekaterinburg'}, title: 'Hey-Hey!!!', hrefImg: 'https://i.pinimg.com/originals/f8/2c/4d/f82c4d72749605a09c761cd0825ff330.jpg',},
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return Object.assign({}, state, {
        usersData: state.usersData.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      })
    case UNFOLLOW:
    return Object.assign({}, state, {
      usersData: state.usersData.map( u => {
        if (u.id === action.userId) {
          return {...u, followed: false}
        }
        return u;
      })
    })
    case SET_USERS: {
      return Object.assign({}, state, {
        usersData: action.users,
        ...state.usersData,
      })
    }

    default:
      return state;
  }
}


// const usersReduser = (state = initialState, action) => {
//     switch(action.type) {
//         case FOLLOW:
//             return {
//                 ...state,
//                 usersData: state.usersData.map( u =>  {
//                     if (u.id === action.userId) {
//                         return {...u, followed: true}
//                     }
//                     return u;
//                 })
//             }
//         case UNFOLLOW:
//             return {
//                 ...state,
//                 usersData: state.usersData.map( u =>  {
//                     if (u.id === action.userId) {
//                         return {...u, followed: false}
//                     }
//                     return u;
//                 })
//             }
//         case SET_USERS: {
//             return { ...state, usersData: [ ...state.usersData, ...action.usersData ]}
//         }
//         default:
//             return state;
//     }
// }

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
