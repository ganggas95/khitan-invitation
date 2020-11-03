import styles from './footer.module.css';


const Footer = () => {
    return (<footer className={styles.footer}>
        <div className="container">
            <div className="row justify-content-md-center justify-content-center align-items-center">

                <div className="col-md-7 col-sm-12 text-center">
                    <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/Saudari berkenan hadir dalam acara tersebut. Atas segala perhatian dan kedatangannya kami haturkan terima kasih.</p>
                    <div className="salam">
                        وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 text-center">
                    © 2020 Subhan Nizar. All Rights Reserved.
                </div>
            </div>
        </div>
    </footer>)
}
export default Footer;
