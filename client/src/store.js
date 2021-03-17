import axios from "axios";
import AppStatus from "./appStatus.js";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      loadedData: null,
      appStatus: AppStatus.INITIAL,
    };
  },
  getters: {
    loadedData(state) {
      return state.loadedData;
    },
    appStatus(state) {
      return state.appStatus;
    },
  },
  mutations: {
    setAppStatus(state, status) {
      state.appStatus = status;
    },
    setLoadedData(state, loadedData) {
      state.loadedData = loadedData;
    },
  },
  actions: {
    async fetchData(context, serverAddress) {
      try {
        context.commit("setAppStatus", AppStatus.LOADING);

        let response;
        if (serverAddress === "own") {
          const userPublicIP = await axios.get("https://ipapi.co/ip/");
          response = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}get_address_info/${userPublicIP.data}`);
        } else {
          response = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}get_address_info/${serverAddress}`);
        }

        if (response.data.success === false) {
          context.commit("setAppStatus", AppStatus.ERROR);
        } else if (response.data.data.type === null || response.data.data.continent_code === null) {
          context.commit("setAppStatus", AppStatus.NOT_FOUND);
        } else {
          context.commit("setAppStatus", AppStatus.LOADED);
          context.commit("setLoadedData", response.data);
        }
      } catch (e) {
        context.commit("setAppStatus", AppStatus.ERROR);
      }
    },
  },
});
