import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../Styles/auth.scss";
import { PostDataAdminFirebase } from "../../Config/redux/action/firebaseAction";
import { connect } from "react-redux";
import { toast } from "react-toastify";

const AdminAddContent = (props) => {
    const history = useHistory();

    const [dtAddContenet, setDtAddContenet] = useState({
        id: "",
        bucket: "",
        projectName: "",
        platform: "",
        description: "",
        tag: "",
        year: "",
        displayImg: "",
        linkProject: "",
    });

    useEffect(() => {
        var lclstrg = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null;
        if (lclstrg === null) {
            history.replace("login");
        }

        return () => {};
    }, [history]);

    const onLogout = () => {
        localStorage.clear();
        props.history.replace("/login");
    };

    const onChangeData = (e) => {
        setDtAddContenet({ ...dtAddContenet, [e.target.name]: e.target.value });
    };

    const onSave = async () => {
        // console.log("dt save", dtAddContenet);
        // props.onPostData(dtAddContenet);

        const res = await props.onPostData(dtAddContenet).catch((err) => {
            toast.error("Error Menambahkan Data");
            // console.log("err", err)
        });
        if (res) {
            // console.log("res2", res);
            toast.success("Sukses Menambahkan Data");
            setDtAddContenet({
                id: "",
                bucket: "",
                projectName: "",
                platform: "",
                description: "",
                tag: "",
                year: "",
                displayImg: "",
                linkProject: "",
            });
        }
    };

    return (
        <div className="c-admin-kontent">
            <div className="admin-card">
                <div className="header">Input New Project</div>
                <div className="section-form-group">
                    <div className="form-group">
                        <div className="title-input">Project ID</div>
                        <input
                            className="content-input"
                            name="id"
                            onChange={(e) => onChangeData(e)}
                            value={dtAddContenet.id}
                        />
                    </div>
                    <div className="form-group">
                        <div className="title-input">Bucket</div>
                        <input
                            className="content-input"
                            name="bucket"
                            onChange={(e) => onChangeData(e)}
                            value={dtAddContenet.bucket}
                        />
                    </div>
                </div>
                <div className="section-form-group">
                    <div className="form-group">
                        <div className="title-input">Project Name</div>
                        <input
                            className="content-input"
                            name="projectName"
                            onChange={(e) => onChangeData(e)}
                            value={dtAddContenet.projectName}
                        />
                    </div>
                    <div className="form-group">
                        <div className="title-input">Platform</div>
                        <input
                            className="content-input"
                            name="platform"
                            onChange={(e) => onChangeData(e)}
                            value={dtAddContenet.platform}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="title-input">Description</div>
                    <textarea
                        className="content-input-textarea"
                        name="description"
                        onChange={(e) => onChangeData(e)}
                        value={dtAddContenet.description}
                    />
                </div>
                <div className="section-form-group">
                    <div className="form-group">
                        <div className="title-input">Tags</div>
                        <input
                            className="content-input"
                            name="tag"
                            onChange={(e) => onChangeData(e)}
                            value={dtAddContenet.tag}
                        />
                    </div>
                    <div className="form-group">
                        <div className="title-input">Year</div>
                        <input
                            className="content-input"
                            name="year"
                            onChange={(e) => onChangeData(e)}
                            value={dtAddContenet.year}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="title-input">Link Project</div>
                    <input
                        className="content-input"
                        name="linkProject"
                        onChange={(e) => onChangeData(e)}
                        value={dtAddContenet.linkProject}
                    />
                </div>
                <div className="form-group">
                    <div className="title-input">Link Display Image</div>
                    <input
                        className="content-input"
                        name="displayImg"
                        onChange={(e) => onChangeData(e)}
                        value={dtAddContenet.displayImg}
                    />
                </div>

                <div className="c-btn-action">
                    <button
                        className="btn-1"
                        onClick={onSave}
                        disabled={props.isLoading === true ? true : false}
                    >
                        Simpan
                    </button>
                    <button className="btn-2" onClick={() => onLogout()}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

const reduxState = ({ firebase }) => ({
    isLoading: firebase.isLoading,
});

const reduxDispatch = (dispatch) => ({
    onPostData: (data) => dispatch(PostDataAdminFirebase(data)),
});

export default connect(reduxState, reduxDispatch)(AdminAddContent);
