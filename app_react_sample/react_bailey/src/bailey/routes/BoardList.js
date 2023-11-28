import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const boards = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/boards");
      setBoardList(response.data.boardDto);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    boards();
  }, []);

  return (
    <div>
      <ul>
        {boardList.map((board) => (
          <li key={board.idx}>
            <Link to={`/project/bailey/board/${board.idx}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;
