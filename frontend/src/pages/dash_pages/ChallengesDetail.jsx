import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Main from '../../components/section/Main'
import '../../css/ChallengeDetail.scss';

const ChallengeDetail = () => {
  const location = useLocation();
  const { title, content, answers = [] } = location.state || {};

  // 입력 칸의 답변을 추적하기 위해 상태 생성
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState('');

  // 입력 값이 변경될 때 호출되는 함수
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  // title과 content가 비어있는 경우 처리
  if (!title || !content) {
    return (
      <div>Loading...</div> // 혹은 에러 메시지를 출력하거나 리다이렉트할 수 있음
    );
  }

  const handleSubmit = () => {
    if (answer.trim() === '') return; // 답변이 비어 있는 경우 처리
    if (answers[currentIndex] && answer === answers[currentIndex]) {
      setCurrentIndex(currentIndex + 1);
      setAnswer('');
    } else {
      setAnswer('');
    }
  };

  return (
    <Main title={`문제 ${title}`} description={`문제 ${title} 내용`}>
      <div className='challenge-detail'>
        <h2>{title}</h2>
        <div className='prob-detail'>
          <p>{content[currentIndex]}</p> {/* 문제 내용 출력 */}
          <input
            type="text"
            placeholder={`정답 입력`}
            value={answer} // 해당 입력 칸의 답변
            onChange={handleAnswerChange} // 입력 값이 변경될 때 호출
          />
          <button onClick={handleSubmit}>정답 제출</button>
        </div>
      </div>
    </Main>
  );
};

export default ChallengeDetail;
