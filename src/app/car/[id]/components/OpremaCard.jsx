import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, H2, H3, H4, P } from "@/components/ui/typography";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OpremaComponent = ({ oprema, naslov }) => {
  return (
    <Card className="w-full p-4">
      <CardHeader>
        <CardTitle>
          <H2>{naslov}</H2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          {oprema.map((item, index) => {
            return (
              <div key={index} className="flex py-1 text-sm">
                <P className={"font-bold w-2/3 lg:w-1/2"}>{item.name}</P>
                {item.value == "true" ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-900 font-bold"
                  />
                ) : item.value == "Nema" ? (
                  <FontAwesomeIcon icon={faX} className="text-red-900"/>
                ) : (
                  <p className="font-bold">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default OpremaComponent;
