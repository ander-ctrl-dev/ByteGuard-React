import "./Window.css";

function Window() {
    return (
        <div className="window-frame">
            <div className="window">
                <div className="window-glow"></div>

                <div className="pane vertical"></div>
                <div className="pane horizontal"></div>

                <div className="sky">
                    <div className="moon"></div>

                    <div className="star s1"></div>
                    <div className="star s2"></div>
                    <div className="star s3"></div>
                    <div className="star s4"></div>
                    <div className="star s5"></div>
                </div>
            </div>

            <div className="windowsill"></div>
        </div>
    );
}

export default Window;
