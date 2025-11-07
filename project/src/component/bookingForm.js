


import { useState } from "react"
import {validateEmail} from "../utils"; 


function BookingForm (props) {

  const[firstName, setFirstName] = useState({
    value: "",
    isTouched: false,
  })
  const[email, setEmail] = useState({
    value: "",
    isTouched: false,
  })
  const[date, setDate] = useState("")

  const[time, setTime] = useState("")
  const[guests, setGuests] = useState({
    value: "",
    isTouched: false,
  })
  const[occasion, setOccasion] = useState("")
  const [isTouched, setisTouched] = useState (false); 
  const[touched, setTouched] = useState (false)

  
  
  const getIsFormValid = () => { 
    return ( 
      firstName.value.trim() !== "" &&
      validateEmail(email.value) &&
      date.trim() !== "" &&
      time.trim() !== "" &&
      guests.value > 0
    ); 
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitForm(e)
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  const isDateValid = date.trim() !== "";


  return(
    <main>
      <section className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h1 className="header">Table Reservation</h1>
            <div className="Field">
              <label htmlFor="book-name">Name:<sup>*</sup></label>
              <input id="book-name" value={firstName.value} onChange={(e) => { setFirstName({ ...firstName, value: e.target.value }); }} 
              onBlur={() => { 
                setFirstName({ ...firstName, isTouched: true }); 
              }}   type="text" required />
              {firstName.isTouched && firstName.value.trim() === "" && (
                <p className="FieldError">Name should not be empty</p>
              )}
            </div>
            <div className="Field">
                <label htmlFor="book-email">Email:<sup>*</sup></label>
                <input id="book-email" value={email.value} onChange={(e) => { setEmail({ ...email, value: e.target.value }); }} 
                onBlur={() => { 
                  setEmail({ ...email, isTouched: true });}}  type="email" required/>
                  {email.isTouched && email.value.trim() === "" && (
                  <p className="FieldError">Email should not be empty</p>
                )}
            </div>
            <div className="Field">
                <label htmlFor="book-date">Choose Date:<sup>*</sup></label>
                <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} onBlur={() => { 
                  setisTouched(true);}}  type="date" required/>
                  {isTouched && !isDateValid && (
                  <p className="FieldError">Date should not be empty</p>
                )}
            </div>
            <div className="Field">
                <label htmlFor="book-time">Choose Time:<sup>*</sup></label>
                <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} onBlur={() => { 
                  setTouched(true);}} required >
                  <option value="" >select a Time</option>
                  {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                </select>
                {touched && time.trim() === "" && (
                  <p className="FieldError">Time should not be empty</p>
                )}
            </div>
            <div className="Field">
                <label htmlFor="book-guests">Number of Guests:</label>
                <input id="book-guests" min="1" value={guests.value} onChange={(e) => { setGuests({ ...guests, value: e.target.value }); }} 
                onBlur={() => { 
                  setGuests({ ...guests, isTouched: true });}} type="number"  required/> 
                  {guests.isTouched && guests.value.trim() === "" && (
                  <p className="FieldError">Guests should not be empty</p>
                )}
            </div>
            <div className="Field">
                <label htmlFor="book-occasion">Occasion:</label>
                <select id="book-occasion" value={occasion} onChange={e => setOccasion(e.target.value)} >
                  <option>Select Occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Family gathering</option>
                  <option>Business dinner</option>
                </select>
            </div>
            <div className="Field-btn">
                <button type="submit" disabled={!getIsFormValid()}>
                  Make Your Reservation
                </button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  )
}

export default BookingForm