import React from "react";
import ReactDOM from "react-dom";
import ReactAvatarEditor from "react-avatar-editor";

class App extends React.Component {
  state = {
    image: "https://htran844.github.io/hihi/img/ig/i11.jpg",
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 0,
    preview: null,
    width: 300,
    height: 300,
    border: 50,
  };

  rotateLeft: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    this.setState({ rotate: (this.state.rotate - 90) % 360 });
  };

  rotateRight: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    this.setState({ rotate: (this.state.rotate + 90) % 360 });
  };

  handleNewImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  rotateScale = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ rotate: parseFloat(e.target.value) });
  };

  handlePositionChange = (position) => {
    this.setState({ position });
  };

  render() {
    return (
      <div className="p-6 flex flex-col bg-white rounded-lg border border-gray-200 shadow-md">
        <div>
          <ReactAvatarEditor
            scale={parseFloat(this.state.scale)}
            width={this.state.width}
            height={this.state.height}
            position={this.state.position}
            onPositionChange={this.handlePositionChange}
            rotate={parseFloat(this.state.rotate)}
            borderRadius={this.state.width / (100 / this.state.borderRadius)}
            image={this.state.image}
            className="editor-canvas"
          />
        </div>
        <br />
        <div className="flex items-center">
          New File:
          <input
            className="ml-2 mb-2 items-center"
            name="newImage"
            type="file"
            onChange={this.handleNewImage}
          />
        </div>
        Zoom:
        <input
          className="ml-1 items-center"
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? "0.1" : "1"}
          max="2"
          step="0.01"
          defaultValue="1"
        />
        Rotation:
        <input
          name="rotation"
          type="range"
          onChange={this.rotateScale}
          min="0"
          max="180"
          step="1"
          defaultValue="0"
        />
        <div className="flex space-x-5 items-center mt-1">
          Rotate:
          <button
            onClick={this.rotateLeft}
            className="text-white ml-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5"
          >
            Left
          </button>
          <button
            onClick={this.rotateRight}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5"
          >
            Right
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
