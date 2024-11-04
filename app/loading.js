export default function loading() {
  return (
    <main className="flex justify-between flex-col md:flex-row gap-4 mt-6">
      <div className="w-full md:w-1/2">
        <div className="bg-gray-600 anim-bg w-[100px] mt-4 h-4" />
        <div className="bg-gray-600 anim-bg w-full mt-2 h-4" />
        <div className="bg-gray-600 anim-bg w-[100px] mt-2 h-4" />
        <div className="bg-gray-600 anim-bg w-full mt-2 h-[320px]" />
      </div>
      <div className="bg-gray-600 anim-bg w-full hidden sm:block md:w-1/2 mt-2 h-[400px]" />
    </main>
  );
}
