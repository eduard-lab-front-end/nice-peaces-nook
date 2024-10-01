import Carouse from "../components/CarouselTop";
import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";
import line from "../assets/images/Vector 1.png";
import cupIcon from "../assets/images/cup-icon.png";
import customerSupportIcon from "../assets/images/customer-support-icon.png";
import likeIcon from "../assets/images/like-icon.png";
import shoppingIcon from "../assets/images/shipping-icon.png";

const HomePage = () => {
  return (
    <main className="pt-24">
      <section className="relative my-10">
        <Carouse />
        <Modal />
      </section>
      <section className="p-10 flex justify-evenly flex-wrap gap-6">
        <div className="flex justify-center items-center gap-2 basis-1/4">
          <img src={cupIcon} alt="" />
          <div className="">
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 basis-1/4">
          <img src={customerSupportIcon} alt="" />
          <div className="">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 basis-1/4">
          <img src={likeIcon} alt="" />
          <div className="">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 basis-1/4">
          <img src={shoppingIcon} alt="" />
          <div className="">
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto p-6 mb-5">
        <ProductCard />
      </section>
      <section className="flex relative mb-16">
        <div className="w-1/2 flex items-start justify-center flex-col px-16">
          <h3 className="font-bold text-2xl mb-2">
            50+ Beautiful rooms inspiration
          </h3>
          <p className="mb-5">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button type="button" className="px-10 py-2 border border-[#e89f71]">
            Show More
          </button>
        </div>
        <Carouse style={{ width: "50%" }} />
        <div className="absolute z-100 left-1/2 bottom-20 bg-white p-5">
          <p className="">
            01
            <img src={line} alt="" className="inline-block px-2" />
            Bed Room
          </p>
          <h3 className="text-2xl font-semibold">Inner Place</h3>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-center text-5xl mb-10">#NicePeaceNookFurniture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
