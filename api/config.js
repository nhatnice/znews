import CONFIG from '../global/config';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY || 'your_news_api_key_here';

const config = {
    API_URL: CONFIG.DEBUG ? 'http://localhost:8082/api/v1' : (CONFIG.API_URL || 'https://api.news.lavenes.com/api/v1'),
    API_KEY: API_KEY,
    HEADERS: {
        "api_key": API_KEY
    }
}

export default config;
