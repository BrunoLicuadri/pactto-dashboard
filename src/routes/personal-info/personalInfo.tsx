import './personalInfo.css'
import PrimaryButton from '../../components/buttons/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton';
import UserForms from '../../components/userForms/userForms';




export default function PersonalInfo() {

    return (
        <>
            <div className='containerPI'>
                <div className='button-position'>
                    <div className='button-box'>
                        <SecondaryButton text="reset changes" />
                        <PrimaryButton text="save changes" />
                    </div>
                </div>
                <div className='containerToForms'>
                    <UserForms />
                </div>

            </div>
        </>

    );
}