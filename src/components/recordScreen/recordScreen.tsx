import '../welcoming-section/welcoming.css'

type Props = {
    result: string;
    action: string;
}

export default function RecordScreen( {result, action} : Props) {
    return (
        <li className="dflex mb10">
            <span className="done-sign">{result}</span>
            <p className="todo-done-text">{action}</p>
        </li>
    );
}