//css import
import "./../css/main.css"

//lib import
import styled from 'styled-components';
import {Component,useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//icon import
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";





let StyledIcon = styled(IoIosArrowDropdown)`
				display:flex;
				color: black;
				font-size: 16px;
				margin-top:10px;
				margin-left:3px;
				
`;

let SearchIcon=styled(CiSearch)`

color:gray;
font-size:30px;

`;



function Main (){
				
				let [userData, chUser] = useState([]);
  let [dpModal, chDpModal] = useState([]);
				let [btn, btnSwitch] = useState(false);
  let [check,chCheck] = useState(false);
				
				useEffect(() => {
    // axios로 public 폴더에 있는 data.json 파일을 불러옴
    axios.get('/json/userData.json')
      .then((response) => {
        // response.data가 빈 객체 배열일 경우, 데이터가 비어 있을 수 있으니 확인
        if (response.data && response.data.length > 0) {
          chUser(response.data);  // 데이터를 상태에 저장
        } else {
          console.log('No data available in JSON');
        }
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
      });
  }, []); // 의존성 배열 추가
				
  
  
  useEffect(() => {
    axios.get('/json/dropModal.json')
      .then((response) => {
        if (response.data && response.data.length > 0) {
          chDpModal(response.data);
        } else {
          console.log('No data available in JSON');
        }
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
      });
  }, []);
				
				return(
				<>
				
				<TopBar check={check} chCheck={chCheck}/>
  {check ?(
    <div className="drop_modal">
    <p> 무엇을 찾으시나요?</p>
    {dpModal.map((item,i)=>(
				    <DropModal item={item} chDpModal={chDpModal} i={i} />
				    ))}
    </div>
    )
    : null}
				
								
								
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				<div className="idpwBtn">
      {/* 버튼을 눌러 btn 상태 변경 */}
      <button onClick={() => btnSwitch(!btn)}>
        {btn ? "Hide" : "Show"}
      </button>
      {btn ? <IdPw userData={userData} /> : null}
    </div>
				</>
				)
				
				
}


//타이틀바
function TopBar(props){
return(
								<div className="title">
												<Link className="logo" to="/main">coupang</Link>
												<span onClick={()=>{
												  props.chCheck(!props.check);
												  
												}} ><StyledIcon/></span>
				<span className="noticeIcon"><IoIosNotifications/></span>
  
  <div className="searchBox">
  <SearchIcon className="searchIcon"/>
  <span className="searchIcon"> 쿠팡에서 검색하세요! </span>
  </div>
  
  
								</div>
				)
};

//타이틀옆 체크 누르면 보이는 모달창임
function DropModal(props){
				return(
								<>
												<div className="card">
												<img className="logocp" src={props.item.img}></img>
				<div className="subTitle">
																<h3>{props.item.title}</h3>
																<span> {props.item.content} </span>
				</div>
												</div>
								</>
				)
};

//userData 출력 컴포넌트
function IdPw(props){
				return(
				<>
				<h1>Json 파일 axios로 불러와서 출력하는 예제 ㅡ 버튼 하나 만들고 안보이게 해놓을거임</h1>
      <ul>
          {props.userData.length > 0 ? (
            props.userData.map((user) => (
              <li key={user.id}>
                {user.id} - {user.pw} - {user.userName}
              </li>
            ))
          ) : (
            <li>No user data available</li>
          )}
        </ul>
				</>
				)
};





export default Main;
