import * as React from "react";
import * as ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";

import "./main.css";

class App extends React.Component {
  state = { editorState: EditorState.createEmpty() };

  onChange = (editorState: EditorState) => this.setState({ editorState });

  render() {
    return (
      <div className="container pt-10">
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
