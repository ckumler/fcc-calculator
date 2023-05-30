function Display({ input, result, operator }) {
    return (
        <>
            <input
                type="text"
                id="display"
                value={input || result || "0"}
                readOnly
            />
            <p id="operator">{operator}</p>
        </>
    );
}

export default Display;
