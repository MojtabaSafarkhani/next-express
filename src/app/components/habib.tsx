import { useEffect, useState } from "react";
import CollapseComponent from "./collapse";
export interface Data {
  id: number;
  lat: string;
  lon: string;
  cog: number;
  range: number;
  upCount: number;
}
const Habib = () => {
  const [data, setData] = useState<Data[]>([]);
  console.log(data);
  const table = (
    <table className=" table table-xs border-collapse border border-black table-fixed">
      <thead className="w-full">
        <tr className="font-bold text-black text-center ">
          <th className="Iborder-black w-11 p-1 ">ID</th>
          <th className="Iborder-black w-6 p-1">T</th>
          <th className="Iborder-black w-13 p-1">Lat</th>
          <th className="Iborder-black w-13 p-1">Lon</th>
          <th className="Iborder-black w-9 p-1">COG</th>
          <th className="Iborder-black w-11 p-1 ">Range</th>
          <th className="Iborder-black w-13 p-1 ">Up Count</th>
        </tr>
      </thead>
      <tbody className="">
        {data.map((item, index) => (
          <tr key={item.id} className="text-center">
            <td className="">{item.id}</td>
            <td className="Iborder-black">
              <input type="checkbox" name="select" />
            </td>
            <td className="Iborder-black-bold text-red-700">{item.lat}</td>
            <td className="Iborder-black-bold text-green-700">{item.lon}</td>
            <td className="Iborder-black-bold text-green-700">{item.cog}</td>
            <td className="Iborder-black-bold text-green-700">{item.range}</td>
            <td className="Iborder-black-bold text-green-700">
              {item.upCount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/stream");
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
    <CollapseComponent title="targets" content={table}></CollapseComponent>
  );
};

export default Habib;
