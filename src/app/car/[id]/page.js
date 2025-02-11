"use client"

import { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";
import ChartComponent from "./components/Chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, H2, H3, H4, P } from "@/components/ui/typography";
import Description from "./components/Description";
import ProfileCard from "./components/ProfileCard";
import TitleCard from "./components/TItleCard";
import CarouselDemo from "./components/PicturesCard";
import OpremaComponent from "./components/OpremaCard";
import RequiredSection from "./components/Required";



const chartConfig = {
  price: {
    label: "Cijena",
    color: "hsl(var(--chart-1))",
  },
  
}

const CarPage = ({ params }) => {

  const { id } = useParams(); 
  const [carData, setCarData] = useState(null); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const { setTheme } = useTheme();
  const [oprema, setOprema] = useState([])
  const [specifikacije, setSpecifikacije] = useState([])
  const [requiredAttributes, setRequiredAttributes] = useState([])
  
    

  useEffect(() => {
    if (carData) {
      setOprema(
        carData.attributes.filter(
          (attribute) => attribute.group_name === "Oprema"
        )
      );

      setRequiredAttributes(
        carData.attributes.filter(
          (attribute) => attribute.required === true // ili 'true' zavisno o formatu
        )
      );

      setSpecifikacije(
        carData.attributes.filter(
          (attribute) => attribute.group_name === "Specifikacije"
        )
      );
    }
  }, [carData]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(`https://olx.ba/api/listings/${id}`);
        setCarData(response.data); 
        

      } catch (err) {
        setError("Failed to fetch car data."); 
      } finally {
        setLoading(false); 
      }
    };

    fetchCarData(); 
  }, [id]); 

  // Renderovanje
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="py-8 px-4 md:px-36 lg:px-44 flex flex-col gap-5">
      <TitleCard
        title={carData.title}
        price={carData.display_price}
        description={carData.short_description}
      />

      <CarouselDemo images={carData.images} />

      <RequiredSection
        requiredAttributes={requiredAttributes}
        model={carData.model}
        brand={carData.brand}
      />

      {carData.price_history ? (
        <ChartComponent
          chartData={[
            ...carData.price_history.reverse(),
            { price: carData.price, created_at: 1734896729 },
          ]}
          chartConfig={chartConfig}
        ></ChartComponent>
      ) : (
        <></>
      )}

      <Description description={carData.additional.description} />
      <OpremaComponent oprema={specifikacije} naslov={"Specifikacije"} />
      <OpremaComponent oprema={oprema} naslov={"Oprema"} />

      <ProfileCard user={carData.user} />
    </div>
  );
};

export default CarPage;