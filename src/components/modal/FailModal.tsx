import Button from "../common/Button";
import { useModal } from "./Modal";

export default function FailModal({ message }: { message: string }) {
  const { hideModal } = useModal();
  return (
    <div className="bg-red-100 p-8 rounded-2xl flex flex-col items-center justify-center gap-2 max-w-sm w-full text-center lg:min-w-xl">
      <img src="modal/bee_fail.png" alt="Happy action success bee" />
      <span className="text-red-500 text-3xl font-bold tracking-widest mt-6">
        FAIL
      </span>
      <p className="text-xl text-grayscale-500">{message}</p>
      <Button classes="text-xl py-2 min-w-24 mt-4" handler={hideModal}>
        OK
      </Button>
    </div>
  );
}
