import TwitterAPI from 'twitter'

const twitter = new TwitterAPI({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

function search(query) {
  // TODO import { List } from 'immutable'
  let selectedTweets = []
  twitter.get('search/tweets', {q: query}, (error, tweets) => {

    if (error) {
      console.log(`Something went wrong fetching tweets for the query '${query}': ` + error.json)
    } else {

      tweets['statuses'].forEach((tweet) => {
          if (tweet.lang === 'en') {

            const chirp = {}
            chirp.date = tweet['created_at']
            chirp.text = tweet['text']

            const hashtags = []
            const entities = tweet.entities || []
            entities.hashtags.forEach((tag) => {
              hashtags.push(tag.text)
            })
            chirp.hashtags = hashtags

            let imageUrl = ''
            try {
              imageUrl = tweet.entities.media[0]['media_url']
            } catch (e) {

            }
            chirp.image_url = imageUrl

            let profileImageUrl = ''
            try {
              profileImageUrl = tweet.user['profile_image_url']
            } catch (e) {

            }

            chirp.profile_image_url = profileImageUrl
            chirp.user_name = tweet.user['name']
            chirp.screen_name = tweet.user['screen_name']

            selectedTweets.push(chirp)
          }
        }
      )
    }
    // TODO: Something to do with closure
    // This will log the selected tweets,...
    console.log(selectedTweets)
  })
  // ...but this will not
  console.log(selectedTweets)
  return { selected_tweets: selectedTweets }
}

const Twitter = {search}
export default Twitter