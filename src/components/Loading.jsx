export function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="relative flex items-center justify-center p-4 h-fit w-fit animate-fadeIn">
        <div className="absolute flex items-stretch w-full h-full justify-stretch">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="blue"
              strokeDasharray="60 280"
              style={{
                transformOrigin: "center",
                transformBox: "fill-box",
              }}
              className="animate-spin"
            >
              {" "}
            </circle>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center w-auto p-8 text-white bg-black rounded-full h-fit aspect-square">
          <h1 className="text-3xl">videoask</h1>
          <span className="flex items-end gap-1">
            <span className="text-sm">by</span>
            <span className="text-md">Typeform</span>
          </span>
        </div>
      </div>
    </div>
  );
}
