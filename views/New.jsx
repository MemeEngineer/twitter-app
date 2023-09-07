const React = require('react')
const DefaultLayout = require('./Layout/Default')

function New(){
    return(
        <DefaultLayout title='Create Tweets'>
        <div>
            <h2> Create a New Tweet</h2>
            <form action= '/api/tweets' method="POST">
                Title: <input type='text' name= "title" required />
                Author: <input type='text' name= "author" required/>
                <textarea name="body" required />
                <input type="submit" value="Post" />
            </form>
        </div>
        </DefaultLayout>
    )
}

module.exports = New;