const ReactDOM = require("react-dom/client");
const React = require("react");
const Header = require("./Components/header.jsx");
const Article = require("./Components/article.jsx");

const header = "Story";
const article = "One Eugene once spent a day on properly installing npm. The end.";

ReactDOM.createRoot(
    document.getElementById("root")
)
    .render(
        <div>
            <Header text={header}/>
            <Article content={article}/>
        </div>
    );
