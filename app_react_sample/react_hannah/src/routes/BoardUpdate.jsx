import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const BoardUpdate = () => {
    const navigate = useNavigate();
    const {idx} = useParams();
    const [board, setBoard] = useState({
        idx: 0,
        title: '',
        createdBy: '',
        contents: '',
    });

    const {title, createdBy, contents} = board; //비구조화 할당


    /**상세 내용 조회**/
    const getBoard = async () => {
        const resp = await (await axios.get(`/brd/${idx}`)).data;
        setBoard(resp.data);
    };

    /** 내용 수정 시, input event**/
    const onChange = (event) => {
        const {value, name} = event.target; //event.target에서 name과 value만 가져오기
        setBoard({
            ...board,
            [name]: value,
        });
    };

    /**내용 수정(Axios) **/
    const updateBoard = async () => {
        await axios.patch(`/brd/update`, board).then((res) => {
            alert('수정되었습니다.');
            navigate('/brd/' + idx);
        });
    };

    /**수정 취소(상세보기로 돌아가기) **/
    const backToDetail = () => {
        navigate('/brd/' + idx);
    };

    useEffect(() => {
        getBoard(); // 상세 내용 조회
    }, []);

    return (
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange}/>
            </div>
            <br/>
            <div>
                <span>작성자</span>
                <input type="text" name="createdBy" value={createdBy} readOnly={true}/>
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea
                    name="contents"
                    cols="30"
                    rows="10"
                    value={contents}
                    onChange={onChange}
                ></textarea>
            </div>
            <br/>
            <div>
                <button onClick={updateBoard}>수정</button>
                <button onClick={backToDetail}>취소</button>
            </div>
        </div>
    );
};

export default BoardUpdate;