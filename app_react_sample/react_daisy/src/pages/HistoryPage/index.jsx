import React from 'react'
import { useSelector } from 'react-redux'

const HistoryPage = () => {

  const userData = useSelector(state => state.user?.userData);

  return (
    <section>
      <div className="historyPage">
        <h2>나의 활동 로그</h2>
      </div>
    </section>
  )
}

export default HistoryPage