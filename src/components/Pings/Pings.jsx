import "./Pings.css";

function Pings() {
    return (
        <div className="pings"> 
            <div className="head">
                <div className="neck"></div>              
                <div className="screen">
                    <div className="eye-left"></div>
                    <div className="eye-right"></div>
                </div> {/* screen ending */}
            <div className="ear-left"></div>
            <div className="ear-right"></div>
            <div className="antenna-left">
                <div className="antenna-tip"></div>
            </div>
            <div className="antenna-right">
                <div className="antenna-tip"></div>
            </div>  
            <div className="chest">
                <div className="chest-plate">
                    <p>B-001
                        </p>
                    </div>
            </div> {/* chest ending*/}
                <div className="left-arm-socket"></div>
                <div className="right-arm-socket"></div>
                <div className="belly"></div>
                <div className="hips"></div>
        </div>
    </div>
    );
}
export default Pings;