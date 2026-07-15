import Room from "./components/Room/Room";
import Window from "./components/Window/Window";
import HangingPlant from "./components/Hanging-Plant/Hanging-Plant";
import Floor from "./components/Floor/Floor";
import Rug from "./components/Rug/Rug";
import Table from "./components/Table/Table";
import BeanBag from "./components/BeanBag/BeanBag";
import Pings from "./components/Pings/Pings";

function App() {
    return (
        <Room>
            <Floor />
            <Window />
            <HangingPlant />
            <Rug />
            <Table />
            <Pings />
            <BeanBag side="left" />
            <BeanBag side="right" />
        </Room>
    );
}

export default App;