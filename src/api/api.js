import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "8312cd1f-3942-4c8e-84a0-fb6a8c65bd02",
    Authorization: "Bearer 80a37311-ca79-4d3e-9c60-f9f4cf4b3bf0",
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(id) {
    return instance.post(`follow/` + id);
  },

  unFollow(id) {
    return instance.delete(`follow/` + id);
  },
};

export const authAPI = {
  getMyProfile() {
    return instance.get(`auth/me`).then(response => response.data);
  },
}

export const profileAPI = {
  getProfile(id = 2) {
    return instance.get(`profile/` + id).then((response) => response.data);
  },
};

