import styled from "styled-components";

// 스타일드 컴포넌트를 사용하여서 버튼 태그에 스타일을 입힘.
const StyledButton = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    cursor : pointer;
`;

// 프롭스로 받은 타이틀이 버튼 목록에 표시되도록 해주었으며,
// 프롭스로 받은 온클릭은 스타일드 버튼에 온클릭에 넣어 줌으로써 클릭 이벤트를 상위 컴포넌트에서 받을 수 있도록 함.
function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;