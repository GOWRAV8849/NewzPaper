**Tech News Aggregator - NewzPaper**

**OVERVIEW**
This project is a Flask-based web application that aggregates technology news
from sources like chinadaily.com and Techcrunch.com, processes the content, 
and provides a summarized version including catchy titles and contextual descriptions.
The news articles are fetched via web scraping(into chunks) and stored in a PostgreSQL database.
A locally hosted Llama 3.2 model (running on Ollama) is used to generate catchy titles, descriptions, and concise summaries of the articles.

**FEATURES**
-Fetches news articles from multiple sources at scheduled intervals
-Stores articles in a PostgreSQL database
-Uses Llama 3.2 to generate summaries, titles, and descriptions
-Implements APScheduler to refresh news content at configurable intervals. 
 for testing we've used scheduling for an interval of 5 minutes, after each interval Database tables(ChinaTech & GlobalTech) are updated with new fetched data.
- The frontend autometically refreshes after each interval of time(1 minute during testing) and fetches new processed data from Database Tables, iteratively.
- Articles can be changed just by the refreshing the page (Ctrl + R) within that catagory(GlobalTech or ChinaTech)
- We can also switch between the catagories just by clicking the <li>(GlobalTech or ChinaTech) elements in the sidebar. (GlobalTech is the default one.)
- desciptions, title, author, time and url are added as metadata for SEO optimization

**How to start**
-Run the 'app.py' in the backend folder, wait for 1.5 - 2 minutes for database initialization.
-Now, run the 'index.js' in the frontend folder.wait for frontend to be loaded.
-The web page will now run automatically i.e will change the articles after certain interval.
