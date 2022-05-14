import React from "react";
import Router from "next/router";
import { NextPage } from "next";
import axios, { AxiosError } from "axios";
import cookie from "cookie";

const loginPath = "/login";

const checkUserAuthentication = async (cookieString: string) => {
  let user = null;

  try {
    const { data } = await axios.get("https://ddb-backend.herokuapp.com/profile", {
      headers: { Authorization: `Bearer ${cookie.parse(cookieString).token}` },
    });
    user = data.data;
  } catch (e) {
    console.log((e as AxiosError).message);
  }

  return user;
};

const withAuth = (
  WrappedComponent: NextPage,
  isAdminRoute: boolean = false
) => {
  const hocComponent: NextPage = ({ ...props }) =>
    React.createElement(WrappedComponent, props);

  hocComponent.getInitialProps = async (context) => {
    const user = await checkUserAuthentication(
      context.req ? context.req.headers.cookie || "" : document.cookie
    );

    if (!user) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: loginPath,
        });

        context.res?.end();
      } else {
        Router.replace(loginPath);
      }
      return {};
    }

    if (isAdminRoute && !user.isAdmin) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: "/profil",
        });
        context.res?.end();
      } else {
        Router.replace("/profil");
      }
      return {};
    }

    return { user };
  };

  return hocComponent;
};

export default withAuth;
