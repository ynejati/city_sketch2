import TwitterAPI from 'twitter'

// const twitter = new TwitterAPI({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// })

const twitter = new TwitterAPI({
  consumer_key: 'vC9ym3xkm3qaqvUXXSMZxX0X6',
  consumer_secret: 'R2ESMK48v1YdzVZUaZjeIqU8eeugOchvTixmyYSuF1DEDUwWzU',
  access_token_key: '838980743720132609-y1qavS20ZKkBPaiocnQI3UUHoGUMsGQ',
  access_token_secret: 'BzPt4kl7DLhuc8KklTaD8VoNIX0SEiXDxQeD2Jnv6kUKD',
})

const search = async(query) => {
  // TODO import { List } from 'immutable'
  let res
  try {
    res = await twitter.get('search/tweets', {q: query})
  } catch (err) {
  }
  return processTweets(res)
}

const processTweets = (tweets) => {
  let selectedTweets = []
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
  return selectedTweets
}

const handleError = (error) => {
  console.log(`Something went wrong fetching tweets for the query '${query}': ` + error.json)
}

const Twitter = {search}
export default Twitter