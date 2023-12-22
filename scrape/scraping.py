import requests
import schedule

import time

def my_code_to_execute():
    url = 'https://chemineeriitk.wordpress.com/'  
    response = requests.get(url)

    if response.status_code == 200:
        html_content = response.text
        file_path = 'scrape\data\wordpress.html'
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(html_content)
        print(f"HTML content saved to {file_path}")
    else:
        print(f"Failed to retrieve the website. Status code: {response.status_code}")

schedule.every(7).days.do(my_code_to_execute)

while True:
    schedule.run_pending()
    time.sleep(1)



