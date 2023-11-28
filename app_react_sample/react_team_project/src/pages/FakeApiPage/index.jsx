import React from 'react'
import {Outlet} from "react-router-dom";
import FakeApiMenu from "./FakeApiMenu";

const FakeApiPage = () => {

    return (
        <section>
            <div className="boardPage">
                <h2>fake-api 프로젝트</h2>
                <FakeApiMenu />
                <div>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </section>
    )
}

export default FakeApiPage;