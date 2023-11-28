import {useState} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Link, useParams} from "react-router-dom";


export default function ProductList({productList}) {

    return (
        <ImageList sx={{width: 1200, height: 500}} cols={3} gap={30}>
            {productList.map((product) => (
                <ImageListItem key={product.id}>
                    <img
                        src={product.image}
                        alt={product.title}
                    />
                    <Link to={`/fake-api/product/${product.id}`}>
                        <ImageListItemBar
                            title={product.title}
                        /></Link>
                </ImageListItem>
            ))}
        </ImageList>
    )
}
