import firebase from '../../FirebaseConfig'

export const LoginAdminFirebase = (data) => (dispatch) => {
    dispatch({ type: 'ON_CHANGE_LOADING', value: true })
    
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                // console.log("res login: ", res)
                var item = {
                    email: res.user.email,
                    uid: res.user.uid,
                    
                }


                localStorage.setItem('user', JSON.stringify(item))

                dispatch({ type: 'ON_CHANGE_LOADING', value: false })
                resolve(res);
            })
            .catch((err) => {
                // console.log("err login: ", err)
                dispatch({ type: 'ON_CHANGE_LOADING', value: false })
                reject(err)
            })
    })
};