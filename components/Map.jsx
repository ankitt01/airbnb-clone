import React, {useState} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
// import {getCenter} from 'geolib/es/getCenter'
import * as geolib from 'geolib';


function Map({searchResults}) {

    
    const [selectedLocation, setSelectedLocation] = useState({})

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
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offset={-10}
                    >
                        <p className='cursor-pointer text-2xl animate-bounce' onClick={() => setSelectedLocation(result)} aria-label="push-pin">📌</p>
                    </Marker>
                    {/* Popup */}

                    {selectedLocation.long === result.long ? <Popup closeOnClick={true} onClose={() => setSelectedLocation({})} latitude={result.lat} longitude={result.long}>{result.title}</Popup> : false}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
