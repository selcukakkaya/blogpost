//Blog dizisi oluşturulacak ve post eklenecek, 
// başlık, yazar olabilir.

const posts=[
    {title:'Başlık 1',author:'Yazar 1' },
    {title:'Başlık 2',author:'Yazar 2' },
    {title:'Başlık 3',author:'Yazar 3' }
]

const listPosts=()=>{
    posts.map(post=>{
        console.log(post.title);
    })
}

listPosts();

const addPost=(newPost)=>{
const promise1=new Promise((resolve,reject)=>{
    posts.push(newPost);
    resolve(posts);
    reject('Bir hata...');
});
return promise1; 
}

async function showPosts() {
    try{
await addPost({title:'Başlık 4',author:'Yazar 4'})
listPosts();
    }
    catch(error){
console.log(error);
    }
}

showPosts();