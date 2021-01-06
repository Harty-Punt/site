import './Button.scss'

export const Button = (props) => {
  return (
    <a href="{props.href}" className="btn-primary">{props.text}</a>
  )
}