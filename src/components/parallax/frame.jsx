import PropTypes from "prop-types";


let Frame = ({index, name, image, width, height, size, position, actual, preview, visible, pixelPerfect} ) =>
    <div key={index}
         name={`${name}-${index}`}
         hidden={ preview || pixelPerfect ? false: index !== actual }
         style={{
           display: (visible??true) ? '' : 'none',
            width: `${width}px`,
            height:`${height}px`,
            position: preview || !pixelPerfect ? "relative" : "absolute",
            backgroundImage: `url(${image})`,
            backgroundSize: `${size.x}px ${size.y}px`,
            backgroundPosition: `${position.x}px ${position.y}px`,
            opacity: pixelPerfect ? '0.1' : '1',
            borderStyle: pixelPerfect ? 'dashed' :'none',
         }}
    />

Frame.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.object,
  position: PropTypes.object,
  preview: PropTypes.bool
}

export default Frame;