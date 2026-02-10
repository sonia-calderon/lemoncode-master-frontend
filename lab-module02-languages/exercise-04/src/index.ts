type Book = {
    title: string;
    isRead: boolean;
}

const books: Book[] = [
    {title: "Persépolis", isRead: true },
    {title: "Los nombres propios", isRead: true},
    {title: "El clan del oso cavernario", isRead: true},
    {title: "Walden", isRead: false},
    {title: "Ensayo sobre la ceguera", isRead: false},
];

function isBookRead (books: Book[], titleToSearch: string) {

    const book = books.find(book => book.title === titleToSearch);

    if(!book){
        console.log(`${titleToSearch}: no existe en la biblioteca`);
        return;
    };

    if (book?.isRead) {
        console.log(`${book?.title}: leído`);
    } else {
        console.log(`${book?.title}: no leído`);
    };
};

isBookRead(books, "Walden");
isBookRead(books, "Los nombres propios");
isBookRead(books, "La profecía del armadillo");