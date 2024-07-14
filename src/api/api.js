import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "ab49972a-032b-43a2-a193-ad761125a555",
    Authorization: "Bearer 567f3de3-58fd-4adc-b79b-dd18d8410e8d",
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

  getUserStatus(id = 2) {
    return instance.get(`profile/status/` + id).then((response) => response.data);
  }
};

