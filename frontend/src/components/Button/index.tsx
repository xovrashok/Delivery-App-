import { ButtonComponent } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
}

export default Button;
