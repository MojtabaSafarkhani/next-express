"use client";
import { useEffect, useState } from "react";
export interface Data {
  id: number;
  lat: string;
  lon: string;
  cog: number;
  range: number;
  upCount: number;
}
export default function Home() {
  const [data, setData] = useState<Data[]>([]);
  console.log(data);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/events");
    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData((oldData) => {
        const existingDataIndex = oldData.findIndex(
          (item) => item.id === newData.id
        );

        if (existingDataIndex >= 0) {
          return oldData.map((item, index) =>
            index === existingDataIndex ? newData : item
          );
        } else {
          return [...oldData, newData];
        }
      });
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <main className="flex flex-row  justify-center p-2 m-5">
      <div className="collapse collapse-arrow  bg-yellow-200 text-black md:w-auto">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-bold">Habib targets</div>
        <div className="collapse-content ">
          <table className="table table-xs border-collapse border border-black ">
            <thead>
              <tr className="font-bold text-black">
                <th className="Iborder-black">ID</th>
                <th className="Iborder-black">T</th>
                <th className="Iborder-black">Lat</th>
                <th className="Iborder-black">Lon</th>
                <th className="Iborder-black">COG</th>
                <th className="Iborder-black">Range</th>
                <th className="Iborder-black">Up Count</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="Iborder-black">
                    <input type="checkbox" name="select" />
                  </td>
                  <td className="Iborder-black-bold text-red-700">
                    {item.lat}
                  </td>
                  <td className="Iborder-black-bold text-green-700">
                    {item.lon}
                  </td>
                  <td className="Iborder-black-bold text-green-700">
                    {item.cog}
                  </td>
                  <td className="Iborder-black-bold text-green-700">
                    {item.range}
                  </td>
                  <td className="Iborder-black-bold text-green-700">
                    {item.upCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
