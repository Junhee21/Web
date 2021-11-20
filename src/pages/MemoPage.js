import React, { useEffect, useState, useRef } from "react";
import Template from "../components/Template";

export default function Memo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [memoList, setMemoList] = useState([
    {
      title: "title",
      content: "content 1"
    },
    {
      title: "title2",
      content: "content2"
    }
  ]);
  const [currentTab, setCurrentTab] = useState("write");

  useEffect(() => {
    alert(currentTab);
  }, [currentTab]);

  const onTitleChange = (evt) => {
    setTitle(evt.target.value);
  };
  const onContentChange = (evt) => {
    setContent(evt.target.value);
  };

  const submit = () => {
    if (title === "") {
      alert("please insert title");
      return;
    }

    const newObj = { title: title, content: content };

    const cp = [...memoList];
    cp.push(newObj);
    setMemoList(cp);
    setTitle("");
    setContent("");
    setCurrentTab("list");
    // .. rest of the logic will be declared.
  };

  const updateTab = (targetTab) => {
    setCurrentTab(targetTab);
  };

  return (
    <div>
      <Template now="memo">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "1px solid black"
          }}
        >
          <div
            style={{ flex: 1, fontWeight: currentTab === "write" ? 900 : 400 }}
            onClick={(e) => updateTab("write")}
          >
            write
          </div>
          <div
            style={{ flex: 1, fontWeight: currentTab === "list" ? 900 : 400 }}
            onClick={(e) => updateTab("list")}
          >
            list
          </div>
        </div>

        {currentTab === "write" ? (
          <>
            <br />
            <span style={{ fontWeight: 600 }}>title </span>
            <br />
            <input
              placeholder="type title"
              value={title}
              onChange={(e) => onTitleChange(e)}
            />
            <br />
            <span style={{ fontWeight: 600 }}>content </span>
            <br />
            <textarea
              rows={5}
              value={content}
              placeholder="type your content. Your are good"
              onChange={(e) => onContentChange(e)}
            />
            <br />
            <button onClick={(e) => submit()}>Submit</button>
            <br />
            <br />
          </>
        ) : (
          <>
            <select onChange={(e) => alert(e.target.value)}>
              {memoList.map((obj) => {
                return <option value="">{obj.title}</option>;
              })}
            </select>

            <br />
            <br />

            {memoList.map((obj) => {
              return (
                <div>
                  <span style={{ fontWeight: 600 }}>{obj.title}</span>
                  <p> - {obj.content}</p>
                </div>
              );
            })}
          </>
        )}
      </Template>
    </div>
  );
}
