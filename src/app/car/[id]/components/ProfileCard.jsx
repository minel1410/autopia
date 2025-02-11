
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, H2, H3, H4, P } from "@/components/ui/typography";
import Medal from "@/components/ui/medal";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatMinutes } from "@/lib/utils";

const ProfileCard = ({ user }) => {

  const avg_response_time = formatMinutes(user.avg_response_time);

  return (
    <Card className="w-full relative p-4">
      <CardHeader>
        <CardTitle className="text-sm">
          {user.type == "shop" ? <>OLX SHOP</> : <>KORISNIK</>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex gap-5 items-center">
            <div className="border rounded-full overflow-clip w-24 h-24 flex items-center justify-center">
              {user.avatar ? (
                <img className="" src={user.avatar} />
              ) : (
                <div className="w-full h-full bg-white" />
              )}
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-md md:text-lg lg:text-xl font-bold">
                  {user.username}
                </h4>
                <p className="text-sm text-gray-500">{user.location.name}</p>
              </div>
              <div className="flex gap-4">
                {user.medals?.map((medal, index) => {
                  return <Medal medal={medal} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="py-1 ps-3 w-full rounded-md bg-gray-800 mt-6">
            <P className={"font-semibold text-sm"}>
              Prosječno vrijeme odgovora:{" "}
              {avg_response_time.months
                ? `${avg_response_time.months} mjeseci`
                : avg_response_time.days
                ? `${avg_response_time.days} dana`
                : avg_response_time.hours
                ? `${avg_response_time.hours} sati`
                : avg_response_time.minutes
                ? `${avg_response_time.minutes} minuta`
                : "N/A"}
            </P>
          </div>
        </div>
      </CardContent>
      <div className="absolute right-[40px] top-[40px] flex gap-4 text-lg">
        <FontAwesomeIcon icon={faPhone} />
        <FontAwesomeIcon icon={faMessage} />
      </div>
    </Card>
  );
};

export default ProfileCard;