import styles from './detailEvent.module.css';

const DetailEvent = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center justify-content-center">
                <div className="col-8 text-center">
                    <div className="salam">
                   السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                    </div>
                    <p className={styles.excelentWord}>
                        Dengan mengharap ridho Allah SWT kami bermaksud mengundang Bapak/Ibu/Saudara/Saudari dalam acara syukuran khitanan anak kami:
                    </p>
                    <h1 className={styles.nameChild}>Riziq Alfhathanah</h1>
                    <span className={styles.nameParent}>Putra Subhan Nizar & Wardi Rusmawati</span>
                </div>
                
            </div>
        </div>
    )
}

export default DetailEvent;
