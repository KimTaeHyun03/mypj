import "./../css/main.css"

import styled from 'styled-components';
import { Component,useState,useEffect} from 'react';
import axios from 'axios';

import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";




let StyledIcon = styled(IoIosArrowDropdown)`
				display:flex;
				color: black;
				font-size: 16px;
				margin-top:10px;
				margin-left:3px;
				
`;



function Main (){
				
				let [userData, chUser] = useState([]);
				let [btn, btnSwitch] = useState(false);
				
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
				
				
				return(
				<>
				
				<TopBar/>
			<DropModal/>
				
				
								
								
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				<div className="idpwBtn">
      {/* 버튼을 눌러 btn 상태 변경 */}
      <button onClick={() => btnSwitch(!btn)}>
        {btn ? "Hide" : "Show"}
      </button>

      {/* btn이 true일 때만 div 태그를 보여줌 */}
      {btn ? <IdPw userData={userData} /> : null}
    </div>
				</>
				)
				
				
}


//타이틀바
function TopBar(){
return(
								<div className="title">
												<span className="logo">Coupang</span>
												<span><StyledIcon/></span>
				<span className="noticeIcon"><IoIosNotifications/></span>
								</div>
				)
};

//타이틀옆 체크 누르면 보이는 모달창임
function DropModal(){
				return(
								<>
												<p> 무엇을 찾으시나요?</p>
												<div className="card">
												<img className="logocp" src="/image/coupang.png"></img>
				<div className="subTitle">
																<h3>쿠팡</h3>
																<span> 로켓배송으로 스마트한 쇼핑 </span>
				</div>
												</div>
								</>
				)
};

function IdPw(props){
				return(
				<>
				<h1>Json 파일 axios로 불러와서 출력하는 예제인데 컴포넌트를 곁들인... 버튼 하나 만들고 안보이게 해놓을거임</h1>
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
