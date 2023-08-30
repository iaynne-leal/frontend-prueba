import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";

const Carousele = ({ data }) => {
  const [agencies, setAgencies] = useState(data);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const agencyTemplate = (agency) => {
    return (

        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <center>
             <img src="https://guiagt.com/wp-content/uploads/2014/11/00350-Cooperativa-Cob%C3%A1n-es-Mi-Coope-agencia-central-foto01.jpg"  className="w-40 shadow-2" />
            </center> 
        </div>
           
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div>
          <h4 className="mb-1">{agency.name}</h4>
          <h6 className="mt-0 mb-3">{agency.address}</h6>
          <h6 className="mt-0 mb-3">{agency.phone}</h6>

          <Tag value={agency.township}></Tag>
          {agency.schedules.map((s) => {
            return (
              <div>
                <h5>{s.name} | {s.start} - {s.end} </h5>

              {/*   <h5>{s.start}</h5>

                <h5>{s.end}</h5> */}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={data}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={agencyTemplate}
      />
    </div>
  );
};

export default Carousele;
