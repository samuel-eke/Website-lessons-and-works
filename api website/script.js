// Choose your API endpoint and key
const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2ccfdba0c41b4463b62261d74c0ce6a0";

// Fetch news data
fetch(API_URL)
.then(resp => resp.json())
.then(data => {
  console.log("full json. dont write ", data)
  const newsItems = data.articles;
  const newsContainer = document.getElementById("news-container");

  // Loop through news items and create elements
  newsItems.forEach(item => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");

    const title = document.createElement("h3");
    title.innerText = item.title;
    newsItem.appendChild(title);

    const source = document.createElement("p");
    source.innerText = `Source: ${item.source.name}`;
    newsItem.appendChild(source);

    const link = document.createElement("a");
    link.href = item.url;
    link.innerText = "Read more";
    newsItem.appendChild(link);

    newsContainer.appendChild(newsItem);
  });
});
