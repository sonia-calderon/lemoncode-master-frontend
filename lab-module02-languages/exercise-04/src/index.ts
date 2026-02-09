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
    books.forEach(book => {
        const { title, isRead } = book;
        const titleExists = title?.includes(titleToSearch);

        if(titleExists && isRead){
            console.log(`${title}: leído`)
        } else if(titleExists && isRead === false) {
            console.log(`${title}: no leído`)
        };
    });
 
};

isBookRead(books, "Walden");
isBookRead(books, "Los nombres propios");