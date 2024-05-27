import "./style.css";
import ReactDOM from "react-dom";
import App from "./components/App";

// // console.log(ReactDOM)
 const ans=ReactDOM.createRoot(document.getElementById("root"))
// console.log(ans);
// ans.render("Hello word!")
// var username="manish"
// ans.render(<h1>Xyz {username}</h1>);


// var product=(
// <>
//     <div className="col-3"><h2>Price 2000</h2>
//     <button>Add to cart</button>
//     </div>
//      <div className="col-3"><h2>Price 2000</h2>
//      <button>Add to cart</button>
//      </div>
// </>
// )
// ans.render(product);

ans.render(<App></App>)
