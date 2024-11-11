"use client";
import AddressBox from "@/app/(pages)/checkout/_components/AddressBox";
import useCommonState from "@/app/src/hooks/useCommonState";

export default function AddressContent({ user, address, children }) {
  const { common, setCommon } = useCommonState();
  let content;
  if (common?.addressContent) {
    content = children;
  } else if (!address) {
    content = children;
  } else {
    content = <AddressBox address={address} user={user} />;
  }
  return <section>{content}</section>;
}
