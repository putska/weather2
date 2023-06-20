import { getClient } from "@/apollo-client";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

function weatherPage({ params: { city, lat, long } }: Props) {
  return (
    <div>
      Welcome to the Weather Page!
      <div>City: {city}</div>
      <div>Latitude: {lat}</div>
      <div>Longitude: {long}</div>
    </div>
  );
}

export default weatherPage;
