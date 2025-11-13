const DemoPage = () => {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center space-y-8">
      <style>{`
        @keyframes lyric-sweep {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: 0% 0;
          }
        }
      `}</style>
      <div className="relative inline-block">
        <span className="text-6xl font-semibold tracking-wide text-slate-300 select-none">Demo</span>
        <span className="pointer-events-none absolute inset-0 text-6xl font-semibold tracking-wide text-transparent select-none">
          <span className="block animate-[lyric-sweep_3.5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.sky.500)_0%,theme(colors.sky.500)_50%,transparent_50%,transparent_100%)] bg-[length:220%_100%] bg-clip-text">
            Demo
          </span>
        </span>
      </div>
    </div>
  );
};

export default DemoPage;
