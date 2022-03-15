import '/modal.css'

export default function Modal ({children, onClose}) {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="btn" onCLick="{onClose}">X</button>
                {children}
            </div>
        </div>
    )

}