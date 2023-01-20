import userIcon from '../assets/img/user-icon.svg'

export const AppHeader = () => {

    return (
        <section className="app-header flex flex-center">
            <div className="right-side-container flex">
                <img src="https://res.cloudinary.com/dqhrqqqul/image/upload/v1674053715/job-application-tracker/seemplicity-logo.d110a0_k8d5ts.webp" alt="" />
                <nav className="links-container flex">
                    <a className="flex flex-center" href="#">Dashboard</a>
                    <a className="flex flex-center selected" href="#">Findings</a>
                    <a className="flex flex-center" href="#">Remediation</a>
                    <a className="flex flex-center" href="#">Rules</a>
                </nav>
            </div>
            <div className="left-side-container">
                <div className="login-user flex">
                    <div className="user-icon-container flex flex-center">
                        <img src={userIcon} alt="user icon" />
                    </div>
                    <span>Jhon@seemplicity.io</span>
                </div>
            </div>
        </section>
    )
}