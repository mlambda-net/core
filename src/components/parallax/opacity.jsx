import { Tween } from "react-gsap";
import PropTypes from "prop-types";


let Opacity = ({key, from, to, time}) => (
  <Tween  key={key}  from={{opacity: from}} to={{opacity: to}} duration={time} />
)


Opacity.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  time: PropTypes.number,
  key: PropTypes.string
}

export default Opacity;