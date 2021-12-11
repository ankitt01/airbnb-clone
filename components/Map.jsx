import React, {useState} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
// import getCenter from 'geolib/es/getCenter'
import * as geolib from 'geolib';


function Map({searchResults}) {

    


    //Transform the search result object into the lang lat object

    const coordinates = searchResults.map((result) => (
        {
            longitude: result.long,
            latitude: result.lat,
        }
    ))
    const center = geolib.getCenter(coordinates)

    const [viewport,setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom:11,
    });

    return (
        <ReactMapGL 
            mapStyle="mapbox://styles/ankit0102/ckwz9tx1m0tnd15qad6h26oks"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

        </ReactMapGL>
    )
}

export default Map
