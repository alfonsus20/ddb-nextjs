import axios from "axios";
import { GetServerSidePropsContext } from "next";

const requireAuth = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  return async (ctx: GetServerSidePropsContext) => {
    const { req , res} = ctx;
    const { token } = req.cookies;

    try {
      if (!token) {
        throw new Error("Token doesn't exist");
      }

      const { data } = await axios.get(
        "https://api.ddbrawijaya.com/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (isAdmin && !data.data.isAdmin) {
        throw new Error("Not Authorized");
      }

      return { props: { user: data.data } };
    } catch (e) {
      res.setHeader("Set-Cookie", `token=; max-age=0`)
      return { redirect: { destination: "/login" }, props: {} };
    }
  };
};

export default requireAuth;
