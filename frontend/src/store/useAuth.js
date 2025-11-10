import { create } from "zustand";
import axios from "../libs/axios";

const useAth = create((set, get) => ({
  admin: JSON.parse(localStorage.getItem("echoda-admin")) || null,
  isSigningIn: false,

  loginNow: async (data, showMessage, navigate) => {},
  isAuth: async () => {},
  logout: async () => {},
}));

export default useAuth;
