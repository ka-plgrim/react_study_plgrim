import {useState} from "react";
import React from "react";
import Product from "../../../pages/FakeApiPage/Product/style/Product.css";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const ProductInfo = ({items}) => {

    const [quantity, setQuantity] = useState(1);

    const handleClickCounter = (num) => {
        setQuantity((prev) => prev + num);
    };

    return (
        <>
            {items.map((item) =>
                <div key={item.id}>
                    <img className="detail_img" src={item.image}/>
                    <table className="detail_table">
                        <thead>
                        <tr>
                        <th colSpan={2}><h2>[{item.category} ] {item.title}</h2></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><h2>{item.description}</h2></td>
                        </tr>
                        <tr>
                            {<td colSpan={2}>
                                <h2 className="price_font">${item.price}</h2>
                                <Button variant="outlined"
                                        disabled={quantity === 1}
                                        onClick={()=>handleClickCounter(-1)} > - </Button><span>{quantity} 개</span> <Button variant="outlined" onClick={()=>handleClickCounter(+1)} >+</Button>
                            </td>}
                        </tr>
                        <tr>
                            <Button variant="contained" size="large" className="btn_cart">
                                CART</Button>
                            <Link to={`/fake-api/product`}>
                            <Button variant="contained" size="large" >
                                LIST</Button>
                            </Link>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default ProductInfo;


