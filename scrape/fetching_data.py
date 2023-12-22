from bs4 import BeautifulSoup
from urllib.parse import urljoin
import schedule
import time
import json

def fetchBlogsData():
    url = 'https://chemineeriitk.wordpress.com/' 
    with open("scrape\\data\\wordpress.html", "r", encoding='utf-8') as f:
        html_doc = f.read();
    
    soup = BeautifulSoup(html_doc, "html.parser")
    allelements = soup.find_all('div', class_='entry-wrapper')
    image_elements = soup.find_all('figure', class_='post-thumbnail');
    list=[]
    count = 0;
    for element in allelements:
        s1 = element.h2.text
        s1= s1.replace('\n', '').replace('\t', '').replace(chr(160),' ').strip()
        s2 = element.p.text
        s2 = s2.replace('\n', ' ').replace('\t', ' ').strip()
        s3 = urljoin(url,image_elements[count].img['src'])
        s4 = element.a["href"];
        list.append({"title":s1, "content":s2, "image":s3, "futureRead":s4});
        count = count + 1
    with open("scrape\extracteddata.txt" , 'w', encoding='utf-8') as json_file:
        json.dump(list, json_file, indent=2)


schedule.every(1).days.do(fetchBlogsData)

# Infinite loop to keep the script running
while True:
    schedule.run_pending()
    time.sleep(1)