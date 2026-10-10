// import { useEffect, useState } from "react";

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost/wordpress/wp-json/wp/v2/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>My WordPress Website</h1>

//       {posts.map((post) => (
//         <h2 key={post.id}>{post.title.rendered}</h2>
//       ))}
//     </div>
//   );
// }

// export default App;