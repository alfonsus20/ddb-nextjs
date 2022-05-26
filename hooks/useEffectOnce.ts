import { EffectCallback, useEffect } from "react";

function useEffectOnce(cb: EffectCallback) {
  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useEffectOnce;
