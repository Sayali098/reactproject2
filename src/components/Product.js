import { useParams } from "react-router-dom";

// function Product({value})
function Product()
{
    
  
    const param=useParams();
    return(
     
        <div>
            <p>{param.id}</p>
            
             {/* <h4>{value}</h4> */}
        </div>
    );

}

export default Product;