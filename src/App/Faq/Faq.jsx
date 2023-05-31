import './styles.css';
import svg from '../Components/Icons/arrow-down-icon.svg';

export const Faq = () => {
  return (
    <div>
      <p className="glowa">{'<'} FAQ</p>
      <p className="podglowa">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </p>
      <div className="question">
        <div className="tytul">
          <img src={svg} alt="ikonka strzalki" /> Jak mogę zapisać się na
          szkolenie?
        </div>
        <div className="content">
          <hr className="hr-line"></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
            suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
            aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
            tincidunt nisl pellentesque ut adipiscing non. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      <div className="question">
        <div className="tytul">
          <img src={svg} alt="ikonka strzalki" /> Jakich umiejętności oczekuje
          ode mnie pracodawca?
        </div>
        <div className="content">
          <hr className="hr-line"></hr>
          <p>Zależy od rodzaju pełnionej fukcji</p>
        </div>
      </div>
      <div className="question">
        <div className="tytul">
          <img src={svg} alt="ikonka strzalki" /> Jak to się stało, że ktoś mi
          wypił moje kakao?
        </div>
        <div className="content">
          <hr className="hr-line"></hr>
          <p>Przecież to mój kubeczek z wiewiórką był.</p>
        </div>
      </div>
    </div>
  );
};
