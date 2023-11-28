import Header from "./Header";
import Footer from "./Footer";

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Header></Header>
            <div>
                {props.children}
            </div>
            <Footer></Footer>
        </>
    );
}

export default Layout;