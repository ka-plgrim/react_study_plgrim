import {getCategories, getProducts, getSpecificList} from "./api/product";
import {AppBar, Button, Stack, Typography} from "@mui/material";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Product from "../../../pages/FakeApiPage/Product/style/Product.css";


export default function ProductCategoryMenu({onClick}) {

    const [categories, setCategories] = useState([]);


    // 카테고리 조회
    const getCategoryList = async () => {

        const response = await getCategories()
        console.log('Menu', response.data)

        try {
            setCategories(response.data);
        } catch (error) {
            console.log('error>>>>', error);
        }
    }

    useEffect(() => {
        getCategoryList();
    }, []);

    return (
        <AppBar position='static' sx={{height: 50}}>
            <Stack direction='row' spacing={3} sx={{marginTop: 1, marginLeft: 2}}>
                <Button color='inherit' onClick={onClick}>ALL</Button>
                {categories.slice(0).reverse().map((category, index) => (
                    <Button color='inherit' onClick={onClick}>{category}</Button>
                ))}
            </Stack>
        </AppBar>

    )
}
