export default function Loading() {
  return (
    <>
      <div className="flex flex-col w-fit gap-2 items-center justify-center">
        <img
          className="size-40 animate-spin block"
          src="dizzy_bee.png"
          alt="Loading"
        />
        <span className="text-3xl block mt-4 text-center font-semibold text-primary-500">
          Loading...
        </span>
      </div>
    </>
  );
}
