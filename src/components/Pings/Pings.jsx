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
                <div className="left-arm"></div>
                    <div className="right-arm"></div>
                    <div className="left-forearm">
                        <div className="left-hand"></div>
                    </div>
                    <div className="right-forearm">
                        <div className="right-hand"></div>
                    </div>
                <div className="chest-plate">
                    <p>B-001
                        </p>
                    </div>
            </div> {/* chest ending*/}
                <div className="shoulder-1"></div>
                <div className="shoulder-2"></div>
                <div className="belly"></div>
                <div className="hips">
                    <div className="left-leg">
                        <div className="left-ankle">
                            <div className="left-foot"></div>
                        </div>
                    </div>
                    <div className="right-leg">
                        <div className="right-ankle">
                            <div className="right-foot"></div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
}
export default Pings;