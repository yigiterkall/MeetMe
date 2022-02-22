import React from "react";
import Card from "../ui/Card";
import classes from "./NewMeetUpForm.module.css";
import { useRef } from "react";
function NewMeetUpForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <div>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title"> MeetUp Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image"> MeetUp Image</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address"> MeetUp Address</label>
            <input type="text" required id="address" ref={addressInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor="description"> MeetUp Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            />
          </div>
          <div className={classes.action}>
            <button>Submit</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewMeetUpForm;
