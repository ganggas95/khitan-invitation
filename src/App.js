import { useEffect } from "react"
import { FaAngleDown } from "react-icons/fa";
import DateEvent from "./components/DateEvent";
import Dearest from "./components/dearest";
import DetailEvent from "./components/detailEvent";
import EventLocation from "./components/EventLocation";
import Footer from "./components/Footer";
import Timer from "./components/timer";
import styless from './App.module.css'
import { listUndangan } from "./data/undangan";

const App = () => {

  const invitationCode = window.location.search.replace("?invitation-code=", "");

  const undangan = listUndangan.find(d => d.invitationCode === invitationCode);

  const goDown = () => {
    const scroll = document.getElementById("detail-event")
    scroll.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  useEffect(() => {
    const x = setInterval(() => {
      const goDownBtn = document.getElementById('goDownBtn');
      if (goDownBtn.classList.contains("down")) {
        goDownBtn.classList.remove("down")
      } else {
        goDownBtn.classList.add("down");
      }
    }, [2500])
    return () => {
      clearInterval(x);
    }
  }, [])
  return (
    <div className={styless.wrapper}>
      <div className={styless.container}>
        <header className={styless.header}>
          <div className={"container-fluid d-flex flex-col justify-content-center align-items-center"}>
            <h3 className={styless.invitationTitle}>Undangan</h3>
            <h3 className={styless.invitationTitle}>Walimatul Khitan</h3>
            <h2 className={styless.invitationName}>Riziq Alfhathanah</h2>
            <Timer />
            <Dearest dearest={undangan ? undangan.name : ""} />
          </div>

          <div id="goDownBtn" className={styless.goDown}>
            <button type="button" onClick={goDown}>
              <span>Text</span>
              <FaAngleDown />
            </button>
            <span>Klik untuk melihat detail acara.</span>
          </div>
        </header>

        <section id="detail-event" className={styless.detailEvent}>
          <DetailEvent />
        </section>
        <section id="date-event" className={styless.dateEvent}>
          <DateEvent />
        </section>
        <section id="location-event" className={styless.locationEvent}>
          <EventLocation />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
