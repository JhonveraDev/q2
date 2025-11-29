interface ButtonProps {
  text: string;
  className?: string;
}

export const Button = ({ text, className = '' }: ButtonProps) => {
  return (
    <button className={`btn-primary ${className}`}>{text}</button>
  )
}
