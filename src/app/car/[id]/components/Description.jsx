

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, H2, H3, H4, P } from "@/components/ui/typography";


const Description = ({ description }) => {

    return (
      <Card className="w-full p-4">
        <CardHeader>
          <CardTitle>
            <H2>Detaljni opis</H2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            dangerouslySetInnerHTML={{
              __html: description
                .replace(/\n/g, "<br>")
                .replace(/\t/g, "")
                .replace(/\r/g, ""),
            }}
          />
        </CardContent>
      </Card>
    );
}

export default Description;