import "./Table.css";
import CoffeeMug from "./Coffee-Mug/Coffee-Mug";
import Notebook from "./Notebook/Notebook";
import Pencil from "./Pencil/Pencil";


function Table(){
    return (
        <div className="table">

        <CoffeeMug />
        <Notebook />
        <Pencil />

        </div>
    );
}

export default Table;