import { Lang, TextContent, URLsData } from "./models";

export class Article {
    title: TextContent;
    content: TextContent;
    date: Date;
    thumbnails: string[];

    constructor(title: TextContent, content: TextContent, date: Date, thumbnails: string[]) {
      this.thumbnails = thumbnails;
      this.content = content;
      this.title = title;
      this.date = date;
    }
  }

  export default class ArticlesData {
    static articles: { [key: string]: Article } = {};
    contents: { [key: string]: TextContent } = {};
    titles: { [key: string]: TextContent } = {};

    constructor() {
      this.titles['ministick'] = new TextContent(
        "my latest game: *ministick*",
        "mon tout dernier jeu: *ministick*",
      )
      this.contents['ministick'] = new TextContent(
        "One of the projects I'm the most proud of.\n\
        Chain *combos* and smash innocent guys in this\
        *colorful* and *addicting* beat-them all.\n\
        *How far* can you get ? 💨",

        "Un de mes projets préférés.\n\
        Enchaînez les *combos* et dégommez des gens\
        *parfaitement innocents* dans ce *'beat-them-all'* assez addictif.\n\
        *Jusqu'où* pourrez-vous aller ? 💨"
      );

      this.titles['ministick2'] = new TextContent(
        "working on... *ministick 2* !",
        "*ministick 2* est en préparation !",
      )
      this.contents['ministick2'] = new TextContent(
        "Since the game had a lot of success among my friends,\
         I have started to upgrade it to a *next level*.\n\
        I'm planning to make the game more *clever* and implement\
         more precise *fighting*/*combo* mechanics.\n\
        I've already *smoothen* the animation and added a bunch of *new moves* !\n\
        Stay tuned 👀",

        "Vu comment mes potes s'étaient *enjaillés* sur le\
        premier jeu, j'ai commencé à travailler sur\
        une version plus poussée de *ministick*.\n\
        L'idéal, ce serait de rendre le jeu beaucoup plus\
        *technique*, avec des *mécaniques* et des *combos uniques*. ça rime.\n\
        J'ai déjà fluidifié l'animations des mouvements, et j'ai aussi dessiné\
        plein de *nouveaux moves* que vous pouvez tester *tout de suite* !!\n\
        Hésitez pas à check le Github 👀"
      );

      this.titles['collab'] = new TextContent(
        "my collab with *@eChoGames* !",
        "grosse collab avec *@eChoGames* !",
      )
      this.contents['collab'] = new TextContent(
        "Recently I've been drawing *sprites* for a game brought by *[guest]*\
        on the occasion of the (ScoreSpace Jam #12)[https://gamejam.com/jam/scorejam12/submissions].\n\
        The jam's theme was *\"COMBINING\"*, so we've crafted a cute 2048-like\
        game based on *merging* and *selling* potions in town !\n\
        We reached the *4th position* (among 94 participants !) and we keep\
        polishing stuff to make it something *bigger*. 🧐\n\
        We hope you'll enjoy playing the game as we enjoyed cooking it.",

        "Assez récemment, j'ai dessiné des *sprites* pour un jeu d'*[guest]* à l'occasion de la\
        (ScoreSpace Jam #12)[https://gamejam.com/jam/scorejam12/submissions].\n\
        Le thème de la Jam était *\"COMBINING\"*, du coup on vous a concocté un petit\
        jeu à la 2048 où l'on doit *fusionner* et *vendre* des potions en ville !\n\
        On a fini par atteindre la *4è place* (sur genre 94 hein !), et vu le\
        *succès* que le jeu a eu auprès du jury, on s'est dit que ce serait\
        intéressant de continuer à bosser dessus et d'en faire quelque chose\
        de plus *sérieux*. 🧐\n\
        En tous cas, on espère que vous prendrez autant de plaisir à y jouer\
        qu'on en a pris pour le faire. :D"
      );

      ArticlesData.articles['ministick'] = new Article(
        this.titles['ministick'],
        this.contents['ministick'],
        new Date(Date.UTC(2021, 2, 27, -2, 0, 0)),
        new URLsData().from('ministick')
      );

      ArticlesData.articles['ministick2'] = new Article(
        this.titles['ministick2'],
        this.contents['ministick2'],
        new Date(Date.UTC(2021, 3, 1, 0, 0, 0)),
        new URLsData().from('ministick2')
      );

      ArticlesData.articles['collab'] = new Article(
        this.titles['collab'],
        this.contents['collab'],
        new Date(Date.UTC(2021, 2, 20, 0, 0, 0)),
        new URLsData().from('collab')
      );
    }

    static get(key: string): Article {
      return ArticlesData.articles[key];
    }

    titleFrom(key: string, lang: Lang): string {
      return this.titles[key].in(lang);
    }

    contentFrom(key: string, lang: Lang): string {
      return this.contents[key].in(lang);
    }
  }
