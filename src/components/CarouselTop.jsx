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
      height={`450`}
      initialSlide={1} 
      loop
      styles={{
        control: {            
            cursor: "default",
            background: '#e89f71',
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
  );
};
export default CarouselTop;
