```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route is the source of the bug */}
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <h1>Home</h1>;}

function About() {  return <h1>About</h1>;}

function User({ params }) { //Incorrect parameter handling
  return (
    <div>
      <h1>User {params.id}</h1>
    </div>
  );
}
export default App; 
```