import Lenovo from "./Lenovo";
const Hp = () => {
    let ark = 100;
    console.log(ark);
    return(
        <div className="Hp">
            <h1>i am component</h1>
            <b>The ark is : {ark}</b>
            <Lenovo data={ark}/>
        </div>
    );
}

export default Hp;
