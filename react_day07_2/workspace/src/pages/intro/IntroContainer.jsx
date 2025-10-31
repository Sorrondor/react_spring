import React from 'react';
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

const IntroContainer = () => {
  const { jobs } = useSelector(state => state?.jobs)
  console.log(jobs)

  // url?key=value : 쿼리스트링
  const [searchParams] = useSearchParams()
  const job = searchParams.get("jobs")
  const {name, skills} = jobs[job];
  const skillList = skills.map((skill, i) => (
    <li key={i}>{skill}</li>
  ))

  return (
    <div>
      <h1>소개 페이지</h1>
      <p>이름: {name}</p>
      <p>직업: {job}</p>
      <ul>
        {skillList}
      </ul>
    </div>
  );
};

export default IntroContainer;