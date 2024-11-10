export default function loading() {
  return (
    <main className="flex justify-between min-h-screen flex-col md:flex-row gap-4 mt-6">
      <div className="w-full md:w-1/2">
        <div className="bg-black-900 anim-bg w-[100px] mt-4 h-4" />
        <div className="bg-secondary anim-bg w-full mt-2 h-4" />
        <div className="bg-secondary anim-bg w-[100px] mt-2 h-4" />
        <div className="bg-secondary anim-bg w-full mt-2 h-[320px]" />
      </div>
    </main>
  );
}
