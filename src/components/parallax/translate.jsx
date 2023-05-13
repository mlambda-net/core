import { Tween } from "react-gsap";
import PropTypes from "prop-types";


let Translate = ({key, star, end , time, ease}) => (
  <Tween  key={key}  from={{x: star + 'px'}} to={{x: end + 'px'}} duration={time? time: 1} ease={ease} />
)


Translate.propTypes = {
  star: PropTypes.number,
  end: PropTypes.number,
  time: PropTypes.number,
  ease: PropTypes.string,
}

export default Translate;