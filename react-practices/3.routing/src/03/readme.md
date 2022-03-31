# ex03: React Router Basic III: HashRouter &amp; BrowserRouter
### hashRouter
```js
export default function App() {
    return (
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/gallery' element={<Gallery />}/>
                    <Route path='/guestbook' element={<Guestbook />}/>
                </Routes>
            </HashRouter>
    );
}
```
+ http://localhost:9090/#/guestbook

<br>
<br>

### BrowserRouter
```js
export default function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/gallery' element={<Gallery />}/>
                    <Route path='/guestbook' element={<Guestbook />}/>
                </Routes>
            </BrowserRouter>
    );
}
```
+ http://localhost:9090/guestbook

