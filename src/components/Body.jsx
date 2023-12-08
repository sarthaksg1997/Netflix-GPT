import React, { useEffect } from "react";
import Login from "./Login";
import Home from "./Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../common/firebase";
import { useDispatch } from "react-redux";
import { signin, signout } from "../common/redux/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/home", element: <Home /> },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email } = user;
        dispatch(signin({ uid, email }));
        // ...
      } else {
        // User is signed out
        dispatch(signout());
        // ...
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
