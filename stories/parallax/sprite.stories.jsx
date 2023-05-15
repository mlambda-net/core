import {  Sprite, Frame } from "@mlambda-net/web-core/parallax";

import Cat from './assets/cat.png'
import Bird from './assets/bird.jpg'

export default {
  title: 'MLambda/parallax/sprite',
  component: Sprite,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    preview: false,
    image: Cat,
    name: 'cat',
    width: 80,
    height: 80,
    size: { x: 260, y: 180 },
    time: 150,
    enabled: true,
    pixelPerfect: false,
    frames: [
      true,
      true,
      true,
      true,
      true,
      true,
    ]
  },
  render: (args) =>
    <Sprite  {...args} >
      <Frame position={{ x: -10, y: -17 }}   visible={args.frames[0]} />
      <Frame position={{ x: -91, y: -23 }}  visible={args.frames[1]} />
      <Frame position={{ x: -168, y: -22 }}  visible={args.frames[2]}/>
      <Frame position={{ x: -5, y: -283 }}  visible={args.frames[3]}/>
      <Frame position={{ x: -88, y:  -281 }}  visible={args.frames[4]}/>
      <Frame position={{ x: -170, y: -280 }}  visible={args.frames[5]}/>
    </Sprite>
};

export const Secondary = {
  args: {
    preview: false,
    image: Bird,
    name: 'bird',
    enabled: true,
    width: 200,
    height: 238,
    size: { x: 650, y: 500 },
    time: 100,
    pixelPerfect: false,
    frames: [
      true,
      true,
      true,
      true,
      true,
      true,
    ]
  },

  render: (args) =>

    <Sprite {...args} >
      <Frame position={{ x: -10, y: -30 }} visible={args.frames[0]} />
      <Frame position={{ x: -219, y: -30 }} visible={args.frames[1]} />
      <Frame position={{ x: -429.2, y: -30 }} visible={args.frames[2]} />
      <Frame position={{ x: -10, y: -229 }} visible={args.frames[3]} />
      <Frame position={{ x: -219, y:  -229 }} visible={args.frames[4]} />
      <Frame position={{ x: -429.2, y: -229 }} visible={args.frames[5]} />

    </Sprite>
};



