import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const BoardList = () => {

    // Link와 비슷한 기능, 페이지 전환시 추가로 처리해야할 로직이 있을 경우 사용
    const navigate = useNavigate();

    // const [현재 상태변수, 상태 갱신 setter ] = useState(초기값) >> 상태 관리
    const [boardList, setBoardList] = useState([]);


    /***목록 조회 (Axios)*/
    const getBoardList = async () => {
        try {
            const response = (await axios.get('/brd')).data; // Proxy 설정 했기 때문에 Full URL 표시 안해도됨
            setBoardList(response.data);
        } catch (error) {
            console.log("Errorr>>>>", error)
        }
    };

    /***글쓰기 페이지 이동 */
    const moveToWrite = () => {
        navigate('/brd/write');
    };

    useEffect(() => {
        getBoardList(); // 게시글 목록 조회 함수 호출
    }, []);

    return (
        <div>
            <ul className="table-bd">
                {boardList.map((board) => (
                    // map 함수로 데이터 출력
                    <li key={board.idx} className="table-bd">
                        <Link to={`/brd/${board.idx}`}>{board.title}</Link>
                    </li>
                ))}
            </ul>

            <br/>
            <div>
                <button className="button-menu" onClick={moveToWrite}>글쓰기</button>
            </div>
        </div>
    );
};

export default BoardList;