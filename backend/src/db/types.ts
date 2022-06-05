export interface Event {
	id : string
	event_type : string
	visit_id : string
	timestamp : string
	caregiver_id : string
	care_recipient_id : string
	mood? : string
	payload : any
}