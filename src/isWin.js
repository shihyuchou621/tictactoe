export default function isWin(plate) {
  const winStr = ',036,147,258,012,345,678,048,246,';
  const winObj = {O: winStr, X: winStr};
  for (let i = 0; i < plate.length; i++) {
    const ox = plate[i]; // O, X, ''
    if(!ox) continue;
    winObj[ox] = winObj[ox].replace(new RegExp(i, 'g'), '');
    if(winObj[ox].includes(',,')) return ox;
  }
  if(plate.every(v => v)) return 'T';
  return '';
}

/*
isWin([
  'O', 'X', 'X',
  '', 'O', '',
  '', '', 'O',
]); // -> O

isWin([
  'X', 'X', 'X',
  '', 'O', '',
  '', '', 'O',
]); // -> X

isWin([
  '', 'X', 'X',
  '', 'O', '',
  '', '', 'O',
]); // -> ''
*/