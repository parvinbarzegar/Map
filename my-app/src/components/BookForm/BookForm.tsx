import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import {
  startOfToday,
  startOfTomorrow,
  addDays,
  differenceInDays,
} from "date-fns";
import Button from "../Button/Button";
import Notification from "../Notification/Notification";
import "react-datepicker/dist/react-datepicker.css";
import "./BookForm.scss";
interface IBookFormProps {
  onFinish: Function;
}
const BookForm: React.FunctionComponent<IBookFormProps> = ({ onFinish }) => {
  const [startDate, setStartDate] = useState<Date>(startOfToday());
  const [endDate, setEndDate] = useState<Date>(startOfTomorrow());
  const [boatName, setBoatName] = useState<string>("");
  const [boatNameError, setBoatNameError] = useState<string>("");
  const [boatlengthError, setBoatLengthError] = useState<string>("");
  const [endDateError, setEndDateError] = useState<string>("");
  const [startDateError, setStartDateError] = useState<string>("");
  const [boatLength, setBoatLength] = useState<number>(0);

  useEffect(() => {
    if (differenceInDays(endDate, startDate) < 1) {
      setEndDate(addDays(startDate, 1));
    }
  }, [startDate]);

  const handleClik = () => {
    setBoatNameError("");
    setBoatLengthError("");
    setStartDateError("");
    setEndDateError("");
    if (boatName.length === 0) {
      setBoatNameError("Enter boat name");
    }
    if (boatLength === 0) {
      setBoatLengthError("Enter boat length")
    }
    if (startDate === null) {
      setStartDateError("Select a start date")
    }
    if (endDate === null) {
      setEndDateError("Select an end date")
    } 
    else {
      setBoatNameError("");
      setBoatLengthError("");
      setStartDateError("");
      setEndDateError("");
      onFinish();
    }
  };
  return (
    <div>
      <form className="book-form">
        <legend className="book-form book-form__title">Book your harbor</legend>
        <label className="book-form book-form__input-label">
          Boat name*
          <input
            className="book-form book-form__input-control"
            defaultValue={boatName}
            onChange={(e) => setBoatName(e.target.value)}
            type="text"
            minLength={1}
            maxLength={20}
          />
          {boatNameError && (
            <span role="alert" className="book-form book-form__message--error">
              {boatNameError}
            </span>
          )}
        </label>
        <label className="book-form book-form__input-label">
          Boat length*
          <input
            className="book-form book-form__input-control"
            defaultValue={boatLength}
            onChange={(e) => setBoatLength(Number(e.target.value))}
            type="number"
            min={0}
            max={100}
          />
          {boatlengthError && (
            <span role="alert" className="book-form book-form__message--error">
              {boatlengthError}
            </span>
          )}
        </label>
        <label className="book-form book-form__input-label">
          Start Date*
          <DatePicker
            selected={startDate}
            minDate={startOfToday()}
            onChange={(date: Date) => setStartDate(date)}
            className="book-form book-form__input-control"
          />
          {startDateError && (
            <span role="alert" className="book-form book-form__message--error">
              {startDateError}
            </span>
          )}
        </label>
        <label className="book-form book-form__input-label">
          End Date*
          <DatePicker
            selected={endDate}
            minDate={addDays(startDate, 1)}
            onChange={(date: Date) => setEndDate(date)}
            className="book-form book-form__input-control"
          />
          {endDateError && (
            <span role="alert" className="book-form book-form__message--error">
              {endDateError}
            </span>
          )}
        </label>
        <Button type="primary" onClick={handleClik}>
          Submit
        </Button>
      </form>
    </div>
  );
};
export default BookForm;
