export default function ProductImageModal() {
  return (
    <div className="hidden full-page-img-show fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] z-50 flex justify-center items-center">
      <button className="btn absolute left-4 top-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <img
        className="cursor-pointer h-[450px] transition-all duration-150"
        src="https://fabrilife.com/products/6382185fc301d-square.jpg?v=20"
        alt=""
      />
    </div>
  );
}
