import "./Header.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

export function Header() {
    const navigate = useNavigate();
    
    return (
        <div className="header">
            <div className="logo">
                <img className="img" src={Logo} alt="logo" />
            </div>
            <div className="btn-header">
                <button 
                    className="btn-retour" 
                    type="button" 
                    onClick={() => navigate("/guide")}
                >
                    Guide
                </button>
                <button 
                    className="btn-retour" 
                    type="button" 
                    onClick={() => navigate("/home")}
                >
                    My Stats
                </button>
            </div>
        </div>
    );
}