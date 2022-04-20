import "../utils/styles/Form.css"

export function Form() {
    return(
        <form 
        action="https://formspree.io/f/mnqwgzqv"
        method="POST"
        >
            <label>Email
                <input type="email" name="email" />
            </label>
            <label>Message
                <textarea name="message"></textarea>
            </label>
            
            <button type="submit">Envoyer</button>
        </form>
    )
}