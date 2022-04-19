import "../utils/styles/Form.css"

export function Form() {
    return(
        <form>
            <label>Email
                <input type="text"/>
            </label>
            <label>Message
                <textarea></textarea>
            </label>
            
            <button>Envoyer</button>
        </form>
    )
}