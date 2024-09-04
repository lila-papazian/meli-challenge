import "./button.scss"

export interface ButtonProps {
    onClick: () => void;
    label: string
}

export const Button = ({label, onClick}: ButtonProps) => {
    return <button className="button" onClick={onClick} aria-label="Comprar">{label}</button>
}