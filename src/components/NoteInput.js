import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

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
    this.props.addNote(this.state);
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <form className="note-input" onSubmit={this.onSubmitHandler}>
              {locale === "id" ? (
                <input
                  className="note-input__title"
                  type="text"
                  placeholder="Judul catatan..."
                  value={this.state.title}
                  onInput={this.onTitleInputHandler}
                />
              ) : (
                <input
                  className="note-input__title"
                  type="text"
                  placeholder="Note title..."
                  value={this.state.title}
                  onInput={this.onTitleInputHandler}
                />
              )}
              {locale === "id" ? (
                <div
                  className="note-input__body"
                  contentEditable="true"
                  data-placeholder="Tulis catatan..."
                  onInput={this.onBodyInputHandler}
                ></div>
              ) : (
                <div
                  className="note-input__body"
                  contentEditable="true"
                  data-placeholder="Write notes..."
                  onInput={this.onBodyInputHandler}
                ></div>
              )}
              <button className="note-input__button" type="submit">
                {locale === "id" ? "Simpan" : "Save"}
              </button>
            </form>
          );
        }}
      </LocaleConsumer>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
