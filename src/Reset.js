function Reset({setBill, setMyTip, setFriendTip}) {

    function reset() {
        setBill('');
        setMyTip('');
        setFriendTip('');
    }

    return (
        <button onClick={reset}>Reset all</button>
    )
}

export default Reset
