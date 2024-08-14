import OpenInbox from '../inbox/openInbox';
import RecordScreen from '../recordScreen/recordScreen';
import ReviewVideosImages from '../reviewVideosImages/reviewVideosImages';
import VideoPactto from '../videoPactto/videoPatto';
import './welcoming.css'

type Props = {
    name: string;

}

export default function Welcoming( { name }: Props) {

    return (
        <div className="welcoming-container">
            <div className="welcoming-section">
                <h1>Hey {name}, welcome to Pactto!</h1>
                <ul className="item-list">
                    <OpenInbox result="Done" action="Open your inbox and verify yout email"/>
                    <VideoPactto result="Done" action="Check the short video of pactto in action"/>
                    <RecordScreen result="To do" action="Wanna record your computer screen or review files? download Pactto for Mac or Windows"/>
                    <ReviewVideosImages result="To do" action="Wanna review videos, images or audio files with your phone or tablet? Download Pactto for iOs or Android"/> 
                </ul>
            </div>
        </div>
    );
}