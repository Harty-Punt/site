import './CTA.scss';
import { Button } from '../Button/Button'

export const CTA = (props) => {
  return (
    <div className="cta-component">
      <p> {props.text} </p>
      <Button text="Aplique" />
    </div>
  )
}