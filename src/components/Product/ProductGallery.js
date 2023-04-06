import { useState, useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
function ProductGallery(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = props.product.images.pictures[0];
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, [props.product.images.pictures]);

  return isImageLoaded ? (
    <Gallery>
      <Item
        original={props.product.images.pictures[0]}
        width="1260"
        height="1260"
        alt={`${props.product.title}`}
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src={props.product.images.pictures[0]}
            alt={`${props.product.title}`}
            onLoad={() => setIsImageLoaded(true)}
          />
        )}
      </Item>
    </Gallery>
  ) : (
    <div className="flex items-center justify-center">
      <svg
        className="w-32 h-32 animate-spin text-black-400"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4.75V6.25"
          stroke="currentColor"
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
        <path
          d="M17.1266 6.87347L16.0659 7.93413"
          stroke="currentColor"
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
        <path
          d="M19.25 12L17.75 12"
          stroke="currentColor"
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
        <path
          d="M17.1266 17.1265L16.0659 16.0659"
          stroke="currentColor"
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
        <path
          d="M12 17.75V19.25"
          stroke="currentColor"
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
        <path
          d="M7.9342 16.0659L6.87354 17.1265"
          stroke="currentColor"
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
        <path
          d="M6.25 12L4.75 12"
          stroke="currentColor"
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
        <path
          d="M7.9342 7.93413L6.87354 6.87347"
          stroke="currentColor"
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </svg>
    </div>
  );
}

export default ProductGallery;
