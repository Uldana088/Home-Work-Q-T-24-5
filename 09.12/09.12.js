const library = {
    name: "Орталық кітапхана",
    address: "Almaty",
    books: [
      { title: "title1", author: "author1", year: 1997 },
      { title: "title2", author: "author2", year: 1994},
      { title: "title3", author: "author3", year: 1879 }
    ]
  };
/////////////////////////////////////////////////////////////////////////////////
  function changeLibraryName() {
    const newName = prompt("Жаңа кітапхананың атауын енгізіңіз:");
    if (newName) {
      library.name = newName;
      alert(`Кітапхананың атауы өзгертілді: ${newName}`);
    }
  }
  /////////////////////////////////////////////////////////////////////////////////

  function changeLibraryAddress() {
    const newAddress = prompt("Жаңа мекенжайды енгізіңіз:");
    if (newAddress) {
      library.address = newAddress;
      alert(`Кітапхананың мекенжайы өзгертілді: ${newAddress}`);
    }
  }
  /////////////////////////////////////////////////////////////////////////////////
  function listAvailableBooks() {
    const availableBooks = library.books.filter(book => book.isAvailable);
    if (availableBooks.length > 0) {
      const bookTitles = availableBooks.map(book => book.title).join("\n");
      alert("Қолжетімді кітаптар:\n" + bookTitles);
    } else {
      alert("Қолжетімді кітаптар жоқ.");
    }
  }
  /////////////////////////////////////////////////////////////////////////////////
  function addBook() {
    const title = prompt("Кітаптың атауын енгізіңіз:");
    const author = prompt("Автордың аты-жөні:");
    const year = prompt("Басылып шыққан жылын енгізіңіз:");
    const isAvailable = prompt("Кітап қолжетімді ме? (true/false)") === "true";
    
    if (title && author && year) {
      library.books.push({ title, author, year: parseInt(year), isAvailable });
      alert("Жаңа кітап кітапханаға қосылды.");
    } else {
      alert("Барлық деректерді дұрыс енгізіңіз.");
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  function books() {
    const bookTitle = prompt("Кітаптың атауын енгізіңіз:");
    const book = library.books.find(b => b.title === bookTitle);
    
    if (book) {
      book.isAvailable = !book.isAvailable;
      alert(`Кітаптың қолжетімділік мәртебесі өзгертілді: ${book.isAvailable ? "Қолжетімді" : "Қолжетімсіз"}`);
    } else {
      alert("Кітап табылмады");
    }
  }
 ///////////////////////////////////////////////////////////////////////////////// 
  function menu() {
    let exit = false;
  
    while (!exit) {
      const choice = prompt(`Мәзір:
        1. Кітапхананың атауын өзгерту
        2. Мекенжайын өзгерту
        3. Қолжетімді кітаптарды шығару
        4. Жаңа кітап қосу
        5. Кітаптың қолжетімділік мәртебесін өзгерту
        6. Шығу
        Таңдауыңызды енгізіңіз:`);
  
      switch (choice) {
        case "1":
          changeLibraryName();
          break;
        case "2":
          changeLibraryAddress();
          break;
        case "3":
          listAvailableBooks();
          break;
        case "4":
          addBook();
          break;
        case "5":
          books();
          break;
        case "6":
          exit = true;
          alert("Шығу жасалды.");
          break;
        default:
          alert("Qate");
      }
    }
  }
  
  menu();
  