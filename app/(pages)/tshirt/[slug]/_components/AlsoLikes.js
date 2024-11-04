import AlsoLikeItem from "./AlsoLikeItem";

export default function AlsoLikes() {
  return (
    <section>
      <h1 className="mb-2">You may also like</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        <AlsoLikeItem />
      </div>
    </section>
  );
}
