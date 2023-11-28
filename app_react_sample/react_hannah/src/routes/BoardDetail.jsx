import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Board from "../components/Board";

const BoardDetail = () => {

    const {idx} = useParams(); // 현재 페이지의 url 파라미터를 꺼낼수 있다( /board/:idx 에서 :idx )

    const [loading, setLoadiong] = useState(true);
    const [board, setBoard] = useState({});
    const getBoard = async () => {
        const response = await (await axios.get(`/brd/${idx}`)).data;

        // 예외처리 공통으로 처리할 수 있는 방법(**)
        try {
            setBoard(response.data);
            setLoadiong(false);

        } catch (error) {
            console.log(error);
        }
    }
    // 특정 컴포넌트를 단 한번만 실행시키거나, deps에 들어가는 조건에 따른 업데이트될 때만 실행시키기 위해 사용
    useEffect(() => {
        getBoard();
    }, []);

    return (
        /**loading ? loading 문구 : 로드 완료시 Board component의 내용 */
        <div>
            {loading ? (<h2>loading...</h2>) : (
                <Board
                    idx={board.idx}
                    title={board.title}
                    contents={board.contents}
                    createdBy={board.createdBy}
                />
            )}
        </div>
    );
};

export default BoardDetail