function Tip({ children, tip, onSelect }) {
    return (
        <div>
            <label>
                {children}
            </label>
            <select name="" id="" value={tip} onChange={(e)=> onSelect(+e.target.value)}>
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">Not so much (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutly amazing (20%)</option>
            </select>
        </div>
    )
}

export default Tip
