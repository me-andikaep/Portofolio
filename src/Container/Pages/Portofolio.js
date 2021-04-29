/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetDataProject } from '../../Config/redux/action/firebaseAction'

const Portofolio = (props) => {
    useEffect(() => {
        props.GetDataProject()
    }, [])

    console.log('props projectList', props.projectList)

    return (
        <div>
            zzzz
        </div>
    )
}

const reduxState = ({ firebase }) => ({
    isLoading: firebase.isLoading,
    projectList: firebase.projectList
});

const reduxDispatch = (dispatch) => ({
    GetDataProject: () => dispatch(GetDataProject()),
});


export default connect(reduxState, reduxDispatch) (Portofolio)
