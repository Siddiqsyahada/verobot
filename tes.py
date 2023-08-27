import requests

url = "https://the-love-calculator.p.rapidapi.com/love-calculator"

querystring = {"fname":"siddiq","sname":"zahra"}

headers = {
	"X-RapidAPI-Key": "3821ab94c3msh76f6c39cfce22fep19a688jsn3c8bd46426c9",
	"X-RapidAPI-Host": "the-love-calculator.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())