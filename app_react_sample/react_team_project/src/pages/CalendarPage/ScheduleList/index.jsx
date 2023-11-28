import React, { useState } from 'react';
import '../../../calendar.css';
import scheduleList from '../../../DB/calendarData.json';
import {format} from 'date-fns';

const ScheduleList = () => {

    const daysOfWeek = ['일','월','화','수','목','금','토'];

    const fnGetDayOfWeek = (dt) => {
        let dayIdx = new Date(dt).getDay();
        return daysOfWeek[dayIdx];
    }

    const fnDateFormat = (d) => {
        let newDt = "-";
        let tempDt = "";
        if(d != null && d != ""){
            tempDt = d.toString().substring(0,4) + "-" + d.toString().substring(4,6) + "-" + d.toString().substring(6,8);
            newDt = d.toString().substring(0,4) + "." + d.toString().substring(4,6) + "." + d.toString().substring(6,8) + " " + fnGetDayOfWeek(tempDt);
        }
        return newDt;
    }

    const [searchWord, setSearchWord] = useState('');
    const [totalCnt, setTotalCnt] = useState(scheduleList.schedules.length);
    const searchItems = scheduleList.schedules.filter((result) => {
        if(searchWord == null || searchWord == "")
            return result;
        else if(result.title.toLowerCase().includes(searchWord) || result.location.toLowerCase().includes(searchWord))
            return result;
    }).map((result) => {
        return (
            result.isImportant == true ?
                <tr key={result.day+''+result.index} style={{color:"#ff3434"}}>
                    <td>{fnDateFormat(result.day)}</td>
                    <td>{result.startTime} ~ {result.endTime}</td>
                    <td>{result.location}</td>
                    <td>{result.title}</td>
                </tr>
                :
                <tr key={result.day+''+result.index}>
                    <td>{fnDateFormat(result.day)}</td>
                    <td>{result.startTime} ~ {result.endTime}</td>
                    <td>{result.location}</td>
                    <td>{result.title}</td>
                </tr>
        )
    });

    const fnSearch = () => {
        let word = document.getElementById("txtSearchWord").value;
        if(word == null || word.trim() == ""){
            alert("검색어를 입력 해주세요");
            return false;
        }
        setSearchWord(word);
        let searchCnt = 0;
        scheduleList.schedules.filter((res) => {if(res.title.toLowerCase().includes(word) || res.location.toLowerCase().includes(word)) searchCnt++;});
        setTotalCnt(searchCnt);
    }

    const fnReset = () => {
        setSearchWord(null);
        document.getElementById("txtSearchWord").value = "";
        setTotalCnt(scheduleList.schedules.length);
    }

    const fnSearchKeyPress = (e) => {
        if(e.key == 'Enter')
            fnSearch();
    }

    return (
        <section className="search-page">
            <h2>일정 조회 리스트 및 검색</h2>
            <table>
                <tr>
                    <td style={{border:"none", margin:0, padding:0}}><input className="search-input" type="text" placeholder="위치 또는 제목 입력 해주세요" id="txtSearchWord" onKeyPress={fnSearchKeyPress}/></td>
                    <td style={{border:"none", margin:0, padding:0}}><button className="search-btn" onClick={fnSearch}>검색</button></td>
                    <td style={{border:"none", margin:0, padding:0}}><button className="search-btn" onClick={fnReset}>초기화</button></td>
                </tr>
            </table>
            {
            /*
            <div className="search-no-result" id="divSearchNoResult">
                검색 결과 없습니다.<br/><span>키워드를 바꾸어 다시 검색해 보세요.</span>
            </div>
            * */
            }
            <div>
                <div className="search-header-txt">총<span className="search-header-cnt" id="totalCnt">({totalCnt})</span></div>
                <table id="tbSearchResult" className="search-table">
                    <thead>
                        <tr>
                            <th width="150px">일자</th>
                            <th width="150px">시간</th>
                            <th width="150px">위치</th>
                            <th>제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchItems}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ScheduleList;