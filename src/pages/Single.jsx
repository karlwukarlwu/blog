import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="" alt="no" />
                <div className="user">
                    <img src="" alt="no" />
                    <div className="info">
                        <span>John</span>
                        <p>Post 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            {/* 好像后面写上问号会调用不占用缓存的原界面 */}
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>
                    first graph
                </h1>
                <p>
                    second graph
                    second graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graph
                    second graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graph
                    second graphsecond graphsecond graphsecond graphsecond graphsecond graphsecond graph

                </p>
            </div>
            <Menu/>
            {/* 这个标签会把Menu页面的东西带过来  删掉之前写的className =menu 的那个*/}
        </div>
    )
}

export default Single