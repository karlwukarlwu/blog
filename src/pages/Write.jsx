import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
    const [value, setValue] = useState('');
    // 这个是搭配react-quill用的
    console.log(value);
    return (
        <div className="add">
            {/* 因为这里写write会和navbar那里的write重复，因此改成add */}
            <div className="content">
                <input type="text" placeholder="Title" />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                    {/* 这个也是搭配react-quill 使用 */}
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input type="file" style={{ display: "none" }} name="" id="file" />
                    <label className="file" htmlFor="file">Upload Image</label>
                    {/* htmlFor 把label绑定到有相同的id 的地方 这里绑定到了file 然后用style display=none 
                    把标签隐藏了，这样点击Upload 就行 */}
                    <div className="buttons">
                        <button> Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name="cat" value="art" id="art" />
                        {/* value 和 placeholder 差不多 都是显示值，但是当type =“submit” 要用value 
                    type =radio 是单选框*/}
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="science" id="science" />
                        <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="technology" id="technology" />
                        <label htmlFor="technology">Technology</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="Cinema" id="Cinema" />
                        <label htmlFor="Cinema">Cinema</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="design" id="design" />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="food" id="food" />
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write