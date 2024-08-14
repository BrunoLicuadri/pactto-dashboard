import './notFound.css'

type Props ={
    text:string;
}

export default function NotFound( {text}: Props){

    return (
        <h1 className='not-found-container'>{text}</h1>
    );
}