export default function SecondaryLoadingBtn({
  loading,
  onClick,
  children,
  className,
}) {
  return (
    <button className={className} onClick={onClick}>
      {loading ? (
        <>
          <span className="mr-2 inline-block w-[10px] h-[10px] border text-white border-white rounded-full anim border-r-transparent" />
          Loading
        </>
      ) : (
        children
      )}
    </button>
  );
}
