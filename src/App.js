import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

// React Router DOM을 이용해 총 3가지의 패스에 대해서 라우팅을 제공하고 있음.
// 인덱스 경로인 /로 접속하면 메인 페이지 컴포넌트를 보여주고
// /post/write로 접속하면 post-write 페이지 컴포넌트를 부여주고
// /post-id로 접속하면 post-view 페이지 컴포넌트를 보여줌.
// :postid는 동적으로 변하는 파라미터를 위한 값임
function App(props) {
    return (
        <div>
            <MainTitleText>POP의 미니 블로그</MainTitleText>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </div>
    );
}

export default App;