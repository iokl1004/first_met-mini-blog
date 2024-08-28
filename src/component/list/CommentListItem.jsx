import styled from "styled-components";

const Wrapper = styled.div`
    width : calc(100% - 32px);
    padding : 16px;
    display : flex;
    flex-direction : column;
    align-items: flex-start;
    justify-content : center;
    border : 1px solid grey;
    border-radius : 8px;
    cursor : pointer;
    background : white;
    :hover {
        background : lightgrey;
    }
`;

const ContentText = styled.p`
    font-size : 14px;
`;

// Props에서 comment 객체 하나만 사용하며, 커맨트 객체에는 사용자가 작성한 댓글 내용이 들어 있음.
// 글은 클릭이 가능했지만 댓글은 별도로 클릭하는 기능이 없기 때문에 onClick 이벤트를 별도로 처리해 주지 않아도 됨.
function CommentListItem(props) {
    const { comment } = props;

    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;