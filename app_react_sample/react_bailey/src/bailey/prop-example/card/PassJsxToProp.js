import './css/jsxToProp.css'
import Card from "./Card";

export default function PassJsxToProp() {
    return (
        <div>
            <Card titleName="Photo">
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </Card>
            <Card titleName="About">
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
        </div>
    );
}
