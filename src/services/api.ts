import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL || process.env.API_BASE_URL
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("auth_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  r => r,
  async error => {
    // TODO: handle refresh token flow if backend issues short-lived JWT
    return Promise.reject(error);
  }
);

export const ApiService = {
  getNews: () => api.get("/api/news").then(r => r.data),
  getCalendar: () => api.get("/api/calendar").then(r => r.data),
  getGP: (id: string) => api.get(`/api/grandprix/${id}`).then(r => r.data),
  postPrediction: (payload: any) => api.post("/api/pronostic", payload).then(r => r.data),
  getPredictions: (userId: string) => api.get(`/api/pronostic/${userId}`).then(r => r.data),
  getLeaderboard: () => api.get("/api/leaderboard").then(r => r.data),
  authWithFirebase: (firebaseToken: string) => api.post("/api/auth/firebase", { token: firebaseToken }).then(r => r.data),
  getQuizToday: () => api.get("/api/quiz/today").then(r => r.data),
  answerQuiz: (answer: { questionId: string; choice: number }) => api.post("/api/quiz/answer", answer).then(r => r.data)
};

export default api;