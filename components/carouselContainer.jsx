import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselContainer = () => {
  return (
    <Carousel className="h-96 w-fit">
      <CarouselContent>
        <CarouselItem>item one</CarouselItem>
        <CarouselItem>item two</CarouselItem>
        <CarouselItem>item three</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselContainer;
