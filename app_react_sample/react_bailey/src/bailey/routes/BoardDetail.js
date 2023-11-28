import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Board from "../components/Board";

const BoardDetail = () => {
  const { idx } = useParams();
  const [loading, setLoading] = useState(true);
  const [boardDetail, setBoardDetail] = useState({});

  const board = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/board/${idx}`,
      );
      setBoardDetail(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    board();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Board
          idx={boardDetail.idx}
          title={boardDetail.title}
          contents={boardDetail.contents}
          createdBy={boardDetail.createdBy}
        />
      )}
    </div>
  );
};

export default BoardDetail;
