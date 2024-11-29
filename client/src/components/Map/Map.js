import { useEffect,useRef } from "react";
import {loadModules} from "esri-loader";

import useGeoLocation from "../useGeolocation";

 function Map() {
const MapE1 = useRef(null)

const location = useGeoLocation()
    useEffect (() =>{
        let view;

        loadModules(["esri/views/MapView","esri/WebMap","esri/layers/GeoJSONLayer","esri/widgets/Search"],{
            css:true
        }
       
       
       
        ).then(([MapView,WebMap,GeoJSONLayer,Search]) =>{
            const webmap = new WebMap({
                basemap:"topo-vector"
            })
            const renderer = {
                //field means state city 
                // for different value we can give different color
                type: "simple",
                field: "mag",
                symbol: {
                  type: "simple-marker",
                  color: "orange",
                  outline: {
                    color: "white"
                  }
                },
                visualVariables: [
                  {
                    type: "size",
                    field: "mag",
                    stops: [
                      {
                        value: 2.5,
                        //size: "4px"
                        color:"red"
                      },
                      {
                        value: 8,
                        size: "40px"
                      }
                    ]
                  }
                ]
              };
        const searchWidget = new Search({
          view:view
        })
              //PopUp Object
              const template={
                title: "Inventory",
                  content: "{title}",
                  fieldInfos: [
                    {
                      fieldName: "time",
                      format: {
                        dateFormat: "short-date-short-time"
                      }
                    }
                  ],
               


              };
            view = new MapView({
                map:webmap,
                center:[location.coordinates.lng,location.coordinates.lat],
                zoom:10,
                //use the ref as container
                container:MapE1.current
            })

            const geojsonLayer =  new GeoJSONLayer({
                url:"https://raw.githubusercontent.com/Mahesh77r/SIH/main/data.geojson?token=GHSAT0AAAAAABX4NRHPHTADJD5BDZ4VZTOQYYIM6IA",
              //  url:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
                renderer: renderer,
                popupTemplate: template,
            });

            webmap.add(geojsonLayer)

            view.ui.add(searchWidget,{
              position:"top-right"
            })
        })
        return() => {
            //close the map view
            if(!!view){
                view.destroy()
                view=null
            }
        }
      
    } )
   
  return (
    <>
    <div style={{height:800}} ref={MapE1}></div>
   

    </>
  )
}

export default Map