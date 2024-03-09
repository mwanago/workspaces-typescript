import { logInfo, logError } from '@wanago.io/logger';
import express from 'express';

interface Article {
  id: number;
  title: string;
  content: string;
}

const articles: Article[] = [];

const app = express();

app.get('/articles', (request, response) => {
  logError('GET /articles');
  response.send(articles);
})

app.listen(3000);