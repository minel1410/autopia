import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { faGasPump, faCar, faCalendarDays, faCarSide, faGears, faRoad, faDoorOpen, faGaugeHigh, faCarTunnel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function RequiredSection({
  requiredAttributes = [],
  model,
  brand,
}) {
  // Proveri da li je requiredAttributes zaista niz
  if (!Array.isArray(requiredAttributes)) {
    console.error("requiredAttributes nije niz:", requiredAttributes);
    return <p>Podaci nisu dostupni</p>;
  }

  return (
    <Card className="p-6">
      <CardTitle>Podaci</CardTitle>
      <CardContent className="!p-0 !py-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Prikaz modela kao RequiredCard */}

        <RequiredCard
          attribute={{ name: "Model", value: model.name }}
          icon={faCar}
        />
        <RequiredCard
          attribute={{ name: "Brand", value: brand.name }}
          icon={faCarSide}
        />
        {/* Iteracija kroz requiredAttributes */}
        {requiredAttributes.map((requiredAttribute, index) => (
          <RequiredCard key={index} attribute={requiredAttribute} />
        ))}
      </CardContent>
    </Card>
  );
}

const RequiredCard = ({ attribute, icon }) => {
  // Inicijalizacija ikone na osnovu imena atributa (ako nije prosleđena)
  if (!icon) {
    switch (attribute.name) {
      case "Godište":
        icon = faCalendarDays;
        break;
      case "Gorivo":
        icon = faGasPump;
        break;
      case "Transmisija":
        icon = faGears;
        break;
      case "Kilometraža":
        icon = faRoad;
        break;
      case "Kubikaža":
        icon = faCarTunnel;
        break;
      case "Snaga motora (KW)":
        icon = faGaugeHigh;
        break;
      case "Broj vrata":
        icon = faDoorOpen;
        break;
      default:
        icon = faCalendarDays; // Default ikona ako nije prepoznat atribut
    }
  }

  return (
    <div className="p-6 w-full border border-neutral-800 rounded-md flex items-center gap-5">
      <FontAwesomeIcon icon={icon} className="w-10 h-10" />
      <div className="flex flex-col">
        <p className="text-sm font-thin">{attribute.name}</p>
        <p className="text-sm font-extrabold">{attribute.value}</p>{" "}
        {/* Prikazuje vrednost atributa */}
      </div>
    </div>
  );
};