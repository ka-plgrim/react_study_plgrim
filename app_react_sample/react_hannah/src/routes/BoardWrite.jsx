import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const BoardWrite = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        createdBy: '',
        contents: '',
    });

    const {title, createdBy, contents} = board; //비구조화 할당


    /**입력시 input event*/
    const onChange = (event) => {
        const {value, name} = event.target; //event.target에서 name과 value만 가져오기

        setBoard({
            ...board,
            [name]: value,
        });
    };

    /**게시글 등록(Axios)*/
    const saveBoard = async () => {
        try {
            await axios.post(`/brd/write`, board).then((res) => {
                alert('등록되었습니다.');
                navigate('/brd');
            });
        } catch (error) {
            console.log(error);
        }
    };

    /**목록으로 이동*/
    const backToList = () => {
        navigate('/brd');
    };

    return (
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange}/>
            </div>
            <br/>
            <div>
                <span>작성자</span>
                <input
                    type="text"
                    name="createdBy"
                    value={createdBy}
                    onChange={onChange}
                />
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
                <button onClick={saveBoard}>저장</button>
                <button onClick={backToList}>취소</button>
            </div>
        </div>
    );
};

export default BoardWrite;