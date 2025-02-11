"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InfiniteScrollTikTok = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [ads, setAds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchAds = async (page) => {
    try {
      const response = await axios.get(`/api/ads?page=${page}`);
      if (response.data.data.length > 0) {
        setAds((prevAds) => [...prevAds, ...response.data.data]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Greška prilikom dohvaćanja oglasa:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown" && currentIndex < ads.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (event.key === "ArrowUp" && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    fetchAds(1);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <InfiniteScroll
        dataLength={ads.length}
        next={() =>
          fetchAds(pageNumber + 1).then(() => setPageNumber(pageNumber + 1))
        }
        hasMore={hasMore}
        loader={<div className="text-white">Učitavanje...</div>}
        endMessage={<div className="text-white">Nema više oglasa</div>}
      >
        <div
          id="scroll-container"
          className="max-w-[550px] bg-black rounded-lg h-[93vh] md:mt-2 overflow-hidden flex items-center justify-center"
        >
          {ads[currentIndex]?.images[0] ? (
            <Carousel className="w-full overflow-hidden flex items-center justify-center">
              <CarouselContent>
                {ads[currentIndex]?.images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full flex items-center"
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        className=""
                        src={image
                          ?.replace("/sm", "/lg")
                          .replace("/masked", "")}
                        alt={`Slika ${index + 1}`}
                        width={500}
                        height={500}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                onClick={() =>
                  setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
                }
              />
              <CarouselNext
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    Math.min(prevIndex + 1, ads.length - 1)
                  )
                }
              />
            </Carousel>
          ) : null}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollTikTok;
