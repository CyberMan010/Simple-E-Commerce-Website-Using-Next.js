
//////////////////////////////////////////// way1 using fetch /////////////////////////////////////


// export default async function Page() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();  
  
//     return (
//       <div>
//     {posts.map((post)=>(
//         <div className="post"  key={post.id}>
//         <h1>Title : {post.title}</h1> 
//         <p>Id : {post.id}</p>
//         <p>body : {post.body}</p>
//         <p> userId : {post.userId}</p>
//         <p>////////////////////////////////////////////////////////////////////</p>
//         </div>
//     ))}
//         </div>
//     );
//   }
  

//////////////////////////////////////////////////////// Way2 using axios ///////////////////////////


// import axios from 'axios';

// export default async function Page() {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   const posts = response.data;

//   return (
//     <div className="container">
//       {posts.map((post) => (
//         <div className="post" key={post.id}>
//           <h1>Title: {post.title}</h1>
//           <p>Id: {post.id}</p>
//           <p>Body: {post.body}</p>
//           <p>UserId: {post.userId}</p>
//           <div className="separator"></div>
//         </div>
//       ))}
//     </div>
//   );
// }














import axios from 'axios';

export default async function Page() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = response.data;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {post.title}
              </h2>
              <div className="flex space-x-4 text-sm text-gray-500 mb-3">
                <p>userId : {post.userId}</p>
                <p>postId: {post.id}</p>
              </div>
              <p className="text-gray-700 line-clamp-3">
                {post.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}