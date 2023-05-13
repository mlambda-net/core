import { Tween } from "react-gsap";
import PropTypes from 'prop-types';

let Color = ({key, from, to, time}) => (
  <Tween key={key} from={{backgroundColor: from}} to={{backgroundColor: to}} duration={time} />
)


Color.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  time: PropTypes.number
}

export default Color;