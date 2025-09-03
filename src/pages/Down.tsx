import Button from "../components/common/Button";

export default function Down() {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] text-center px-6">
      <img src="empty.png" alt="Service Down" />

      <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
        Our website seems to be down
      </h1>

      <p className="text-gray-600 max-w-lg text-base md:text-xl">
        You can try refreshing the page, or if the problem persists, please
        reach out to us.
      </p>

      <div className="mt-4 mb-4">
        <p className="text-grayscale-600">
          Email:{" "}
          <a
            href="mailto:support@example.com"
            className="text-primary-600 underline"
          >
            support@example.com
          </a>
        </p>
        <p className="text-grayscale-600">
          Phone:{" "}
          <a href="tel:+1234567890" className="text-primary-600 underline">
            +1 (234) 567-890
          </a>
        </p>
      </div>

      <Button
        handler={() => window.location.replace("/")}
        classes="mt-6 px-6 py-2 text-lg bg-blue-600"
      >
        Refresh Page
      </Button>
    </div>
  );
}
