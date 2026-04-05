import { useReducer, useState } from "react";
import useTierFetch from "../hooks/useTierFetch";

function setInput(userInput, action) {
    switch (action.type) {
        case 'CHANGENAME':
            return {
                ...userInput,
                gameName: action.payload
            }
        case 'CHANGETAG':
            return {
                ...userInput,
                tag: action.payload
            }
    }
}

function CheckTier() {

    const { userTier, fetchTier, loading, error } = useTierFetch();

    const [userInput, dispatch] = useReducer(setInput, { gameName: '', tag: '' })

    return (
        <>
            <input type="text" placeholder="게임 이름 입력" value={userInput.gameName} onChange={(e) => { dispatch({ type: 'CHANGENAME', payload: e.target.value }) }} />
            <input type="text" placeholder="태그 입력" value={userInput.tag} onChange={(e) => { dispatch({ type: 'CHANGETAG', payload: e.target.value }) }} />
            {loading && '로딩 중입니다'}
            {error && error}
            {console.log(userTier)}
            <button onClick={() => { fetchTier(userInput.gameName, userInput.tag) }}>제출</button>
            <p>{userTier.tier}</p>
            <p>{userTier.rank}</p>
            <input></input>
        </>
    )
}

export default CheckTier;