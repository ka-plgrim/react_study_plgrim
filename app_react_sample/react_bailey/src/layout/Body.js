import React from "react";
import {Route, Routes} from "react-router-dom";
import BoardList from "../bailey/routes/BoardList";
import BoardDetail from "../bailey/routes/BoardDetail";
import Menu from "../bailey/routes/Menu";
import BoardJson from "../bailey/routes/BoardJson";
import BoardRequestParam from "../bailey/routes/BoardRequestParam";
import ThinkWithReact from "../bailey/think-with-react/ThinkWithReact";
import Gallery from "../bailey/prop-example/gallery/Gallery";
import ProfileAvartar from "../bailey/prop-example/avartar/Avartar";
import PassJsxToProp from "../bailey/prop-example/card/PassJsxToProp";
import OnOffCounter from "../bailey/state-example/OnOffCounter";
import DrinkList from "../bailey/prop-example/drink/Drink";
import Persons from "../bailey/prop-example/person/Persons";
import Scientists from "../bailey/prop-example/person/Scientists";
import RecipeList from "../bailey/prop-example/person/Recipes";

/**
 * 이동했을때 어떤 컴포넌트(컨텐츠)를 보여줄것인지에 대한 정보
 * */
const Body = (props: {children: React.ReactNode}) => {
    return (
        <>
            <Routes>
                <Route path="/project/bailey" element={<Menu/>}/>
                <Route path="/project/bailey/board" element={<BoardList/>}/>
                <Route path="/project/bailey/board/:idx" element={<BoardDetail/>}/>
                <Route path="/project/bailey/json-object" element={<BoardJson/>}/>
                <Route path="/project/bailey/request-param" element={<BoardRequestParam/>}/>
                <Route path="/project/bailey/think-with-react" element={<ThinkWithReact/>}/>
                <Route path="/project/bailey/prop-example/gallery" element={<Gallery/>}/>
                <Route path="/project/bailey/prop-example/avartar" element={<ProfileAvartar/>}/>
                <Route path="/project/bailey/prop-example/card" element={<PassJsxToProp/>}/>
                <Route path="/project/bailey/prop-example/drinks" element={<DrinkList/>}/>
                <Route path="/project/bailey/prop-example/persons" element={<Persons/>}/>
                <Route path="/project/bailey/prop-example/persons/scientists" element={<Scientists/>}/>
                <Route path="/project/bailey/prop-example/persons/recipes" element={<RecipeList/>}/>
                <Route path="/project/bailey/state-example/on-off-counter" element={<OnOffCounter/>}/>
            </Routes>
        </>
    );
};

export default Body;
