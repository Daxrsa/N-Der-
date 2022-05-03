import '../styles/Components.scss';

export default function Button(props: buttonProps) {
    return <button type={props.type} className={props.className} style={props.style} onClick={props.onClick}>{props.children}</button>
}

interface buttonProps {
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    style?: object;
    className?: 'btn' | 'btn-form';
}

Button.defaultProps = {
    type: "button",
    className: 'btn'
}