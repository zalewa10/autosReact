import { useEffect, useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import { Card, CardTitle } from "../ui/card";

type Point = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

const points: Point[] = [
  {
    id: 1,
    name: "Skórzewo - parking Szkoła Podstawowa nr 1",
    latitude: 52.39223,
    longitude: 16.793983,
  },
  {
    id: 2,
    name: "Skórzewo - parking Galeria Malwowa",
    latitude: 52.396693,
    longitude: 16.802882,
  },
  {
    id: 3,
    name: "Plewiska - parking stacja ORLEN",
    latitude: 52.366856,
    longitude: 16.80976,
  },
  {
    id: 4,
    name: "Przeźmierowo - parking stacja Orlen",
    latitude: 52.419812,
    longitude: 16.78941,
  },
  {
    id: 5,
    name: "Batorowo - parking stacja Avia Bukowska",
    latitude: 52.413252,
    longitude: 16.764589,
  },
  {
    id: 6,
    name: "Ławica - parking Netto",
    latitude: 52.4121785,
    longitude: 16.8325941,
  },
  {
    id: 7,
    name: "Ławica - parking siłownia Atlantis",
    latitude: 52.407597,
    longitude: 16.819891,
  },
  {
    id: 8,
    name: "Junikowo - parking przystanek Cmentarna",
    latitude: 52.385418,
    longitude: 16.838946,
  },
  {
    id: 9,
    name: "Ogrody - parking kościoła ul. Nowina",
    latitude: 52.416835,
    longitude: 16.878214,
  },
  {
    id: 10,
    name: "Os.Kwiatowe - parking Netto",
    latitude: 52.378642,
    longitude: 16.823928,
  },
  {
    id: 11,
    name: "Os.Kwiatowe - parking kościół",
    latitude: 52.383611,
    longitude: 16.820688,
  },
  {
    id: 12,
    name: "Biuro i Sala Wykładowa AUTO-S ul.Jesienna 18, Skórzewo",
    latitude: 52.400547,
    longitude: 16.784312,
  },
  {
    id: 13,
    name: "Dąbrówka - parking stacja Orlen",
    latitude: 52.381938,
    longitude: 16.744593,
  },
  {
    id: 14,
    name: "Poznań - parking stacja Orlen ul. Wichrowa",
    latitude: 52.431087,
    longitude: 16.808318,
  },
  {
    id: 15,
    name: "Dąbrowa - parking Chata Polska",
    latitude: 52.396823,
    longitude: 16.757426,
  },
];

export default function PigeonMap() {
  const [mapActive, setMapActive] = useState(false);

  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);
  useEffect(() => {
    if (mapActive) {
      const timer = setTimeout(() => {
        setMapActive(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [mapActive]);
  return (
    <main className="pb-10 px-8 w-full mt-3 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-6 ">
        <Card className="lg:h-[400px] flex flex-col relative md:flex-row w-full">
          <div className="relative md:w-1/2">
            <Map
              height={400}
              defaultCenter={[52.400547, 16.784312]}
              defaultZoom={12}
              minZoom={12}
              maxZoom={16}
              touchEvents={mapActive}
              mouseEvents={mapActive}
            >
              {points.map((point: Point) => (
                <Marker
                  key={point.id}
                  color={point.id === 12 ? "red" : "blue"}
                  anchor={[point.latitude, point.longitude]}
                  onClick={() => setSelectedPoint(point)}
                />
              ))}

              {selectedPoint && (
                <Overlay
                  anchor={[selectedPoint.latitude, selectedPoint.longitude]}
                  offset={[120, 79]}
                >
                  <div>
                    <Card>
                      <button
                        onClick={() => setSelectedPoint(null)}
                        style={{ float: "right" }}
                        className="mr-2 mt-1 text-red-600"
                      >
                        <b>X</b>
                      </button>
                      <p className="py-2 px-3 text-sm mr-5">
                        {selectedPoint.name}
                      </p>
                    </Card>
                  </div>
                </Overlay>
              )}
            </Map>
            {!mapActive && (
              <div
                className="absolute w-full md:w-auto bg-white bg-opacity-50 flex items-center justify-center top-0 left-0 bottom-0 right-0"
                onClick={() => setMapActive(true)}
              >
                <button className="md:text-2xl bg-firma text-white p-2 rounded-lg">
                  Kliknij, aby aktywować mapę
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col px-4 justify-center w-full md:w-2/3">
            <CardTitle>
              <p className="my-5 lg:mt-0 md:px-4 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Obszar działalności
              </p>
            </CardTitle>

            <p className="mb-5 mt-3 md:my-3 font-normal md:px-4 text-base md:text-lg text-gray-700 dark:text-gray-400">
              Nasza szkoła jazdy oferuje odbiór kursantów w różnych
              lokalizacjach, obejmując takie miejsca jak: {""}{" "}
              <b>Skórzewo, Plewiska, Przeźmierowo, Poznań</b> oraz pozostałe
              miejscowości w gminach:{" "}
              <b>Dopiewo, Tarnowo Podgórne, Komorniki</b> (kliknij pinezkę, aby
              sprawdzić miejsca, w których rozpoczynamy jazdy podczas szkolenia
              praktycznego).
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}
