import { useState } from "react"

const Button = () => {
    const [count, setCount ] = useState(0);
    const [File, setFile] = useState('');

    return(
        <div>
            <h1>Upload Image</h1>
            <form>
                <input type="file" onChange={(e) => setFile(e.target.file)} />
                <button type='submit' onClick={handleSubmit}>upload</button>
            </form>
        </div>
    )
}