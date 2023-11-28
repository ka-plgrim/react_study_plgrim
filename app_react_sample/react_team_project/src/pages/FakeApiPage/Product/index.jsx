import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import SearchBar from "../../../components/fake-api/Product/SearchBar";
import ProductCategoryMenu from "../../../components/fake-api/Product/ProductCategoryMenu";
import ProductList from "../../../components/fake-api/Product/ProductList";
import {getProducts} from "../../../components/fake-api/Product/api/product";


const ProductPage = () => {
    const [category, setCategory] = useState('ALL');
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');    // 검색어


    // 상품 전체 목록 조회
    const getProductList = async (category) => {
        const response = await getProducts();
        console.log('전체목록>>>', response)

        try {
            let products = response.data;
            if (category !== 'ALL') {
                setProducts(
                    products.filter((product) => product.category === category)
                );
                return ;
            }
            setProducts(products);
        } catch (error) {
            console.log('error>>>>', error);
        }
    }

    const handleCategory = (e) => {
        let selectedCategory = e.currentTarget.textContent;
        setCategory(selectedCategory);
    };

    useEffect(() => {
        getProductList(category);
    }, [category]);



    const changeHandler = (e) => {
            setSearch(e.target.value);
    }

    const filterdProduct = products.filter((product) => {

            if(search !== undefined || search === '') { // 검색창 입력 시
                return product.title.toLowerCase().includes(search.toLowerCase()); // 검색 내용 대소문자 구분없이 찾음
            } else {
                return product
            }


    });


    return (
        <section>
            <div>
                <h3>상품</h3>
            </div>
            <SearchBar search={search} changeHandler={changeHandler}/>
            <ProductCategoryMenu onClick={handleCategory}/>
            <ProductList productList={filterdProduct}/>
        </section>
    )
}

export default ProductPage;