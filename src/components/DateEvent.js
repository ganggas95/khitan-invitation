import { FaCalendar, FaClock, FaMapMarker } from 'react-icons/fa'
import styles from './dateEvent.module.css';

const DateEvent = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center justify-content-center align-items-center">
                <div className="col-md-7 col-sm-12 text-center">
                    <h3 className={styles.eventTitle}>Insya Allah akan diselenggarakan pada : </h3>
                    <div className={styles.eventDate}>
                        {/* <h3 className={styles.eventDateTitle}>Syukuran Zikir dan Doa</h3> */}
                        <div className={styles.eventTime}>
                            <div>
                                <FaClock />
                                <span>09:00 AM Wita</span>
                            </div>
                            <div>
                                <FaCalendar />
                                <span>Ahad, 08-November-2020</span>
                            </div>
                        </div>
                        <div className={styles.eventLocation}>
                            <span className={styles.eventLocationKet}>Lokasi :</span>
                            <FaMapMarker />
                            <span>Dusun Kerurak, Desa Segara katon, Kec. Gangga, Lombok Utara</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateEvent;
