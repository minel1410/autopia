"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

export default function Test() {
  const [ads, setAds] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch ads asynchronously
  const fetchAds = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get(`/api/ads?page=${pageNumber}`);
      const newAds = response.data.data;

      if (newAds.length > 0) {
        setAds((prevAds) => [...prevAds, ...newAds]);
        setPageNumber((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Greška prilikom dohvaćanja oglasa:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchAds();
  }, []);

  // Handle scrolling
  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;

    // Check if user is near the bottom of the scrollable container
    if (scrollHeight - scrollTop <= clientHeight + 50) {
      fetchAds();
    }
  };

  return (
    <article
      className="h-[93vh] overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      onScroll={handleScroll}
    >
      {ads.map((ad, index) => (
        <section
          key={index}
          className="h-full w-full flex justify-center snap-start"
        >
          <section className="max-w-[600px] bg-black rounded-lg h-[91vh] flex items-center mt-2 overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar">
            {ad.images.map((image, index) => (
              <Image
              key={index}
                src={image.replace("/sm", "/lg").replace("/masked", "")}
                alt={`Oglas`}
                className="snap-item min-w-full"
                loading="lazy"
                width={500}
                height={500}
              />
            ))}

          </section>
        </section>
      ))}

      {loading && (
        <div className="text-white text-center py-4">Učitavanje...</div>
      )}

      {!hasMore && (
        <div className="text-white text-center py-4">Nema više oglasa</div>
      )}
    </article>
  );
}
