import {yellowA200, red500} from 'material-ui/styles/colors';

const backgroundColor = (i) => {
  return (i == 0 ? yellowA200 : red500)
}

const Styles = {
  circle: ((i) => ({
    height: 70,
    width: 70,
    margin: 5,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: backgroundColor(i)
  })),
  flex_box: {
    display: 'flex'
  }
};

export default Styles