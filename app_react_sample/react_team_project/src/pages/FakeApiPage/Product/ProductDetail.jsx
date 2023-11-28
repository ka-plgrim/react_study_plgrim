import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getProductInfo} from "../../../components/fake-api/Product/api/product";
import ProductInfo from "../../../components/fake-api/Product/ProductInfo";
import product from "./index";


export default function ProductDetail() {

    const { id } = useParams();
    const [ productInfo, setProductInfo ] = useState([]);

    const getItemInfo = async () => {
        const response = await getProductInfo(id);
        setProductInfo([response.data]);
    };

    useEffect(() => {
        getItemInfo();
    }, []);

    return(
        <>
            <ProductInfo items={productInfo}/>
        </>
    )
}