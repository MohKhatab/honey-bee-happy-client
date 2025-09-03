import { Link } from "react-router";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center pt-48 pb-24 text-center px-6">
      <img src="empty.png" alt="Service Down" />

      <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
        Hmm, no bees here...
      </h1>

      <p className="text-gray-600 max-w-lg text-base md:text-xl">
        Looks like this page doesn’t exist (404 error).
      </p>

      <Link to="/">
        <Button classes="mt-6 px-6 py-2 text-lg bg-blue-600">
          Return to home
        </Button>
      </Link>
    </div>
  );
}
