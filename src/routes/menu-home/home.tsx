import '../../App.css'
import Upload from "../../components/upload-section/upload";
import Welcoming from "../../components/welcoming-section/welcoming";


export default function Home() {

    return (
        <main className="main-container">
            <Welcoming name='Bruno Luiz' />
            <Upload subtitle='My uploads' />
        </main>
    );
}