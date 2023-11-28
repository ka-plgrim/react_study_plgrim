import {fakeApiRequest} from '../../../../utils/axios';

// 상품 전체 리스트 조회
export const getProducts = async () => {
    const products = await fakeApiRequest.get('/products');
    return products;
}

// 카테고리 조회
export const getCategories = async () => {
    const categories = await fakeApiRequest.get('/products/categories');

     return categories;
}

// 품목별 리스트 조회
export const getSpecificList = async (category) => {
    const specificList = await fakeApiRequest.get('/products/category/' + category);
    return specificList;
}

// 제품 상세 조회
export const getProductInfo = async (id) => {
    const productInfo = await fakeApiRequest.get('/products/' + id);
    return productInfo;
}




