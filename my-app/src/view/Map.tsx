import React, {  useEffect, useState } from "react";
import { getHarborsList} from "../services/HarborServices";
import IHarborData from "../types/Harbor";
import { Icon } from "@iconify/react";
import { MapContainer, TileLayer} from "react-leaflet";
import MapElement from "./MapElement";
const Map: React.FC<{}> = () => {
  const [harborsList, setHarborsList] = useState<Array<IHarborData>>([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    retriveHarborsList();
  }, []);

  const retriveHarborsList = () => {
    setIsLoading(true);
    getHarborsList()
      .then((response: any) => {
        setHarborsList(response.data);
        setIsLoading(false);
        //console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <MapContainer
      id="mapId"
      className="markercluster-map"
      center={[55.6, 12.5]}
      zoom={10}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {!isLoading && <MapElement harborsList={harborsList} />}
      {isLoading &&  
        <div className="loading">
          <Icon icon="eos-icons:bubble-loading" color="#289" />
        </div>
      }
    </MapContainer>
  );
};

export default Map;
