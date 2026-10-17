import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { differenceInDays, format, startOfDay } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './BookingCalendar.css';

const services = [
  'Private island experience',
  'Local guide',
  'Custom trip planning',
];

export default function BookingCalendar() {
  const [range, setRange] = useState();
  const [service, setService] = useState(services[0]);
  const [guests, setGuests] = useState('2');
  const [note, setNote] = useState('');
  const [requestMessage, setRequestMessage] = useState('');
  const today = startOfDay(new Date());
  const nights =
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;
  const canSubmit = Boolean(range?.from && range?.to && nights > 0);

  function handleSubmit(event) {
    event.preventDefault();
    if (!canSubmit) return;

    setRequestMessage(
      `Your ${service.toLowerCase()} request for ${format(range.from, 'MMM d')}–${format(range.to, 'MMM d, yyyy')} for ${guests} ${guests === '1' ? 'guest' : 'guests'} is ready.${note.trim() ? ` Note: ${note.trim()}` : ''} We’ll follow up to confirm availability.`,
    );
  }

  function clearRequestMessage() {
    setRequestMessage('');
  }

  return (
    <section className="booking section-shell" id="booking" aria-labelledby="booking-title">
      <div className="booking__intro">
        <p className="eyebrow">Make it yours</p>
        <h2 id="booking-title">A little planning.<br />A lot to look forward to.</h2>
        <p>
          Choose your dates and the kind of help you need. We’ll take it from there
          and help shape a stay that feels like you.
        </p>
        <div className="booking__note">
          <span aria-hidden="true">✳</span>
          <p>Tell us what you’re dreaming of in the note. The more we know, the more personal we can make it.</p>
        </div>
      </div>

      <form className="booking-card" onSubmit={handleSubmit}>
        <div className="booking-card__top">
          <div>
            <p className="eyebrow">Your getaway</p>
            <h3>Start with the dates</h3>
          </div>
          <span className="booking-card__step">Bali · Indonesia</span>
        </div>

        <div className="booking-card__fields">
          <label className="booking-field">
            <span>What are you looking for?</span>
            <select
              value={service}
              onChange={(event) => {
                setService(event.target.value);
                clearRequestMessage();
              }}
            >
              {services.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label className="booking-field">
            <span>Travellers</span>
            <select
              value={guests}
              onChange={(event) => {
                setGuests(event.target.value);
                clearRequestMessage();
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((count) => (
                <option value={count} key={count}>
                  {count} {count === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="booking-card__calendar">
          <div className="booking-card__calendar-label">
            <span>Check-in & check-out</span>
            <span className="booking-card__hint">Select two dates</span>
          </div>
          <DayPicker
            mode="range"
            selected={range}
            onSelect={(selectedRange) => {
              setRange(selectedRange);
              setRequestMessage('');
            }}
            disabled={{ before: today }}
            footer={
              range?.from && !range.to
                ? <span>Check-in: {format(range.from, 'PPP')} — now choose your check-out.</span>
                : null
            }
          />
        </div>

        {range?.from && range.to && (
          <p className="booking-card__stay">
            {format(range.from, 'MMM d')} – {format(range.to, 'MMM d, yyyy')}
            <span>{nights} {nights === 1 ? 'night' : 'nights'}</span>
          </p>
        )}

        <label className="booking-field booking-field--note">
          <span>A note for us <span className="booking-card__hint">Optional</span></span>
          <textarea
            rows="3"
            maxLength="500"
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
              clearRequestMessage();
            }}
            placeholder="A special occasion, a place you’ve always wanted to see..."
          />
        </label>

        <button className="button button--dark booking-card__submit" type="submit" disabled={!canSubmit}>
          Confirm booking request <span aria-hidden="true">↗</span>
        </button>
        {requestMessage && (
          <p className="booking-card__confirmation" role="status">{requestMessage}</p>
        )}
        {!canSubmit && (
          <p className="booking-card__disclaimer">Choose a check-in and a later check-out to continue.</p>
        )}
      </form>
    </section>
  );
}
