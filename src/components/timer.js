import { useEffect, useState } from 'react'
import styless from './timer.module.css';


const Timer = () => {

    const inviteDate = new Date("Nov 8, 2020 08:30:00").getTime();
    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const x = setInterval(function () {
            const currDate = new Date().getTime();
            const distance = inviteDate - currDate;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimer({
                days,
                hours,
                minutes,
                seconds,
            })
        }, 500)
        return () => {
            clearInterval(x);
        }

        //react-hooks/exhaustive-deps
    }, [inviteDate])

    useEffect(() => {
        const timerEl = document.getElementById("timer");
        for (let child of timerEl.children) {
            const animated = child.children[0];
            if (animated.classList.contains("zoom-in")) {
                animated.classList.remove("zoom-in")
            } else {
                animated.classList.add("zoom-in")
            }
        }
        //react-hooks/exhaustive-deps
    }, [timer.seconds])

    return (
        <div id="timer" className={"row justify-content-md-center justify-content-sm-center " + styless.timeInvitations}>
            <div className="col-md-3 col-sm-4 d-flex justify-content-center">
                <div className={styless.time + " animated"}>
                    <h3>{timer.days}</h3>
                    <span>Hari</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 d-flex justify-content-center">
                <div className={styless.time + " animated"}>
                    <h3>{timer.hours}</h3>
                    <span>Jam</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 d-flex justify-content-center">
                <div className={styless.time + " animated"}>
                    <h3>{timer.minutes}</h3>
                    <span>Menit</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 d-flex justify-content-center">
                <div className={styless.time + " animated"}>
                    <h3>{timer.seconds}</h3>
                    <span>Detik</span>
                </div>
            </div>
        </div>
    )
}

export default Timer;
