const A: string[] = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

const B: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const f1: () => string = () => {
  const index: number = Math.floor(Math.random() * A.length);
  const value: string = A[index];
  return value;
};

const f2: () => string = () => {
  const index: number = Math.floor(Math.random() * B.length);
  const value: string = B[index];
  return value;
};

const id: () => string = () => {
  const id1: string =
    f1() + f2() + f2() + f2() + f2() + f2() + f2() + f2() + f2() + f1();
  return id1;
};

const ar7id: () => string = () => {
  const myId: string =
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    "AR7";
  return myId;
};

export default ar7id;
