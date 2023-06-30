import { useState } from 'react';
import './style.css';
export function Forms() {
  const handleSubmit = () => {};
  const [isConfirmedPasswordDisabled, setisConfirmedPasswordDisabled] =
    useState(true);

  const handlePasswordChange = (event) => {
    const password = event.target.value;

    if (password.lenght > 3) {
      setisConfirmedPasswordDisabled(false);
    }
    if (password.lenght <= 3) {
      setisConfirmedPasswordDisabled(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <label htmlFor="name">Wpisz swoje imię</label>
        <input maxLength="15" type="text" id="name" placeholder="Imię" />
      </div>

      <div className="flex">
        <label htmlFor="surname">Wpisz swoje nazwisko</label>
        <input minLength="3" type="text" id="surname" placeholder="Nazwisko" />
      </div>
      <div className="flex">
        <label htmlFor="address">Wpisz swój adres</label>
        <input required type="text" id="address" placeholder="Adres" />
      </div>
      <div className="flex">
        <label htmlFor="password">Wpisz swoje hasło</label>
        <input
          onChange={handlePasswordChange}
          type="password"
          id="password"
          placeholder="Hasło"
        />
      </div>
      <div className="flex">
        <label htmlFor="confirmPassword">Potwierdź swoje hasło</label>
        <input
          disabled={isConfirmedPasswordDisabled}
          type="password"
          id="confirmPassword"
          placeholder="Hasło"
        />
      </div>
      <div className="flex">
        <label htmlFor="select">
          Wybierz swoją płeć z puli podanych, jeżeli czujesz się urażony to
          trudno
        </label>

        <select name="select" id="select" placeholder="Wybierz swoją płeć">
          <option value="Woman">Kobieta</option>
          <option value="Man">Mężczyzną</option>
          <option value="Other">Nieokreślony</option>
        </select>
      </div>
      <div className="flex">
        <label htmlFor="textarea">Opisz swój problem</label>
        <textarea
          name="textarea"
          cols="30"
          rows="10"
          placeholder="Jaki problem wariacie"
        />
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
}
