import PropTypes from "prop-types";
import { Children, cloneElement, useEffect, useState } from "react";

let Sprite = ({children,  time, preview, enabled, ...props}) => {

  const [actual, setActual] = useState(0);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (enabled) {
        idx = (idx + 1) % children.length;
        setActual(idx);
      }
    }, time);
    return () => clearInterval(interval);
  }, [enabled]);
    return (
      <div style={{ position: preview ? "relative" : "absolute" }}>
        {Children.map(children, (child, index) => {
          return cloneElement(child, { index: index, actual: actual, preview: preview, ...props });
        })}
      </div>
    );
}


Sprite.propTypes = {
  image: PropTypes.any,
  time: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.object,
  position: PropTypes.object,
  children: PropTypes.array,
  preview: PropTypes.bool,
  enabled: PropTypes.bool,
}

export default Sprite;