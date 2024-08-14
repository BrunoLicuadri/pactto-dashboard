import './workInProgress.css'

type Props ={
    text:string;
}

export default function WorkInProgress( {text}: Props){

    return (
        <h1 className='not-found-container'>{text}</h1>
    );
}