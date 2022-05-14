import React from "react";
import Router from "next/router";
import { NextPage } from "next";
import cookie from "cookie";

const withoutAuth = (WrappedComponent: NextPage) => {
  const hocComponent: NextPage = ({ ...props }) =>
    React.createElement(WrappedComponent, props);

  hocComponent.getInitialProps = async (context) => {
    const token = cookie.parse(
      context.req ? context.req.headers.cookie || "" : document.cookie
    ).token;

    if (token) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: "/",
        });
        context.res?.end();
      } else {
        Router.replace("/");
      }
    }
    return {};
  };

  return hocComponent;
};

export default withoutAuth;
