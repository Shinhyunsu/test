import React from "react";
import { authService, authGoogleProvider, authsignInWithPopup } from "fbase";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore"



const Auth = () => {
    const onSocialClick = async (event) => {
        const ipData = await fetch('https://geolocation-db.com/json/');
        const locationIp = await ipData.json();
        const ipv4 = locationIp.IPv4;


        const {
            target: { name },
        } = event;
        let provider;
        if (name === 'google') {
            provider = new authGoogleProvider();
        }
        const data = await authsignInWithPopup(authService, provider);
        let email = "";
        if (data) {
            email = data.user.email;
        }



        /*
                const docRef = await addDoc(collection(db, "users"), {
                    useremail: email,
                    ipaddress: ipv4
                });
                console.log(docRef.id);*/
    }


    return (
        <div>
            <button onClick={onSocialClick} name='google'>
                Continue wih Google
           </button>
        </div>
    )
}
export default Auth;