function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#A89589]">
          404
        </p>

        <h1 className="mt-4 font-display text-6xl text-[#342A26]">
          Page Not Found
        </h1>

        <p className="mt-4 text-[#6F625B]">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;