interface KeywordType {
  keyword: string;
}

interface QuestionType {
  questionNo: number;
  question: string;
  answerList: string[];
}

interface GetFromSpringType1 {
  doneRatio: number[];
  genreRatio: number[];
  myType: {
    count: number | null;
    image: string;
    thumbnailCharacter: string;
    thumbnailTitle: string;
    userType: string;
  };
  platformRatio: number[]; // Updated property name
  webtoonCounts: number;
}
interface GetFromSpringType2 {
  allUser: number;
  myRank: number;
}
interface MyGenreType {
  genreId: number;
  genreName: string;
}

interface MyKeywordType {
  myKeywordId: number[];
  myKeywordName: string[];
}

interface resultNbtiWebtoonType {
  endFlag: number;
  genreId: number;
  image: string;
  likeRate: number;
  platform: string;
  rate: number;
  title: string;
  view: number;
  webtoonId: number;
}
interface FetchDataType1 {
  getFromSpring: GetFromSpringType1[];
  getFromSpring2: GetFromSpringType2[];
  myGenre: MyGenreType[];
  myKeyword: MyKeywordType[];
  resultNbtiWebtoon: resultNbtiWebtoonType[];
}
