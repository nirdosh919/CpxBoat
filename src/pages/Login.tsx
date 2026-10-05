import { useEffect } from "react";
import { CPXBOAT_LOGIN_URL } from "../platformLinks";

export default function Login() {
  useEffect(() => {
    window.location.replace(CPXBOAT_LOGIN_URL);
  }, []);

  return null;
}
