import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleInputHandler = this.onTitleInputHandler.bind(this);
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleInputHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.createNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <input
          className="note-input__title"
          type="text"
          placeholder="Judul"
          value={this.state.title}
          onInput={this.onTitleInputHandler}
        />
        <div
          className="note-input__body"
          data-placeholder="Buat catatan..."
          contentEditable="true"
          onInput={this.onBodyInputHandler}
        />
        <button className="note-input__button" type="submit">
          dicatat
        </button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  createNote: PropTypes.func.isRequired,
};

export default NoteInput;
