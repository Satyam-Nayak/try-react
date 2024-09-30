import Dell from "./Dell";

function Lenovo(props) {
    console.log(props);
    let b = props.data;
    console.log(b);

    return (
        <div>
            <h1>i am Lenovo Component</h1>
            {/* <Dell/> */}
        </div>
    )
}
export default Lenovo