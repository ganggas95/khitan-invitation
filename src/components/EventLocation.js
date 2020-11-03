import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import styles from './eventLocation.module.css';

const EventLocation = () => {
    const containerStyle = {
        width: '100%',
        height: '450px'
    };
    const center = {
        lat: -8.335732,
        lng: 116.215203
    }

    return (
        <div className="container">
            <div className="row justify-content-md-center justify-content-center align-items-center">
                <div className="col-md-11 col-sm-12 text-center">
                    <h3 className={styles.locationTitle}>Lokasi Acara</h3>
                    <div className={styles.locationFull}>
                        <h4>Alamat Lengkap</h4>
                        <span>Jl. Tiupupus, RT.5/RW.1 Kerurak, Genggelang, Gangga, Lombok Utara</span>
                    </div>
                    <LoadScript googleMapsApiKey="AIzaSyCYTOojFQGUsMH_75uMpcHMSAzIw5OJ8zQ">

                        <GoogleMap mapContainerStyle={containerStyle} center={center}
                            zoom={16}>
                            <Marker
                                position={center}
                                label="Rumah Kami"
                            />
                        </GoogleMap>

                    </LoadScript>
                </div>
            </div>
        </div>
    )
}

export default EventLocation;
