import { logInfo, logWarning } from '@wanago.io/logger';
import express from 'express';
import { Article } from './Article';
import { isNewArticleValid } from './isNewArticleValid';

let currentArticleId = 0;
const articles: Article[] = [];
const app = express();
app.use(express.json());

app.get('/articles', (request, response) => {
  logInfo('GET /articles');
  response.send(articles);
})

app.post('/articles', (request, response) => {
  logInfo('POST /articles');

  if (!isNewArticleValid(request.body)) {
    logWarning(`Invalid article ${JSON.stringify(request.body)}`);
    return response.sendStatus(400);
  }

  const newArticle: Article = {
    id: ++currentArticleId,
    title: request.body.title,
    content: request.body.content
  }

  articles.push(newArticle);

  response.send(newArticle);
})

app.listen(3000);