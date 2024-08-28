import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

// 두개의 스테이트를 가지고 있음.
// 하나는 글의 제목을 위한 state
// 다른 하나는 글의 내용을 위한 스테이트임.
// 두개의 state 모두 useState 훅을 이용하여 선언한 것을 볼 수 있음.
// 그리고 실제 화면에 나타나는 부분은 TextInpust 컴포넌트를 사용해서 글의 제목과 내용을 각각 입력 받을 수 있도록 구성함.
function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                <Button
                    title='글 작성하기'
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;