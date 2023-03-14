import "../styles/global.css";

import React from "react";
import { useState, useContext } from "react";
import { useRouter } from "next/router";

const AppContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [data, setData] = useState({ email: "", number: "", password: "" });
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const router = useRouter();

  const handleSignIn = (e) => {
    e.preventDefault();
    let emailValue = data.email;
    let numberValue = data.number;
    let passwordValue = data.password;

    if (emailValue === "" && numberValue == "" && passwordValue === "") {
      return null;
    } else {
      router.push("/posts/verify");
    }
  };

  return (
    <AppContext.Provider
      value={{
        data,
        handleForm,
        handleSignIn,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
export const useAppContext = () => {
  return useContext(AppContext);
};
