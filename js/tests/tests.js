describe('addStory() creates a new story, sending story to backend API', function() {
    it('should create a story object', async function () {
        
        const user = new User({
            username: "hamface",
            name: "HamFace",
            createdAt: null,
            favorites: [],
            ownStories: []
        },
        token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbWZhY2UiLCJpYXQiOjE2MjczOTkzNTZ9.53fmhtHqa7wA7pTZXN_DL8DU_aYTKLRBByZHOV0VnVg")

        let newStory = { 
            title: "What",
            author: "Ever",
            url: "http://whatever.com",
        }
        
        const response = await addStory(user, newStory);
            expect(response).toBeInstanceOf(Story);
                

                
    } )
} )
