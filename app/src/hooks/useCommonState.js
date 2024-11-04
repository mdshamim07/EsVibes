import { useContext } from "react";
import { CommonContext } from "../context";

export default function useCommonState() {
  const { common, setCommon } = useContext(CommonContext);
  return { common, setCommon };
}
