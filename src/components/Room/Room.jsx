import "./Room.css";

function Room({ children }) {
    return (
            <div className="room">
                {children}
        </div>
    );
}

export default Room;
