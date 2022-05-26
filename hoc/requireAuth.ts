import { GetServerSidePropsContext } from "next";
import axios from "axios";

const requireAuth = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;
    const { token } = req.cookies;

    try {
      if (!token) {
        throw new Error("Token doesn't exist");
      }

      const { data } = await axios.get(
        "https://ddb-backend.herokuapp.com/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (isAdmin && !data.data.isAdmin) {
        throw new Error();
      }

      return { props: { user: data.data } };
    } catch (e) {
      return { redirect: { destination: "/login" }, props: {} };
    }
  };
};

export default requireAuth;
