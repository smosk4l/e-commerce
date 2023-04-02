import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
function ProductGallery(props) {
  console.log(props);
  return (
    <Gallery>
      <Item
        original={props.product.images.pictures[0]}
        width="1260"
        height="1260"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src={props.product.images.pictures[0]}
          />
        )}
      </Item>
    </Gallery>
  );
}

export default ProductGallery;
