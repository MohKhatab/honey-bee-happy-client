import * as Slider from "@radix-ui/react-slider";
import type { Dispatch } from "react";

type Props = {
  minVal: number;
  setMinVal: Dispatch<number>;
  maxVal: number;
  setMaxVal: Dispatch<number>;
  min: number;
  max: number;
  step?: number;
  handlePriceChange: (min: number, max: number) => void;
};

const RadixMultiRangeSlider = ({
  minVal,
  setMinVal,
  maxVal,
  setMaxVal,
  min,
  max,
  step = 1,
  handlePriceChange,
}: Props) => {
  // Radix slider's onValueChange provides an array of numbers, e.g., [min, max]
  const handleValueChange = (values: number[]) => {
    const [newMin, newMax] = values;
    setMinVal(newMin);
    setMaxVal(newMax);
  };

  const handleChange = (min: number, max: number) => {
    handlePriceChange(min, max);
  };

  return (
    <div>
      {/* The component itself */}
      <Slider.Root
        className="relative flex items-center w-full h-5 select-none touch-none"
        // The value is an array for multi-thumb sliders
        value={[minVal, maxVal]}
        onValueChange={handleValueChange}
        onValueCommit={(values) => handleChange(values[0], values[1])}
        min={min}
        max={max}
        step={step}
        minStepsBetweenThumbs={1} // Prevents thumbs from overlapping
      >
        <Slider.Track className="relative flex-grow h-3 rounded-full bg-grayscale-200">
          {/* This is the highlighted range between the thumbs */}
          <Slider.Range className="absolute h-full rounded-full bg-primary-500" />
        </Slider.Track>

        {/* The first thumb (min value) */}
        <Slider.Thumb
          className="block w-5 h-5 bg-primary-500 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
          aria-label="Minimum value"
        />

        {/* The second thumb (max value) */}
        <Slider.Thumb
          className="block w-5 h-5 bg-primary-500 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
          aria-label="Maximum value"
        />
      </Slider.Root>

      {/* Your labels can remain the same */}
      <div className="flex justify-between mt-3 text-sm font-semibold text-grayscale-600">
        <span>Min: {minVal} €</span>
        <span>Max: {maxVal} €</span>
      </div>
    </div>
  );
};

export default RadixMultiRangeSlider;
