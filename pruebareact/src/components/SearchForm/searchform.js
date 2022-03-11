import  React, {useState } from "react";

function SearchFrom ({onSubmit}) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        onSubmit({keyword})
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    return (
            <form onSubmit={handleSubmit}>
                <input placeholder="Search..." onChange={handleChange} type="text" value={keyword} />
                <button>Buscar</button>
            </form>
            )
}

export default React.memo(SearchFrom)