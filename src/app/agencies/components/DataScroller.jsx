import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataScroller } from "primereact/datascroller";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";

const DataScrollers = ({ data }) => {
  const [agencies, setAgencies] = useState(data);

  const agencyTemplate = (agency) => {
    return (
      <div className="col-12 ">
        <div className="flex flex-column xl:align-items-start p-4 gap-4 justify-between">
          <div className="flex flex-row gap-4">
            <img
              className="w-40 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
              src="https://guiagt.com/wp-content/uploads/2014/11/00350-Cooperativa-Cob%C3%A1n-es-Mi-Coope-agencia-central-foto01.jpg"
            />
            <div className="flex !flex-col gap-6">
              <div className="text-2xl font-bold text-900"> {agency.name}</div>
              <div className="text-700">{agency.address}</div>
              <span className="text-2xl font-semibold">{agency.phone}</span>
            </div>
          </div>
          <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
          <div className="flex flex-col gap-2 w-48">
            <Tag value={agency.township} className="w-10 m-auto"></Tag>
           <div className="m-auto">
            {agency.schedules.map((s) => {
                return (
                    <div>
                  <h5>
                    {s.name}  
                  </h5>
                  <h5>
                    {s.start == "00:00:00" && s.end == "00:00:00"?"Cerrado":`${s.start} - ${s.end}`}
                  </h5>
                </div>
              );
            })}
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card mt-11 max-w-4xl m-auto">
      <DataScroller
        value={data}
        itemTemplate={agencyTemplate}
        rows={5}
        inline
        scrollHeight="500px"
       
      />
    </div>
  );
};

export default DataScrollers;
