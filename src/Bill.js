function Bill({ bill, setBill }) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input type="number" value={bill} onChange={e => setBill(+e.target.value)} />
        </div>
    )
}

export default Bill
