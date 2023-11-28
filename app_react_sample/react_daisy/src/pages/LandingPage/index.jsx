import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axios';

const LandingPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts({});
    }, [])

    const fetchProducts = async ({}) => {
        const params = {}

        try {
            const response = await axiosInstance.get('/productList', { params })
            console.dir("response");
            console.dir(response.data.godSampleList);
            setProducts(response.data.godSampleList);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section>
            <div className="landingPage">
                <h2>전시 리스트</h2>
            </div>

            {/* 상품 목록 */}
            <div className="landingPage">
                {products.map(product =>
                    <li product={product} key={product.godNo}>{product.godNo} {product.itmNo} {product.godNm} {product.cvrPrc}</li>
                )}
            </div>
        </section>
    )
}

export default LandingPage