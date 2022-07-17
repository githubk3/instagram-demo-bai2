import "./ContainerDown.css";
import Body from "../Body";
import Sidebar from "../Sidebar";

function ContainerDown() {
  return (
    <div className="body">
      <section className="body__content">
        <Body />
        <Sidebar />
      </section>
    </div>
  );
}

export default ContainerDown;
