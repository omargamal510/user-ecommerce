import { Link } from "react-router-dom";

interface LoginRegisterSwitchProps {
  text: string;
  linkText: string;
  linkPath: string;
}

function LoginRegisterSwitch({
  text,
  linkText,
  linkPath,
}: LoginRegisterSwitchProps) {
  return (
    <div>
      <p>
        <span> {text} </span>
        <Link className=" underline text-primaryMain" to={`/${linkPath}`}>
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default LoginRegisterSwitch;
