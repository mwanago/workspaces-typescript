import {Article} from "./Article";

export function isNewArticleValid(article: Pick<Article, 'title' | 'content'>) {
  return typeof article.content === 'string' && typeof article.title === 'string';
}