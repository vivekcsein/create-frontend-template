import Zoomable_imageOnTouchMove from "../Images/Zoomable_imageOnTouchMove";

interface Product_mainImageProps {
  imageDetails: {
    uid: string;
    src: string;
    alt: string;
  };
  children: React.ReactNode;
}
const Product_mainImage = ({
  imageDetails,
  children,
}: Product_mainImageProps) => {
  const { src, alt } = imageDetails;
  return (
    <div className=" w-full lg:flex lg:flex-row-reverse">
      <div className="relative w-full  p-6 flex justify-center items-start ">
        <div className="relative rounded-lg overflow-hidden border border-primary shadow-[0_0_15px_rgba(149,0,255,0.5)]">
          <Zoomable_imageOnTouchMove
            src={src || "/placeholder.svg"}
            alt={alt}
            width={512}
            height={512}
          />
        </div>
      </div>
      <div className="w-full lg:w-2/10 lg:pt-6">{children}</div>
    </div>
  );
};

export default Product_mainImage;
