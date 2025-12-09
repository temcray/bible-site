
import { BIBLE } from "./bible";

class BibleService {
  getBookNames() {
    let booksNames = [];
    for (let i = 0; i < BIBLE.length; i++) {
      let book = BIBLE[i];
      booksNames.push(book.bname);
    }

    return booksNames;
  }

  getChapterByBook(bookName) {
    for (let i = 0; i < BIBLE.length; i++) {
      let book = BIBLE[i];
      if (book.bname === bookName) {
        // get the name of each of its chapters
        return book.CHAPTER.map(chapter => chapter.cnumber);
        // book.CHAPTER
      }
    }
  }

  getVerses(bookName, chapterNumber) {
    const book = BIBLE.find(b => b.bname === bookName);
    if (!book) return [];

    const chapter = book.CHAPTER.find(ch => String(ch.cnumber) === String(chapterNumber));
    if (!chapter) return [];

    return chapter.VERS;
  }
}


export default new BibleService();