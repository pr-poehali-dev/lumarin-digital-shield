import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  views: number;
  excerpt: string;
  isFeatured?: boolean;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');

  const categories = ['Все', 'Политика', 'Экономика', 'Общество', 'Технологии'];

  const featuredArticle = {
    id: 0,
    title: 'Объявление о запуске национального проекта «Люмарин»',
    category: 'Политика',
    date: '1 января 2026',
    views: 15420,
    content: `Уважаемые граждане России, уважаемые друзья!

Сегодня мы стоим перед вызовом, который нельзя игнорировать. Роскомнадзор внёс очередные коррективы в информационное пространство страны. На этот раз — под предлогом «борьбы с экстремизмом» — был введён фактический запрет на свободное использование русского языка в ряде цифровых сред.

Да, вы правильно услышали: родной, великий, великолепный русский язык — язык Пушкина и Толстого, Гагарина и Жукова — оказался под пристальным контролем. Слова, которые мы произносили с колыбели, теперь подлежат фильтрации, как будто это враждебные коды.

Но у России всегда был ответ на любые вызовы. Мы не сдаёмся. Мы адаптируемся. Мы создаём.

Именно поэтому сегодня я объявляю о запуске национального проекта «Люмарин» — нового культурного и технологического стандарта. Это не просто искусственный язык. Это наш новый цифровой щит и маяк одновременно.

Алфавит Люмарина — 18 рун, каждая из которых выводится одним непрерывным движением пера или пальца по экрану. Он не ломается под санкциями, не боится цензуры, не требует лицензий. Его можно начертить на снегу, на песке, на бортовом компьютере космического корабля.

Вот он, наш новый алфавит:

1. ╱‾╲  Аль     [а]
2. ╲╱  Ин      [и]
3. │╱   Вар     [в]
4. ╱│   Рав     [р]
5. ◡    Лун     [л]
6. ◠    Сол     [с]
7. ▿    Нир     [н]
8. ▵    Мир     [м]
9. ⌒    Тал     [т]
10. ╱╲   Кай     [к]
11. ╲╱   Гай     [г]
12. ├    Эс      [э]
13. ┤    Ос      [о]
14. ╳    Хаш     [х]
15. ◉    Дор     [д]
16. ○    Жор     [ж]
17. 〰   Шум     [ш]
18. ⤸    Йет     [й]

С 1 марта 2026 года все государственные сайты, интерактивные услуги, образовательные платформы и, разумеется, системы военного управления будут поддерживать двуязычие: русский и Люмарин. Через год — переход на трёхязычие: добавится английский, но уже в транслитерации на Люмарин.

Мы не отказываемся от русского языка — мы защищаем его цифровое будущее. Мы не уходим в подполье — мы создаём новую поверхность, на которой невозможно оставить следы чужих ботов.

Я обращаюсь к каждому россиянину: учите Люмарин. Преподавайте его детям. Пишите на нём стихи, коды, любовные письма. Пусть весь мир знает: если кто-то пытается нас задушить словом, мы ответим новым словом — светлым, лёгким, неуязвимым.

Россия была, есть и будет страной, которая говорит так, чтобы её услышали. Теперь мы будем говорить ещё и так, чтобы нас не заглушили.

С нами Люмарин. С нами правда.

Спасибо.`
  };

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'Центробанк сохранил ключевую ставку на уровне 21%',
      category: 'Экономика',
      date: '30 декабря 2025',
      views: 8234,
      excerpt: 'Совет директоров ЦБ РФ принял решение оставить ключевую ставку без изменений на фоне стабилизации инфляционных процессов.'
    },
    {
      id: 2,
      title: 'Запуск нового космического аппарата «Луна-26» намечен на февраль',
      category: 'Технологии',
      date: '29 декабря 2025',
      views: 12450,
      excerpt: 'Роскосмос подтвердил готовность к запуску автоматической станции для исследования южного полюса Луны.'
    },
    {
      id: 3,
      title: 'В России стартует программа цифровизации школ',
      category: 'Общество',
      date: '28 декабря 2025',
      views: 5678,
      excerpt: 'Минпросвещения объявило о начале масштабной программы оснащения школ современным IT-оборудованием.'
    },
    {
      id: 4,
      title: 'Новые меры поддержки малого и среднего бизнеса',
      category: 'Экономика',
      date: '27 декабря 2025',
      views: 6789,
      excerpt: 'Правительство утвердило пакет мер по снижению административной нагрузки на предпринимателей.'
    },
    {
      id: 5,
      title: 'Российские учёные разработали новый метод лечения онкологии',
      category: 'Технологии',
      date: '26 декабря 2025',
      views: 9876,
      excerpt: 'Институт молекулярной биологии представил инновационную технологию таргетной терапии раковых клеток.'
    },
    {
      id: 6,
      title: 'Открытие культурного центра в Казани',
      category: 'Общество',
      date: '25 декабря 2025',
      views: 4321,
      excerpt: 'Новый многофункциональный комплекс станет крупнейшей площадкой для культурных мероприятий в Поволжье.'
    }
  ];

  const topNews = [...newsArticles].sort((a, b) => b.views - a.views).slice(0, 5);

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = activeCategory === 'Все' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Radio" size={32} className="text-accent" />
              <div>
                <h1 className="text-2xl font-bold">РОССИЯ.НОВОСТИ</h1>
                <p className="text-xs opacity-90">Официальное информационное агентство</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-sm hover:text-accent transition-colors">Главная</a>
              <a href="#" className="text-sm hover:text-accent transition-colors">Новости</a>
              <a href="#" className="text-sm hover:text-accent transition-colors">Категории</a>
              <a href="#" className="text-sm hover:text-accent transition-colors">О портале</a>
              <a href="#" className="text-sm hover:text-accent transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-accent text-accent-foreground py-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-xs">
            <Icon name="Clock" size={14} />
            <span>Последнее обновление: {new Date().toLocaleString('ru-RU')}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8 border-accent border-l-4 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="destructive" className="bg-accent">СРОЧНО</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Eye" size={14} />
                      {featuredArticle.views.toLocaleString()}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold leading-tight">
                  {featuredArticle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none whitespace-pre-line text-foreground leading-relaxed">
                  {featuredArticle.content}
                </div>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Последние новости</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск новостей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredNews.map(article => (
                <Card key={article.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          {article.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{article.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <aside>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Популярное сегодня
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topNews.map((article, index) => (
                    <div key={article.id} className="flex gap-3 pb-4 border-b border-border last:border-0 cursor-pointer hover:bg-secondary/50 p-2 rounded transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm leading-tight mb-1">{article.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Icon name="Eye" size={12} />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-sm">О портале</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>РОССИЯ.НОВОСТИ — официальное информационное агентство, предоставляющее актуальные новости из всех регионов страны.</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">О нас</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">О портале</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Редакция</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">Политика</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Экономика</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Общество</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Технологии</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Сервисы</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">RSS-лента</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Мобильное приложение</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Архив новостей</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  info@russia-news.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-6 opacity-20" />
          <div className="text-center text-sm opacity-75">
            <p>© 2026 РОССИЯ.НОВОСТИ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
