import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

const CarouselTop = () => {
  const carouselData = [
    {
      title: "item 1",
      url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "item 2",
      url: "https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "item 3",
      url: "https://plus.unsplash.com/premium_photo-1682582243285-8478309a7cdb?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "item 4",
      url: "https://plus.unsplash.com/premium_photo-1682484702952-e3bb37dfec97?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Carousel
      dragFree
      slideSize="60%"
      slideGap="md"
      height={450}
      initialSlide={1}
      loop
      styles={{
        control: {            
            cursor: "default",
            background: '#e89f71',
            '&[data-active]': {
            opacity: 0,
            cursor: 'pointer',
          },
        },
      }}
    >
      {carouselData.map((slide, i) => (
        <Carousel.Slide key={i}>
          <Image
            src={slide.url}
            className="object-cover h-full w-full rounded-lg"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
    // <div className="relative flex items-center gap-2 w-full pt-10">
    //   <button
    //     onClick={() => {
    //       activeItemIndex !== 0 &&
    //         setActiveItemIndex((prevIndex) => prevIndex - 1);
    //     }}
    //     className="absolute right-20 top-0 z-30 min-w-[30px] h-[30px] rounded-full grid place-items-center text-white bg-[#e89f71] hover:bg-opacity-60 duration-200"
    //   >
    //     <IconChevronLeft />
    //   </button>

    //   <div className="relative min-w-[400px] w-full h-[550px] grid place-items-center rounded-lg duration-500">
    //     {/* <p>{carouselData.current[activeItemIndex].title}</p> */}

    //     <img
    //       src={carouselData.current[activeItemIndex].url}
    //       alt=""
    //       className="absolute object-cover h-full w-full rounded-lg"
    //       radius="md"
    //     />
    //   </div>
    //   <button
    //     onClick={() => {
    //       activeItemIndex !== carouselData.current.length - 1 &&
    //         setActiveItemIndex((prevIndex) => prevIndex + 1);
    //     }}
    //     className="absolute right-10 top-0 min-w-[30px] h-[30px] rounded-full grid place-items-center text-white bg-[#e89f71] hover:bg-opacity-60 duration-200"
    //   >
    //     <IconChevronRight />
    //   </button>
    // </div>
  );
};
export default CarouselTop;
