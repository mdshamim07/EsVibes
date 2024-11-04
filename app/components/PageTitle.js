export default function PageTitle({title, subTitle}) {
  return (
    <div className="page-title flex justify-center items-center flex-col">
      <button className="btn">{title}</button>
      <h1 className="text-2xl font-bold mt-4">{subTitle}</h1>
    </div>
  );
}
