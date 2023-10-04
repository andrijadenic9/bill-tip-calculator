function Message({ bill, myTip, friendTip }) {
    const sumTipPercent = (Number(myTip + friendTip)) || 0;
    const tip = (bill * sumTipPercent) / 100;
    const price = bill + tip || 0

    return (
        <h2>
            Your bill is {bill ? bill : 0}$ + ({sumTipPercent}% tip) = {Math.round(price)}$
        </h2>
    )
}

export default Message
