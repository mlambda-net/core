

import React from 'react';
import { Animation, Color, Opacity,Translate, ease } from "@mlambda-net/web-core/parallax";




export default {
  title: 'MLambda/parallax/animation',
  component: Animation,
  tags: ['autodocs'],
};


export const Primary = {
  args: {
    opacity: {
      from: 0,
      to: 1,
      time: 2,
    },
    color: {
      from: "red",
      to: "orange",
      time: 2
    }
  },
  render: (args) =>
    <div style={{height:"200px", width:"100%"}}>
      <Animation animations={[
        <Opacity key="opacity" from={args.opacity.from} to={args.opacity.to} time={args.opacity.time} />,
        <Color key="color" from={args.color.from} to={args.color.to} time={args.color.time} />,
        <Translate key="translate" start={0} end={200} time={2} ease={ease.backOut( 2  )} />
      ]}>
        <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
      </Animation>
    </div>
}
