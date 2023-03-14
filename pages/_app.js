import "../styles/global.css";

import React from "react";
import { useState, useContext, useRef } from "react";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    let emailValue = data.email;
    let numberValue = data.number;
    let passwordValue = data.password;

    if (emailValue === "") {
      setErrorFor(email);
    } else {
      setSuccessFor(email);
    }
    if (numberValue === "") {
      setErrorFor(number);
    } else {
      setSuccessFor(number);
    }
    if (passwordValue === "") {
      setErrorFor(password);
    } else {
      setSuccessFor(password);
    }
    if (emailValue === "" && numberValue == "" && passwordValue === "") {
      return null;
    } else {
      router.push("/posts/signIn");
    }
  };
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

  function setErrorFor(input) {
    const formControl = input.parentElement;
    console.log(formControl);
    // errorContainer.current
    formControl.className = "form-control error";
  }
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    console.log(formControl);
    formControl.className = "form-control success";
  }
  const successContainer = useRef();
  const errorContainer = useRef();
  return (
    <AppContext.Provider
      value={{
        data,
        handleForm,
        handleSubmit,
        successContainer,
        errorContainer,
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
