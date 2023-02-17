import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//selectors
import { getTestAction } from '../store/app/selectors/AppSelectors';
//actions
import { updateTestString } from '@/ts/store/app/slices/AppSlice';

const TestComponent = () => {
  const dispatch = useDispatch(),
    testAction = useSelector(getTestAction);

  return (
    <div className="container">
      <p>
        Current environment API is <strong>{process.env.BASE_URL}</strong>
      </p>
      <p>
        Testing the store <strong>{testAction}</strong>
      </p>
      <div>
        <button onClick={() => dispatch(updateTestString())}>Change text</button>
      </div>
    </div>
  );
};

export default TestComponent;
