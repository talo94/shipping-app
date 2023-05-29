import { packageSchema } from "@/service/package";
import React from "react";

type Props = {
  selectedValue: packageSchema;
};

const Detail = ({ selectedValue }: Props) => {
  const getList = (selectedValue: packageSchema) => {
    const { guideNumber, origin, destination, weight, date, statusList } =
      selectedValue;
    const { type, date: dateStatus } = statusList[statusList.length - 1];
    return [
      {
        key: "No. Guia:",
        value: guideNumber,
      },
      {
        key: "Estado:",
        value: type,
      },
      {
        key: "Fecha última actualización:",
        value: new Date(dateStatus).toDateString(),
      },
      {
        key: "Fecha de envio:",
        value: new Date(date).toDateString(),
      },
      {
        key: "Origen:",
        value: origin,
      },
      {
        key: "Destino:",
        value: destination,
      },
      {
        key: "Peso:",
        value: weight,
      },
    ];
  };

  const list = getList(selectedValue);

  return (
    <ul className="divide-y divide-gray-100 flex w-11/12 flex-wrap ">
      {list.map((item) => (
        <li
          key={item.key}
          className="flex md:w-3/6 align-between gap-x-6 py-5 w-full lg:max-w-md border-b-0"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {item.key}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {item.value}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Detail;
