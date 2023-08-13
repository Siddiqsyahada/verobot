import requests 

params = {
  'access_key': '46f0b5a2b9def091b89cd9673ddeba19',
  'query': 'New York'
}

api_result = requests.get('https://api.weatherstack.com/current', params)

api_response = api_result.json()

print(u'Current temperature in %s is %.1f℃' % (api_response['location']['name'], api_response['current']['temperature']))
