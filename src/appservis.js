const axios = require('axios');
const API_URL = 'https://jsonplaceholder.typicode.com';

module.exports = {
    getCounts: async () => {
        try {
            const [posts, comments, albums, photos, todos, users] = await Promise.all([
                axios.get(`${API_URL}/posts`),
                axios.get(`${API_URL}/comments`),
                axios.get(`${API_URL}/albums`),
                axios.get(`${API_URL}/photos`),
                axios.get(`${API_URL}/todos`),
                axios.get(`${API_URL}/users`)
            ]);
            console.log(`Posts: ${posts.data.length}`);
            console.log(`Comments: ${comments.data.length}`);
            console.log(`Albums: ${albums.data.length}`);
            console.log(`Photos: ${photos.data.length}`);
            console.log(`Todos: ${todos.data.length}`);
            console.log(`Users: ${users.data.length}`);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    },

    getRandomPostComments: async () => {
        try {
            const posts = await axios.get(`${API_URL}/posts`);
            const randomPost = posts.data[Math.floor(Math.random() * posts.data.length)];
            console.log(`Post ID: ${randomPost.id}\nTitle: ${randomPost.title}`);
            const comments = await axios.get(`${API_URL}/posts/${randomPost.id}/comments`);
            console.log('Comments:', comments.data);
        } catch (error) {
            console.error('Error fetching post comments:', error.message);
        }
    },

    getUserPosts: async (userId) => {
        try {
            const posts = await axios.get(`${API_URL}/posts?userId=${userId}`);
            console.log(`User ${userId} Posts:`);
            console.log(posts.data);
        } catch (error) {
            console.error('Error fetching user posts:', error.message);
        }
    }
};
