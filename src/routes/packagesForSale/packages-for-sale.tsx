import './packages-for-sale.css'
import PrimaryButton from '../../components/buttons/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton';




export default function PackagesForSale() {

    return (
            <div className='main-package-container'>
                <div className='button-position-package'>
                    <div className='addpkg-box'>
                    <PrimaryButton text="+ add package" />
                    </div>
                    <div className='button-box'>
                        <SecondaryButton text="save changes" />
                        <PrimaryButton text="payment details" />
                    </div>
                </div>
            </div>

    );
}