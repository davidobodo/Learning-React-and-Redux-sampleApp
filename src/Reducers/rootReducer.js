const initState = {
	posts : [
		 {
    "userId": 1,
    "id": 1,
    "title": "First point",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
   {
    "userId": 1,
    "id": 2,
    "title": "Second Point",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Third point",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }

	]
}

const rootReducer = ( state = initState, action) =>{
	if(action.type == "DELETE_POST"){
		let newPosts = state.posts.filter(post=> 
			{return action.id !== post.id});
		return{
			...state,
			posts :newPosts
		}
	}
	return state;
}

export default rootReducer