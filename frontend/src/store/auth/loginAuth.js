import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '',
    password: '',
    isLoading: false,
    error: null,
    isAuthenticated: false,
  }),
  actions: {
    async login() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.post('/api/method/login', {
          usr: this.username,
          pwd: this.password,
        });
        if (response.data.message === 'Logged In') {
          this.isAuthenticated = true;
          // Optionally save session or token
        }
      } catch (err) {
        this.error = err.response?.data?.message || 'Login failed';
      } finally {
        this.isLoading = false;
      }
    },
    logout() {
      this.username = '';
      this.password = '';
      this.isAuthenticated = false;
      // Perform logout API call if needed
    },
  },
});
