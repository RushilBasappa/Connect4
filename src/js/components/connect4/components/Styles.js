import {yellowA200, red500, white} from 'material-ui/styles/colors';

const backgroundColor = (i) => {
  switch (i) {
    case 0:
      return white;
      break;
    case 1:
      return yellowA200;
      break;
    case 2:
      return red500;
      break;
    default:
      break;
  }
}

const Styles = {
  circle: ((i) => ({
    height: 60,
    width: 60,
    margin: 5,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: backgroundColor(i)
  })),
  flex_box: {
    display: 'flex'
  },
  bgBlue: {
    backgroundColor: "blue"
  }
};

export default Styles