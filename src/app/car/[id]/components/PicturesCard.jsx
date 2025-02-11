import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image"; // Import the Image component
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ImageDialog({ images }) {


  const handleSwipe = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      ),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Omogućava swipe na desktopu pomoću miša
  });


  const [currentIndex, setCurrentIndex] = useState(0); // Držanje trenutnog indeksa

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      } else if (event.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Carousel className="relative overflow-visible">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="md:h-[65vh] overflow-clip md:flex items-center justify-center">
                    <CardContent className="flex aspect-square overflow-clip items-center justify-center p-6 relative w-full lg:w-3/4">
                      <Image
                        src={image}
                        layout="fill"
                        objectFit="contain"
                        alt={`Image ${index}`}
                        onClick={() => setCurrentIndex(index)} // Ažuriranje na klik
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Prikazivanje navigacionih dugmadi */}
         
        </Carousel>
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
        <DialogTitle className="hidden"></DialogTitle>
        <div className="relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md">
          <div
            {...handleSwipe} // Povezujemo swipeable funkcionalnost
            className="relative flex items-center justify-center h-full w-full"
          >
            {/* Previous Button */}

            <Button
              variant="outline"
              className="absolute left-4 z-10  h-8 w-8 rounded-full"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex === 0 ? images.length - 1 : prevIndex - 1
                )
              }
            >
              <ArrowLeft />
            </Button>

            {/* Prikaz trenutne slike */}
            <Image
              src={images[currentIndex]} // Koristi trenutni indeks
              fill
              alt={`Image ${currentIndex}`}
              className="h-full w-full object-contain"
            />

            {/* Next Button */}
            <Button
              variant="outline"
              className="absolute right-4 z-10 rounded-full h-8 w-8"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex === images.length - 1 ? 0 : prevIndex + 1
                )
              }
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </DialogContent>
      
    </Dialog>
  );
}


 