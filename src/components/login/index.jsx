import "./style.css";
export const Login = ({ source, children }) => {
  return (
    <div className="divContaner">
      <div className="divInternabutton">
        <h3>
          <strong>Nu</strong> Kenzie
        </h3>
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rapida e segura</p>
        {children}
      </div>
      <div className="divInternaImg">
        <img src={source} alt="" />
      </div>
    </div>
  );
};
