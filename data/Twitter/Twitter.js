
import TwitterAPI from 'twitter'

const twitter = new TwitterAPI({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

function search (query) {
  twitter.get('search/tweets', { q: query }, function (error, tweets, response) {
    if (error) {
      console.log('Error: ' + error)
    }
    // console.log(tweets)
    // console.log(response)
    return tweets
  })
}