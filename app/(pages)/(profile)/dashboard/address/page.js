import AnimationContainer from "@/app/components/AnimationContainer";

import getAddressQuery from "@/app/backend/queries/getAddressQuery";
import { auth } from "@/auth";

import UserCredentials from "@/app/src/UserCredentials";

import AddressContent from "./_components/AddressContent";
import AddressContainer from "./_components/AddressContainer";
import AddressField from "./_components/AddressField";
import ActualAddress from "./_components/ActualAddress";

export default async function page() {
  const userAuth = await auth();
  const userId = userAuth?.user?.id;
  const user = await UserCredentials(userId);
  const address = await getAddressQuery(userId);

  return (
    <AnimationContainer>
      <AddressContent user={user} address={address}>
        <AddressContainer>
          <AddressField mode="city" />
          <AddressField />
          <ActualAddress address={address} />
        </AddressContainer>
      </AddressContent>
    </AnimationContainer>
  );
}
