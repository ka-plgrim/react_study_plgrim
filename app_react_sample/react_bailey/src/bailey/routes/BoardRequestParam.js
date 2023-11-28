import axios from "axios";

const BoardRequestParam = () => {
    const boardRequestParam = {
        contents: "게시글 내용1",
        createdAt: "2023-10-24T05:50:21.328+00:00",
        createBy: "작성자1",
        idx: 1,
        title: "게시글 제목1"
    };

    const requestParam = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/board/request-param',
                {
                    params: boardRequestParam
                });
        } catch(error) {
            console.log(error);
        }
    }
    requestParam();

    return (
        <>
            <h2>board-request-param</h2>
        </>
    );
}

export default BoardRequestParam;