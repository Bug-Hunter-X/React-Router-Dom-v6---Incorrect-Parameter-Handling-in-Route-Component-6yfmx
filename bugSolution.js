```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <h1>Home</h1>;}

function About() {  return <h1>About</h1>;}

function User() {
  const { id } = useParams(); // Correct way to access parameters
  return (
    <div>
      <h1>User {id}</h1>
    </div>
  );
}
export default App; 
```