import { useEffect, useRef } from "react";

function useMounted() {
  const ref = useRef<boolean>(false);

  useEffect(() => {
    ref.current = true;
  }, []);

  return { mounted: ref.current };
}

export default useMounted;
