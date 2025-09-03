import { type Dispatch, type SetStateAction } from "react";

type Props = {
  imagePath: string;
  setOpenImage: Dispatch<SetStateAction<string | null>>;
};

export default function GalleryItem({ imagePath, setOpenImage }: Props) {
  return (
    <>
      <div
        className="p-2 w-full h-60 border-2 min-h-120 border-primary-400 rounded-2xl border-dashed cursor-pointer"
        onClick={() => {
          setOpenImage(imagePath);
        }}
      >
        <img
          src={imagePath}
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
    </>
  );
}
