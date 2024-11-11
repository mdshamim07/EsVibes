import AnimationContainer from "@/app/components/AnimationContainer";
import AddressContainer from "./_components/AddressContainer";

export default function page() {
  return (
    <AnimationContainer>
      <section>
        <AddressContainer />
        <div className="w-full mt-4">
          <div className="nav-border p-2 w-full">
            <div className="flex justify-between items-center">
              <h2>Shipping &amp; Billing</h2>
              <button className="btn">Edit</button>
            </div>
            <div className="text-sm mt-2">
              <p>
                Rakib Khan Shamim <span className="ml-2">1816628413</span>
              </p>
              <div className="flex items-center gap-2 mt-2">
                <button className="btn">Home</button>
                <p className="ml-2">
                  Boubazar, Army Vila, Arichpur, Tongi, Dhaka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationContainer>
  );
}
