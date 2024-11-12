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
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instance
      .get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
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

  login(email, password, rememberMe, captcha) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },

  logout() {
    return instance.delete(`auth/login`);
  },

  getCaptcha() {
    return instance.get(`security/get-captcha-url`)
    //.then(response => console.log(response.data.url));
  }
}

export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/` + id).then((response) => response.data);
  },

  getUserStatus(id) {
    return instance.get(`profile/status/` + id).then((response) => response.data);
  },

  updateUserStatus(status) {
    return instance.put(`profile/status`, {status: status});
  },

  updateUserPhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};

