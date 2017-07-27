import fetch from 'node-fetch'
import { checkStatus, parseJSON } from '../helpers/apiHelpers'

const apiKey = process.env.MEETUP_KEY

const fetchEvents = async (lat, lon) => {

	let res
	try {
		res = await fetch(`https://api.meetup.com/find/events?key=${apiKey}&sign=true&photo-host=public&lon=${lon}&text=*&lat=${lat}`)
			.then(checkStatus)
			.then(parseJSON)
	} catch (err) {
		// TODO
		console.error(`Something went wrong fetching meetup events: ${err}`)
	}
	return processMeetupEvents(res)
}

const processMeetupEvents = (events) => {
	let filteredEvents = []

	events.forEach((e) => {
		let event = { group: {} }

		event.link = e.link
		event.time = e.time
		event['utc_offset'] = e['utc_offset']
		event.duration = e.duration
		event.description = e.name
		event['yes_rsvp_count'] = e['yes_rsvp_count']
		event['waitlist_count'] = e['waitlist_count']

		const group = e.group
		event.group.name = group.name
		event.group.who = group.who
		event.group.location = group['localized_location']
		event.group.lat = group.lat
		event.group.lon = group.lon

		filteredEvents.push(event)
	})
	return filteredEvents
}

const Meetup = { fetchEvents }
export default Meetup