import React, { useEffect, useState } from "react";
import {
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { LatLng } from "leaflet";
import Harbor from "../img/Harbor.jpg";
import { Icon } from "@iconify/react";
import IHarborData from "../types/Harbor";
import Weather from "./Weather";
import Modal from "../components/Modal/Modal";
import BookForm from "../components/BookForm/BookForm";
import Notification from '../components/Notification/Notification';
import Button from "../components/Button/Button"

interface IProps {
  harborsList: IHarborData[];
}

export default function MapElement({ harborsList }: IProps) {
  const map = useMap();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState<boolean>(false);
  const [clickedMarker, setClickedMarker] = useState<string>("");
 
  
  const filterHarbors = () => {
    
    return harborsList.filter((harbor: IHarborData) =>
      map
        .getBounds()
        .contains(new LatLng(Number(harbor.lat), Number(harbor.lon)))
    );
  };
  const [harborsInViewport, setHarborsInViewport] = useState<IHarborData[]>(
    []
  );

  useEffect(()=>{
    setHarborsInViewport(filterHarbors());
  },[])
  useEffect(()=> {
    if(showSuccessNotification){
      setTimeout(()=> {
        setShowSuccessNotification(false);
      }, 3000);
    }
  }, [showSuccessNotification])
  const mEvents = useMapEvents({
    moveend: () => {
      setHarborsInViewport(filterHarbors());
    },
  });
  
  return (
    <>
    {showSuccessNotification ? <Notification type="success" message="Successfully booked"/> : null}
    {harborsInViewport.map((harbor: IHarborData) => (
        <Marker
          key={harbor.id}
          position={[Number(harbor.lat), Number(harbor.lon)]}
          eventHandlers={{
            mouseup: () => {
              setClickedMarker(harbor.id);
            },
          }}
        >
          {clickedMarker === harbor.id && (
            <Popup>
              <div className="popup">
                <img
                  className="img-thumbnail popup__img "
                  sizes="100"
                  src={Harbor}
                  alt="harborImage"
                />
                <br/><br/>
                <span className="popup__name">
                  <Icon fontSize={30} icon="dashicons:location" color="#284" />
                  {" " } <b>{harbor.name}</b>
                </span>
                <br/>
                <Weather lat={Number(harbor.lat)} lon={Number(harbor.lon)} />
                <br />
                <br />
                <Button
                  type="primary"
                  onClick={() => setIsModalOpen(true)}
                >
                  book
                </Button>
                <Modal
                  title={`Book harbor : ${harbor.name}`}
                  isOpen={isModalOpen}
                  setIsOpen={setIsModalOpen}
                >
                  <BookForm onFinish={()=> {
                    console.log('clickeeeed');
                    setShowSuccessNotification(true);
                    setIsModalOpen(false)
                  }}/>
                </Modal>
              </div>
            </Popup>
          )}
        </Marker>
      ))
       }
    
    </>
  );
}
