import { createContext, useContext, useReducer } from "react";
import { useMemo } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
//------------------create context
const stateContext = createContext();
//setprovider for allchildren
export default function StateProvider({ reducer, initialValue, children }) {
  //create cookies
  const [cookies, setCookies, removeCookie] = useCookies();
  //login
  const login = async (formData) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth", formData);
      // Check if token exists in response
      if (res.data && res.data.token) {
        setCookies("token", res.data.token);
        console.log("Login successful");
      } else {
        console.log("token not found ");
      }
      setCookies("token", res.data.token);
      console.log("successfully loged in");
    } catch (err) {
      console.log("login faild ");
    }
  };

  //signup
  const signUp = async (formData) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/users",
        data: formData,
      });
      setCookies("token", res.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  //logout function
  const logout = () => {
    ["token"].forEach((obj) => removeCookie(obj));
  };

  //use memo
  const auth_value = useMemo(
    () => ({
      cookies,
      login,
      logout,
      signUp,
    }),
    [cookies]
  );
  //------------------
  return (
    <stateContext.Provider
      value={{
        state: useReducer(reducer, initialValue),
        auth: auth_value,
      }}
    >
      {children}
    </stateContext.Provider>
  );
}
//export it to use without initialize
export const useStateValue = () => useContext(stateContext);
