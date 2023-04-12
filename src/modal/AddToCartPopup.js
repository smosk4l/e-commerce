import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

function AddToCartPopup() {
  const [showModal, setShowModal] = useState(false);
  const handleAddToCart = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div>
      <button
        className="px-4 py-2 text-white text-sm font-semibold rounded-full flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
        onClick={handleAddToCart}
      >
        <IoCart className="text-lg" />
        Add to Cart
      </button>
      {showModal && (
        <div className="fixed z-10 sm:top-1/3 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all duration-300 "
              role="dialog"
              aria-modal="true"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h2 className="text-lg font-medium text-center text-gray-900">
                  Thank you for adding the item to your cart!
                </h2>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <Link to={"/"}>Continue Shopping</Link>
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <Link to={"/cart"}>Go to Your Cart</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCartPopup;
