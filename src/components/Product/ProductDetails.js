import { useParams } from "react-router-dom";
import Data from "./ProductsData";
import { IoHeartOutline, IoCart } from "react-icons/io5";
function ProductDetails() {
  const { id } = useParams();
  const getSelectedProduct = () => {
    return Data.find((product) => product.id === id);
  };

  const product = getSelectedProduct();
  return (
    <div className="max-w-[1440px] font-rubik">
      <div>
        <img
          src="https://sneakersjoint.com/wp-content/uploads/2023/03/air-jordan-3-retro-white-cement-reimagined-sneakers-1-1260x1260.webp"
          alt=""
          className="relative max-h-72 mx-auto"
        />
        <IoHeartOutline className="text-3xl absolute top-4 right-4 " />
        <div className="flex flex-col gap-2 px-4">
          <h1 className="font-semibold text-2xl">{product.title}</h1>
          <span className="text-md font-medium">Description</span>
          <p className="text-slate-700 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            repudiandae iusto, suscipit eligendi excepturi mollitia.
          </p>
          <span className="text-md font-medium">Size</span>
          <div>
            <label htmlFor="size"></label>
            <select name="size" id="size" className="px-2 py-2 border-2 ">
              <option value="" selected>
                Choose your size
              </option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
            </select>
          </div>
          <div className="flex gap-4 text-md font-medium border-b pb-4">
            <span>Quantity</span>
            <div className="flex items-center gap-3 bg-slate-100 px-6 py-1 rounded-full">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-700 text-sm">Total price</p>
              <span className="text-xl font-bold">${product.price}</span>
            </div>
            <button className="px-12 py-4 bg-black text-white text-sm font-semibold rounded-full flex items-center gap-4">
              <IoCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
