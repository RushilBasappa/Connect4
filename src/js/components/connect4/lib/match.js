import config from './config'

const isHorizontal = (boardStatus) => {
  let matchCount = 0;
  let compareValue = 0;
  for (let x = 0; x < config.rows; x++) {
    for (let y = 0; y < config.columns; y++) {
      let element = boardStatus[x][y];
      if (element === 0) {
        matchCount = 0;
        compareValue = 0;
        continue;
      }
      if (element !== compareValue) {
        matchCount = 1;
        compareValue = element;
        continue;
      }
      matchCount++;
      if (matchCount >= 4) {
        return true;
      }
    }
  }
  return false;
}

const isVertical = (boardStatus) => {
  let matchCount = 0;
  let compareValue = 0;
  for (let y = 0; y < config.columns; y++) {
    for (let x = 0; x < config.rows; x++) {
      let element = boardStatus[x][y];
      if (element === 0) {
        matchCount = 0;
        compareValue = 0;
        continue;
      }
      if (element !== compareValue) {
        matchCount = 1;
        compareValue = element;
        continue;
      }
      matchCount++;
      if (matchCount >= 4) {
        return true;
      }
    }
  }
  return false;
}

const isTopRight = (boardStatus) => {
  for (let x = 0; x < (config.rows - 3); x++) {
    for (let y = 0; y < (config.columns - 3); y++) {
      let matchCount = 0;
      let compareValue = 0;
      let element = boardStatus[x][y];
      if (element === 0) {
        matchCount = 0;
        compareValue = 0;
        continue;
      }
      if (element !== compareValue) {
        matchCount = 1;
        compareValue = element;
      }
      _.forEach(_.range(1, 4), (value) => {
        if (boardStatus[x + value][y + value] == element) {
          matchCount++;
        }
      })
      if (matchCount >= 4) {
        return true;
      }
    }
  }
  return false;
}

const isTopLeft = (boardStatus) => {
  for (let x = 0; x < (config.rows - 3); x++) {
    for (let y = config.columns - 1; y > 2; y--) {
      let matchCount = 0;
      let compareValue = 0;
      let element = boardStatus[x][y];
      if (element === 0) {
        matchCount = 0;
        compareValue = 0;
        continue;
      }
      if (element !== compareValue) {
        matchCount = 1;
        compareValue = element;
      }
      _.forEach(_.range(1, 4), (value) => {
        if (boardStatus[x + value][y - value] == element) {
          matchCount++;
        }
      })
      if (matchCount >= 4) {
        return true;
      }
    }
  }
  return false;
}

const isDiagonal = (boardStatus) => (isTopRight(boardStatus) || isTopLeft(boardStatus))

const Matches = (boardStatus) => (isHorizontal(boardStatus) || isVertical(boardStatus) || isDiagonal(boardStatus))

export default Matches;