import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { H1, H2, H3, H4, P, Muted } from "@/components/ui/typography";


const TitleCard = ({ title, price, description,  }) => {
  return (
    <Card className="w-full p-4">
      <CardHeader>
        <CardTitle className="flex flex-col gap-3">
          <h1>{title}</h1>
          <H1>{price}</H1>
        </CardTitle>
        <CardDescription className="md:w-1/2">
          {(description != 'Korisnik nije unio opis') && description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  );
};

export default TitleCard;
