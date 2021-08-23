import { firebase } from '../firebase/index';
import '../styles/SigninPopup.css';

const SigninPopup = (props) => {
    const showPopup = props.showPopup;

    const dismiss = () => {
        if(firebase.auth().currentUser !== null) {
            showPopup(false);
        }
    }

    const signIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
        dismiss();
    }

    const signInAnon = () => {
        firebase.auth().signInAnonymously();
        dismiss();
    }

    return(
        <div style={{ position: 'absolute', left: '50%', top: '30%' }}>
            <div id="signin-popup">
                <p>Would you like to sign in?</p>
                <div id="button-container">
                    <button onClick={signIn}>Yes! With Google.</button>
                    <button onClick={signInAnon}>Nope</button>
                </div>
            </div>
        </div>
    )
}

export default SigninPopup;