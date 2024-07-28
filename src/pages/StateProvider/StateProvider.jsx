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
  // const login = async (formData) => {
  //   try {
  //     const res = await axios.post("http://localhost:3000/api/auth", formData);
  //     // Check if token exists in response
  //     if (res.data && res.data.token) {
  //       setCookies("token", res.data.token);
  //       console.log("Login successful");
  //     } else {
  //       console.log("token not found ");
  //     }
  //     setCookies("token", res.data.token);
  //     console.log("successfully loged in");
  //   } catch (err) {
  //     console.log("login faild ");
  //   }
  // };
  //login send the data to db
  const login = async (formData) => {
    try {
      // from backend
      let res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/auth",
        data: formData,
      });
      setCookies("token", res.data.token);
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  //signup and send the date to db
  const signUp = async (formData) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/users",
        data: formData,
      });
      setCookies("token", res.data.token);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //logout function
  const logout = () => {
    ["token"].forEach((obj) => removeCookie(obj));
  };

  //use memo memoization for avoiding rerendering or recoputing untill cookies changed
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
