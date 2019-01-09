import * as React from "react";
import * as ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";
import Autocomplete from "draft-js-autocomplete";

import "./main.css";

import hashtag from "./autocomplete/hashtag";
import person from "./autocomplete/person";
import relation from "./autocomplete/relation";

const autocompletes = [hashtag, person, relation];

class App extends React.Component {
  state = { editorState: EditorState.createEmpty() };

  onChange = (editorState: EditorState) => this.setState({ editorState });

  render() {
    return (
      <div className="container pt-10">
        <Autocomplete
          editorState={this.state.editorState}
          onChange={this.onChange}
          autocompletes={autocompletes}
        >
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </Autocomplete>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
