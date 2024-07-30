import { createContext, useContext, useReducer } from "react";
import { useMemo } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
//------------------
//------------------create context
const stateContext = createContext();
//staeprovider for allchildren components
export default function StateProvider({ reducer, initialValue, children }) {
  //create cookies
  const [cookies, setCookies, removeCookie] = useCookies();

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

  //signup and send the data to db
  const signUp = async (formData) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/users",
        data: formData,
      });
      setCookies("token", res.data.token);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  //logout function
  const logout = () => {
    ["token"].forEach((obj) => removeCookie(obj));
  };
  //use memo memoization for avoiding rerendering or recomputing untill cookies changed
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
//export it to use without initialize at each page
export const useStateValue = () => useContext(stateContext);
