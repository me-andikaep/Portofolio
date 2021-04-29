/* eslint-disable array-callback-return */
import firebase, { database } from '../../FirebaseConfig'

export const LoginAdminFirebase = (data) => (dispatch) => {
    dispatch({ type: "ON_CHANGE_LOADING", value: true });

    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                var item = {
                    email: res.user.email,
                    uid: res.user.uid,
                };
                localStorage.setItem("user", JSON.stringify(item));
                dispatch({ type: "ON_CHANGE_LOADING", value: false });
                resolve(res);
            })
            .catch((err) => {
                dispatch({ type: "ON_CHANGE_LOADING", value: false });
                reject(err);
            });
    });
};

export const PostDataAdminFirebase = (data) => (dispatch) => {
    dispatch({ type: "ON_CHANGE_LOADING", value: true });

    console.log('data', data)

    return new Promise((resolve, reject) => {
        firebase.database().ref("website/").push(data).then((res) => {               
            console.log('ressss', res)
            dispatch({ type: "ON_CHANGE_LOADING", value: false });
            resolve(res);
        }).catch((err) => {
            dispatch({ type: "ON_CHANGE_LOADING", value: false });
            reject(err);
        })
    });
}

export const GetDataProject = () => (dispatch) => {
    const urlProject = database.ref('website/')
    dispatch({ type: "ON_CHANGE_LOADING", value: true });

    return new Promise((resolve, reject) => {
        urlProject.on('value', (snapshot) => {
            console.log('get data', snapshot.val())
            const data = []
                Object.keys(snapshot.val()).map((key) => {
                data.push({
                    keyId: key,
                    data: snapshot.val()[key]
                })
            })
            dispatch({ type: "ON_SET_PROJECT_LIST", value: data })
            dispatch({ type: "ON_CHANGE_LOADING", value: false });
            resolve(data)
        })

    });
}