import './App.css';

import {Toggle} from './Components/ColorChange/Toggle';
import {useDarkMode} from './Components/ColorChange/useDarkMode';
import {darkTheme, GlobalStyles, lightTheme} from './Components/ColorChange/globalStyle';
import {ThemeProvider} from 'styled-components';
import NavMenu from "./Components/NavMenu";
import {useEffect, useState} from "react";
import BooksList from "./Components/BooksList";
import GridBooks from "./Components/GridBooks";

function App() {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const [books, setBooks] = useState([]);
    const [search, setSeach] = useState('');
    const [inList, setList] = useState(false);

    useEffect(() => {
        fetch('https://riabooksapi.azurewebsites.net/books').then((res) => {
            return res.json();
        }).then((res => {
            setBooks(res.books.map(book => {
                    return {
                        title: book.title,
                        description: book.longDescription,
                        authors: book.authors,
                        img: book.thumbnailURL,
                        categories: book.categories
                    }
                })
            )
        }))
    }, []);

    const filteredBooks = books.filter(book => book.title.includes(search));

    return (

        <ThemeProvider theme={themeMode}>
            <NavMenu setSeach={setSeach} search={search} setList={setList}/>
            <GlobalStyles/>
            <Toggle theme={theme} toggleTheme={toggleTheme}/>
            {inList ? <BooksList books={filteredBooks}/> : <GridBooks books={filteredBooks}/>}
        </ThemeProvider>
    );
}

export default App;
