import { defineStore } from "pinia";

export interface userState {
  token: string;
}

export const user = defineStore("user", {
  state: (): userState => {
    return {
      token: "",
    };
  },
  getters: {},

  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: "token",
        storage: localStorage,
        paths: ["token"],
      },
    ],
  },
});
