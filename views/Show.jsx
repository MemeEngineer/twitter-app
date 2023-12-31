const React = require('react')
const DefaultLayout = require('./Layout/Default')

function Show({tweet}){
    return(
      <DefaultLayout title='Tweets'>
        <div>
            
            <div>{tweet.title}</div>
            <div>{tweet.author}</div>
            <div>{tweet.body}</div>
            <div>{tweet.sponsored ? 'Sponsored' : ' '} </div>
            <div>{new Date(tweet.createdAt).toLocaleDateString()}</div>
            <div>
        {
          tweet.comments.length > 1 && (
            tweet.comments.map(comment => {
              return (
                <div>
                  <div>{comment.body}</div>
                  <div>{comment.author}</div>
                </div>
              )
            })
          )
        }
      </div>


    {/* COMMENTS FORM  */}
      <div>
        <h3>Comment</h3>
        <form method="POST" action={`/api/tweets/add-comment/${tweet._id}?_method=PUT`}>
          Comment: <input type="text" name="body" required/>

          <br/>
          Author: <input type="text" name="author" required/>

          <br/>
          <input type="submit" value="Add Comment" />
        </form>
      </div>
        </div>
        </DefaultLayout>
    )
}

module.exports = Show;