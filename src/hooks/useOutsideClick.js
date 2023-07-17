import { useEffect, useRef } from "react";

export const useOutsideClick =(handeler) =>{
    const ref = useRef();
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("OutSide Click");
          handeler();
        }
      };
      document.addEventListener("click", handleOutsideClick, true);

      return () =>
        document.removeEventListener("click", handleOutsideClick, true);
    }, [handeler]);
    return ref;
}