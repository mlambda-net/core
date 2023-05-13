import { Timeline } from "react-gsap";
import PropTypes from "prop-types";


let Animation = ( {children, animations}) => (
  <Timeline target={children} >
    {animations.map(animation => animation)}
  </Timeline>
)

Animation.propTypes = {
  children: PropTypes.elementType,
  animations: PropTypes.arrayOf(PropTypes.elementType)
}

export default Animation;