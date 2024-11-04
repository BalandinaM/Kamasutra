import { usersAPI } from '../api/api';

const FOLLOW = "kamasutra/users/FOLLOW";
const UNFOLLOW = "kamasutra/users/UNFOLLOW";
const SET_USERS = "kamasutra/users/SET_USERS";
const SET_CURRENT_PAGE = "kamasutra/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "kamasutra/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "kamasutra/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "kamasutra/users/TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
  usersData: [
  ],
  pageSize: 5, //задаем сами сколько нужно
  totalUsersCount: 25, //эта цифра должна приходить с сервака
  currentPage: 3,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };
    case SET_USERS:
      return { ...state, usersData: action.users, ...state.usersData };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
        ...state.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
        ...state.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching, ...state.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching //если isFetching == true
          ? [...state.followingInProgress, action.userId] //в массив followingInProgress добавляем id пользователся который пришел в action
          : state.followingInProgress.filter((id) => id !== action.userId) // иначе  проходимся по массиву и оставляем в массиве элементы не равные action.userId
      };
    }

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setCurrentPage(currentPage))
};

export const follow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await usersAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(followSuccess(userId));
    dispatch(toggleFollowingProgress(false, userId));
  }
};

export const unfollow = (userId) =>  async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await usersAPI.unFollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unfollowSuccess(userId));
    dispatch(toggleFollowingProgress(false, userId));
  }
};

export default usersReducer;
