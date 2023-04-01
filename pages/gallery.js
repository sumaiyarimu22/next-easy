import Image from "next/image";
import img1 from "../public/images/pic-1.jpg";
import img2 from "../public/images/pic-2.jpg";
import img3 from "../public/images/pic-3.jpg";
import img4 from "../public/images/pic-4.jpg";
import img5 from "../public/images/pic-5.jpg";
const Gallery = () => {
  return (
    <div className="min-h-screen">
      <h1>Gallery</h1>
      <div className="images">
        <Image
          src={img1}
          alt="image"
          height="300"
          width="300"
          placeholder="blur"
        />
        <Image
          src={img5}
          alt="image"
          height="300"
          width="300"
          placeholder="blur"
        />
        <Image
          src={img2}
          alt="image"
          height="300"
          width="300"
          placeholder="blur"
        />
        <Image
          src={img3}
          alt="image"
          height="300"
          width="300"
          placeholder="blur"
        />
        <Image
          src={img4}
          alt="image"
          height="300"
          width="300"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Gallery;
