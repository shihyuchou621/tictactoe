const CORNER = [0, 2, 6, 8];
const WINSTR = ',036,147,258,012,345,678,048,246,';

class AI {
  play (plate, ox) { // ox = 'O' or 'X'
    const newPlate = [...plate];

    /** 第一步 */
    if(newPlate.filter(v => v).length < 2) {
      // 如果中間沒下, 那電腦是一定要下的
      // 如果中間有下，那電腦一定要下四個角(0, 2, 6, 8)
      const index = !newPlate[4] ? 4: CORNER[~~(Math.random() * CORNER.length)];
      newPlate[index] = ox;
      return newPlate;
    }

    const WIN_OBJ = {O: WINSTR, X: WINSTR};
    const enemyOX = ox === 'O' ? 'X': 'O';

    /**
     * 如果第一步沒 return 出去，那就要做以下:
     * 1. 判斷對方是否快贏，如果是，就要堵對方
     * 2. 如果否，則積極進攻
     * */
    // const oxIndex = newPlate.reduce((arr, v, i) => {
    //   return v === ox ? [...arr, i]: arr;
    // }, []);
    // const enemyOXIndex = newPlate.reduce((arr, v, i) => {
    //   return v === enemyOX ? [...arr, i]: arr;
    // }, []);

    // for (let i = 0; i < enemyOXIndex.length; i++) {
    for (let i = 0; i < plate.length; i++) {
      if(plate[i] !== enemyOX) continue;
      // const index = enemyOXIndex[i];
      console.log(i);
      WIN_OBJ[enemyOX] = WIN_OBJ[enemyOX].replace(new RegExp(i, 'g'), '');
      const [ match ] = WIN_OBJ[enemyOX].match(/,\d,/) || [];
      if(match) {
        console.log(match);
      }
    }
    return '';
  }
}

const ai = new AI();
console.log(ai.play([
  'X', '', 'O',
  '', 'O', '',
  'X', '', 'O',
], 'X'));