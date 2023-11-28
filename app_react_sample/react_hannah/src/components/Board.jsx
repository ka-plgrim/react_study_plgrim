import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Board = ({ idx, title, contents, createdBy }) => {
    const navigate = useNavigate(); // Link와 유사, 특정 이벤트 핸들링 할때나 추가 로직 필요할 때 사용

    /**게시글 업데이트 component 이동*/
    const moveToUpdate = () => {
        navigate('/brd/update/' + idx);
    };

    /**게시글 삭제(Axios)*/
    const deleteBoard = async () => {
        if (window.confirm('게시글을 삭제하시겠습니까?')) {
            await axios.delete(`/brd/${idx}`).then((res) => {
                alert('삭제되었습니다.');
                navigate('/brd');
            });
        }
    };

    /**목록으로 이동*/
    const moveToList = () => {
        navigate('/brd');
    };

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h5>{createdBy}</h5>
                <hr />
                <p>{contents}</p>
            </div>
            <div>
                <button onClick={moveToUpdate}>수정</button>
                <button onClick={deleteBoard}>삭제</button>
                <button onClick={moveToList}>목록</button>
            </div>
        </div>
    );
};

export default Board;