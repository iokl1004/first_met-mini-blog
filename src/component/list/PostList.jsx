import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

// Post 객체들이 들어 있으며, 이 Post 배열의 맵 함수를 이용하여 각 Post 객체에 대해 PostList아이템 컴포넌트를 만들어 렌더링하게 됨.
function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;