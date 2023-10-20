import React from "react";

const BookForm = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  handleSubmit,
  setWood,
  setFinishing,
  setSeat,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <h6 className="font-semibold">MATERIAL OPTION</h6>

          <div className="flex gap-3 items-center flex-wrap">
            <p>wood :</p>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="wood"
                id="wood"
                onChange={() => setWood("teak")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>teak</p>
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="wood"
                id="wood"
                onChange={() => setWood("white oak")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>white oak</p>
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="wood"
                id="wood"
                onChange={() => setWood("mahogany")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>mahogany</p>
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="wood"
                id="wood"
                required
                onChange={() => setWood("mindi")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>mindi</p>
              </div>
            </label>
          </div>

          <div className="flex gap-3 items-center flex-wrap">
            <p>finishing :</p>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="finishing"
                id="finishing"
                onChange={() => setFinishing("oil")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>oil</p>
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="finishing"
                id="finishing"
                onChange={() => setFinishing("clear PU")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>clear PU</p>
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="finishing"
                id="finishing"
                onChange={() => setFinishing("black satin")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>black stain</p>
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="finishing"
                id="finishing"
                onChange={() => setFinishing("walnut satin")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>walnut stain</p>
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="finishing"
                id="finishing"
                required
                onChange={() => setFinishing("custom stain")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>custom stain</p>
              </div>
            </label>
          </div>

          <div className="flex gap-3 items-center flex-wrap">
            <p>seat & backrest :</p>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="seat"
                id="seat"
                onChange={() => setSeat("woven ratan")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>woven rattan</p>
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="seat"
                id="seat"
                onChange={() => setSeat("fabric")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>fabric</p>
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="seat"
                id="seat"
                required
                onChange={() => setSeat("leather")}
              />
              <div className="bg-white outline outline-1 outline-black px-3 py-1 peer-checked:bg-black peer-checked:text-white">
                <p>leather</p>
              </div>
            </label>
          </div>

          <h6 className="font-semibold">QUANTITY</h6>

          <div className="flex gap-3 items-center">
            <div
              className="relative w-6 h-6 outline outline-1 outline-black flex items-center justify-center cursor-pointer"
              onClick={() => decreaseQuantity()}
            >
              <div className="w-3 h-0.5 bg-black m-auto"></div>
            </div>
            <p>{quantity}</p>
            <div
              className="relative w-6 h-6 outline outline-1 outline-black flex items-center justify-center cursor-pointer"
              onClick={() => increaseQuantity()}
            >
              <div className="w-3 h-0.5 bg-black m-auto"></div>
              <div className="absolute w-0.5 h-3 bg-black"></div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 text-md text-primary-red hover:text-white hover:bg-primary-red outline outline-1 outline-primary-red py-3 sm:px-7 w-full"
        >
          BOOK NOW
        </button>
      </form>
    </div>
  );
};

export default BookForm;
