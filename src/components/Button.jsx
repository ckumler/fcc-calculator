function Button({ id, showText, onClick }) {
    return (
        <>
            <button id={id} className="calc-button" onClick={onClick}>
                {showText}
            </button>
        </>
    );
}

export default Button;
