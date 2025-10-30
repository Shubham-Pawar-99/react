import { useRef, useState } from "react";

const Index = () => {
  const imageref = useRef(null);
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleChangeImage = () => {
    if (imageref.current) {
      imageref.current.src = isFirstImage
        ? "https://cdn.pixabay.com/photo/2025/10/02/09/24/snail-9868046_1280.jpg"
        : "https://cdn.pixabay.com/photo/2024/12/24/11/29/bird-9288255_1280.jpg";
    }
    setIsFirstImage(!isFirstImage);
  };
  return (
    <div>
      <h1>Change Image Using useRef</h1>
      <img
        ref={imageref}
        src="https://cdn.pixabay.com/photo/2025/02/08/05/21/antelope-canyon-9391418_1280.jpg"
        alt=""
        height={"500px"}
      />
      <button onClick={handleChangeImage}>Change Image</button>
    </div>
  );
};

export default Index;
