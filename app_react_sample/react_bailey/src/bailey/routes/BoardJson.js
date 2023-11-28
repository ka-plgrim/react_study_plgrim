import axios from "axios";

const BoardJson = () => {
    const boardJson = {
        contents: "게시글 내용1",
        createdAt: "2023-10-24T05:50:21.328+00:00",
        createBy: "작성자1",
        idx: 1,
        title: "게시글 제목1"
    };

    const requestBody = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8080/api/board/json-object',
                {"idx": boardJson.idx,
                      "contents": boardJson.contents},
                {
                    headers: { "Content-Type": `application/json`}
                }
            );
        } catch(error) {
            console.log(error);
        }
    }
    requestBody();

    return (
      <>
        <h2>board-json</h2>
      </>
    );
}

export default BoardJson;