import react from "react";
import "./Popup.scss";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Popup({ trigger, children, setTrigger }) {
  const style = { color: "#838383", fontSize: "1.5em", cursor: "pointer" };
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <FaTimes
          style={style}
          className="close-btn"
          onClick={() => setTrigger(false)}
        />

        {children}
      </div>
    </div>
  ) : (
    ""
  );
}
