import SearchInput from '../searchImput/searchInput';
import './userForms.css'

export default function UserForms() {

    return (
        <>
            <div className='teste-container'>
                <div className='usernameForm'>
                    <div className='inputContainer'>
                        <input type="text" className='inputBox' placeholder="First name" required />
                    </div>
                    <div className='inputContainer'>
                        <input type="text" className='inputBox' placeholder="Last name" required />
                    </div>
                    <div className='inputContainer'>
                        <input type="text" className='inputBox' placeholder="Email" required />
                    </div>
                    <div className='inputContainer'>
                        <select className='inputBox' id="country" name="country" required>
                            <option value="country">Country</option>
                            <option value="australia">Australia</option>
                            <option value="austria">Austria</option>
                            <option value="belgium">Belgium</option>
                            <option value="Brazil">Brazil</option>
                            <option value="bulgaria">Bulgaria</option>
                            <option value="canada">Canada</option>
                        </select>
                    </div>
                </div >

                <p className='mainActivities'>What is your main activity? Or activities</p>

                <section className='checkbox-section-container'>
                    <div className="checkbox-area">
                        <div className='checkbox-container'>
                            <input type="checkbox" className="checkbox-box" id="checkbox-video" />
                        </div>
                        <label htmlFor="checkbox-video">Video</label>
                    </div>

                    <div className="checkbox-area">
                        <div className='checkbox-container'>
                            <input type="checkbox" className="checkbox-box" id="checkbox-design" />
                        </div>
                        <label htmlFor="checkbox-design">Design</label>
                    </div>

                    <div className="checkbox-area">
                        <div className='checkbox-container'>
                            <input type="checkbox" className="checkbox-box" id="checkbox-dev" />
                        </div>
                        <label htmlFor="checkbox-dev">Development</label>
                    </div>

                    <div className="checkbox-area">
                        <div className='checkbox-container'>
                            <input type="checkbox" className="checkbox-box" id="checkbox-sports" />
                        </div>
                        <label htmlFor="checkbox-sports">Sports</label>
                    </div>

                    <div className="checkbox-area">
                        <div className='checkbox-container'>
                            <input type="checkbox" className="checkbox-box" id="checkbox-medical" />
                        </div>
                        <label htmlFor="checkbox-medical">Medical</label>
                    </div>

                    <div className="checkbox-area">
                        <div className='checkbox-container'>
                            <input type="checkbox" className="checkbox-box" id="checkbox-inspec" />
                        </div>
                        <label htmlFor="checkbox-inspec">Inspections</label>
                    </div>

                    <div className='otherMainActivity-container'>
                        <SearchInput text='Other' />
                    </div>

                </section>

                <p className='mainActivities'>User handle and password</p>

                <div className='userPasswordForm'>
                    <div className='inputContainer'>
                        <input type="text" className='inputBox' placeholder="User name, your Pactto handle (e.g. johnsmith)" required />
                    </div>
                    <div className='inputContainer'>
                        <input type="text" className='inputBox' placeholder="Password" required />
                    </div>
                    <div className='inputContainer'>
                        <input type="text" className='inputBox' placeholder="Confirm password" required />
                    </div>
                </div >

                <p className='delete-user'>To delete your Pactto account and remove your data permanently from all Pactto apps and services, please <a href="#">clicl here</a></p>

            </div>
        </>

    );
}