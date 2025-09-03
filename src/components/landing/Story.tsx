export default function Story() {
  return (
    <div className="relative">
      {/* <img
        src="garden.png"
        className="absolute h-full w-full object-cover -z-10 select-none"
        draggable="false"
      /> */}
      {/* <div className="bg-linear-to-t from-secondary-100 to-secondary-300 py-8"></div> */}

      <div className="default-margin">
        <div className="py-14 md:py-24 flex flex-wrap">
          <h2 className="text-primary-500 font-semibold text-5xl w-full mb-8">
            Our Story
          </h2>

          <div className="sm:w-1/2 sm:pr-6 space-y-6">
            <p className="text-xl text-grayscale-600">
              Lorem ipsum dolor sit amet consectetur. In suspendisse sagittis
              nunc vitae euismod ultricies. Parturient fames nulla integer neque
              morbi. Mi id dui sagittis massa libero arcu penatibus augue
              senectus. Morbi enim lorem ut mi eget enim amet elementum arcu.
              Interdum rhoncus congue ac diam auctor leo volutpat augue diam.
              Bibendum sem ultrices dignissim non nisl nisi id at metus. Egestas
              rhoncus egestas posuere
            </p>
            <img
              src="images/story2.webp"
              className="rounded-2xl w-full h-132 object-cover grow-0 shadow-xl border-secondary-300"
              alt=""
            />
          </div>
          <div className="mt-10 sm:mt-0 sm:w-1/2 space-y-6">
            <img
              src="images/story.webp"
              className="rounded-2xl w-full h-80 object-cover grow-0 shadow-xl"
              alt=""
            />
            <p className="text-xl text-grayscale-600">
              Lorem ipsum dolor sit amet consectetur. In suspendisse sagittis
              nunc vitae euismod ultricies. Parturient fames nulla integer neque
              morbi. Mi id dui sagittis massa libero arcu penatibus augue
              senectus. Morbi enim lorem ut mi eget enim amet elementum arcu.
              Interdum rhoncus congue ac diam auctor leo volutpat augue diam.
              Bibendum sem ultrices dignissim non nisl nisi id at metus. Egestas
              rhoncus egestas posuere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
