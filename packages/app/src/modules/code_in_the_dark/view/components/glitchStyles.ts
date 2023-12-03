import { makeStyles } from '@mui/styles'; 

function random(max: number, min = 0): number {
    return Math.floor(Math.random() * (max - min) + min);
}

const mixinForPsevdo = {
    clip: 'rect(44px, 450px, 56px, 0)',
    content: 'attr(data-text)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
}
const keyframes = () => {
    const result: { [key: string]: {[key: string]: string;}; } = {};

    for (let i = 0; i <= 100; i+=5) {
        console.log('i:', i);

        result[`${i}%`] = {
            clip: `rect(${random(100)}px, 9999px, ${random(100)}px, 0)`,
            transform: `skew((${random(100) / 100})deg)`,
        }
    }
    
    return result
}

const useGlitchStyles = makeStyles(() => ({
  title: {
    color: 'white',
    position: 'relative',
    display: 'block',
    textAlign: 'center',
    '&::before': {
      ...mixinForPsevdo,
      animation: '$glitch 6s infinite linear alternate-reverse',
      textShadow: '-2px 0 #ff00c1',
      left: '2px'
    },
    '&::after': {
      ...mixinForPsevdo,
      animation: '$glitchTwo 3s infinite linear alternate-reverse',
      textShadow: '-2px 0 #00fff9, 2px 2px #ff00c1',
      left: '-2px'
    },
  },
  '@keyframes glitch': {
    ...keyframes()
  },
  '@keyframes glitchTwo': {
    ...keyframes()
  }
}));


export {useGlitchStyles};