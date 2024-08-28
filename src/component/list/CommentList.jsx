import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content : center;

    & > * {
        :not(:last-child) {
            margin-bottom : 16px;
        }
    }
`;

// props에는 comments 라는 배열이 들어오게 되며, 이 배열에는 comment 객체들이 들어 있음.
// 이 배열에 map 함수를 사용하여서 각 댓글 객체를 CommentListItem 컴포넌트로 넘겨 화면에 댓글을 표시함.
function CommentList(props) {
    const { comments } = props;

    return (
        <Wrapper>
            {comments.map((comment, index) => {
                return <CommentListItem key={comment.id} comment={comment} />;
            })}
        </Wrapper>
    );
}

export default CommentList;