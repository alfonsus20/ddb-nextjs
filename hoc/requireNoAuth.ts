import { GetServerSidePropsContext } from "next";

const requireNoAuth = () => {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;
    const { token } = req.cookies;

    try {
      if (token) {
        throw new Error("Require no token");
      }
      return { props: {} };
    } catch (e) {
      return { redirect: { destination: "/profil" }, props: {} };
    }
  };
};

export default requireNoAuth;
