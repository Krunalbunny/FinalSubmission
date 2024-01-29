// AsyncAction.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/asyncActions';

const AsyncAction = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.asyncData);

  useEffect(() => {
    // Dispatch the async action when the component mounts
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h2>Async Action Example</h2>
      {data.loading ? (
        <p>Loading...</p>
      ) : data.error ? (
        <p>Error: {data.error}</p>
      ) : (
        <ul>
          {data.items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AsyncAction;
