import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, fetchUserById, increment } from '../redux/Reducers/User';

const UserComponent = () => {
    const someValue = useSelector((state) => state.user.someValue);
    const testdata = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserById())
    }, [])

    return (
        <div>
            <p>Value from Redux: {someValue}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default UserComponent;
