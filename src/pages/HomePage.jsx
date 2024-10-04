import Carouse from "../components/CarouselTop";
import Modal from "../components/Modal";
import line from "../assets/images/Vector 1.png";
import cupIcon from "../assets/images/cup-icon.png";
import customerSupportIcon from "../assets/images/customer-support-icon.png";
import likeIcon from "../assets/images/like-icon.png";
import shoppingIcon from "../assets/images/shipping-icon.png";
import ProductsList from "../components/ProductsList";
import { HoverCard, Text } from "@mantine/core";

const HomePage = () => {
  return (
    <main className="">
      <section className="relative mb-10 pt-28 lg:pt-52 md:bg-gradient-to-r from-[#fff6e8] to-[#fcf7f0]">
        <Carouse />
        <Modal
          title="Let's work together!!!"
          description="Use our store to sell your own home improvement products to help us realize our goal of a nice nook."
          btnTitle="Add Product Now"
          path={"/products/new"}
          classes={"shadow-xl top-40 left-20 mx-auto my-10 p-14 md:absolute"}
        />
        <Modal
          title="High-Quality Furniture Just For You"
          description="Our furniture is made from selected and best quality materials that are
       suitable for your dream home"
          btnTitle="Shop Now"
          path={"/products"}
          classes={"-bottom-6 right-20 p-14 hidden lg:block lg:absolute"}
        />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-screen-lg mx-auto">
        <div className="flex items-center gap-2">
          <img src={cupIcon} alt="" />
          <div className="">
            <h3>High Quality</h3>
            <p>Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <img src={customerSupportIcon} alt="" />
          <div className="">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <img src={likeIcon} alt="" />
          <div className="">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <img src={shoppingIcon} alt="" />
          <div className="">
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto p-6 mb-20">
        <ProductsList />
      </section>
      <section className="flex flex-col relative lg:flex-row mb-16 gap-y-10 text-ce">
        <div className="flex items-start justify-center flex-col px-16">
          <h3 className="font-bold text-2xl mb-2">
            50+ Beautiful rooms inspiration
          </h3>
          <p className="mb-5">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <HoverCard shadow="md" closeDelay={1000}>
            <HoverCard.Target>
              <button
                type="button"
                className="px-10 py-2 border border-[#e89f71]"
              >
                Show More
              </button>
            </HoverCard.Target>
            <HoverCard.Dropdown width="50px">
              <Text size="xs" fw={500}>
                This fragment is part of a demonstration that does not yet have
                functionality
              </Text>
            </HoverCard.Dropdown>
          </HoverCard>
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
