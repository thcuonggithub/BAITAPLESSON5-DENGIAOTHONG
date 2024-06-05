import { useState } from "react";
import Light from "../Light/Light";
import "./TrafficLight.css";

const Lights = {
    Red: "red",
    Yellow: "yellow",
    Green: "green",
};
function TrafficLight() {
    const [lightOn, setLightOn] = useState(Lights.Red);
    const turnOnNextLight = () => {
        if (lightOn === Lights.Red) {
            setLightOn(Lights.Yellow);
            return;
        }
        if (lightOn === Lights.Yellow) {
            setLightOn(Lights.Green);
            return;
        }
        if (lightOn === Lights.Green) {
            setLightOn(Lights.Red);
            return;
        }
    };
    return (
        <>
            <div className="traffic-light">
                <Light color={Lights.Red} isOn={lightOn === Lights.Red} />
                <Light color={Lights.Yellow} isOn={lightOn === Lights.Yellow} />
                <Light color={Lights.Green} isOn={lightOn === Lights.Green} />
            </div>
            <button className="btn" onClick={turnOnNextLight}>Chuyển</button>
        </>
    );
}
export default TrafficLight

