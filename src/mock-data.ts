import { MarvelApiResponse } from './shared/types/marvel-api'

export const FAKE_LIST_RESPONSE: MarvelApiResponse = {
  code: 200,
  status: 'Ok',
  copyright: '© 2024 MARVEL',
  attributionText: 'Data provided by Marvel. © 2024 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: '2b4e29058ef64a71efc61ce70e3f59f63f3d0e83',
  data: {
    offset: 0,
    limit: 20,
    total: 1564,
    count: 20,
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
              name: 'Avengers: The Initiative (2007) #14',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
              name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
              name: 'Avengers: The Initiative (2007) #15',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21741',
              name: 'Avengers: The Initiative (2007) #16',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21975',
              name: 'Avengers: The Initiative (2007) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
              name: 'Avengers: The Initiative (2007) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
              name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
              name: 'Avengers: The Initiative (2007) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8500',
              name: 'Deadpool (1997) #44',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
              name: 'Marvel Premiere (1972) #36',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10225',
              name: 'Marvel Premiere (1972) #37',
            },
          ],
          returned: 12,
        },
        series: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
              name: 'Avengers: The Initiative (2007 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
              name: 'Deadpool (1997 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 21,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
              name: 'Cover #19947',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19948',
              name: 'The 3-D Man!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19949',
              name: 'Cover #19949',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19950',
              name: "The Devil's Music!",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19951',
              name: 'Cover #19951',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19952',
              name: 'Code-Name:  The Cold Warrior!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47184',
              name: 'AVENGERS: THE INITIATIVE (2007) #14',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47185',
              name: 'Avengers: The Initiative (2007) #14 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47498',
              name: 'AVENGERS: THE INITIATIVE (2007) #15',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47499',
              name: 'Avengers: The Initiative (2007) #15 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47792',
              name: 'AVENGERS: THE INITIATIVE (2007) #16',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47793',
              name: 'Avengers: The Initiative (2007) #16 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48361',
              name: 'AVENGERS: THE INITIATIVE (2007) #17',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48362',
              name: 'Avengers: The Initiative (2007) #17 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49103',
              name: 'AVENGERS: THE INITIATIVE (2007) #18',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49104',
              name: 'Avengers: The Initiative (2007) #18 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49888',
              name: 'AVENGERS: THE INITIATIVE (2007) #19',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49889',
              name: 'Avengers: The Initiative (2007) #19 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54371',
              name: 'Avengers: The Initiative (2007) #14, Spotlight Variant - Int',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1017100,
        name: 'A-Bomb (HAS)',
        description:
          "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        modified: '2013-09-18T15:54:04-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
        comics: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/47176',
              name: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40632',
              name: 'Hulk (2008) #53',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40630',
              name: 'Hulk (2008) #54',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40628',
              name: 'Hulk (2008) #55',
            },
          ],
          returned: 4,
        },
        series: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/17765',
              name: 'FREE COMIC BOOK DAY 2013 1 (2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92078',
              name: 'Hulk (2008) #55',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92079',
              name: 'Interior #92079',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92082',
              name: 'Hulk (2008) #54',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92083',
              name: 'Interior #92083',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92086',
              name: 'Hulk (2008) #53',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92087',
              name: 'Interior #92087',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/105929',
              name: 'cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1',
              type: 'cover',
            },
          ],
          returned: 7,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1009144,
        name: 'A.I.M.',
        description: 'AIM is a terrorist organization bent on destroying the world.',
        modified: '2013-10-17T14:41:30-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
        comics: {
          available: 53,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009144/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36763',
              name: 'Ant-Man & the Wasp (2010) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17553',
              name: 'Avengers (1998) #67',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7340',
              name: 'Avengers (1963) #87',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/4214',
              name: 'Avengers and Power Pack Assemble! (2006) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63217',
              name: 'Avengers and Power Pack (2017) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63218',
              name: 'Avengers and Power Pack (2017) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63219',
              name: 'Avengers and Power Pack (2017) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63220',
              name: 'Avengers and Power Pack (2017) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/64790',
              name: 'AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/103371',
              name: 'Avengers Unlimited Infinity Comic (2022) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1170',
              name: 'Avengers Vol. 2: Red Zone (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1214',
              name: 'Avengers Vol. II: Red Zone (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12787',
              name: 'Captain America (1998) #28',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7513',
              name: 'Captain America (1968) #132',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7514',
              name: 'Captain America (1968) #133',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/65466',
              name: 'Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20367',
              name: 'Defenders (1972) #57',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/31068',
              name: 'Incredible Hulks (2010) #606 (VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/46168',
              name: 'Indestructible Hulk (2012) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43944',
              name: 'Iron Man (2012) #1',
            },
          ],
          returned: 20,
        },
        series: {
          available: 36,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009144/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13082',
              name: 'Ant-Man & the Wasp (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23123',
              name: 'Avengers and Power Pack (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1046',
              name: 'Avengers and Power Pack Assemble! (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27689',
              name: 'AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/35600',
              name: 'Avengers Unlimited Infinity Comic (2022 - 2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/227',
              name: 'Avengers Vol. 2: Red Zone (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/271',
              name: 'Avengers Vol. II: Red Zone (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1997',
              name: 'Captain America (1998 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1996',
              name: 'Captain America (1968 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23810',
              name: 'Captain America by Mark Waid, Ron Garney & Andy Kubert (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
              name: 'Defenders (1972 - 1986)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/8842',
              name: 'Incredible Hulks (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16583',
              name: 'Indestructible Hulk (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2029',
              name: 'Iron Man (1968 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16593',
              name: 'Iron Man (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23915',
              name: 'Iron Man Epic Collection: Doom (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9718',
              name: 'Marvel Adventures Super Heroes (2010 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/189',
              name: 'Marvel Masterworks: Captain America Vol. 1 - 2nd Edition (2003)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 57,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009144/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5800',
              name: 'Avengers and Power Pack Assemble! (2006) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5801',
              name: '2 of 4 - 4XLS',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10253',
              name: 'When the Unliving Strike',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10255',
              name: 'Cover #10255',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10256',
              name: 'The Enemy Within!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10259',
              name: 'Death Before Dishonor!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10261',
              name: 'Cover #10261',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10262',
              name: 'The End of A.I.M.!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11921',
              name: 'The Red Skull Lives!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11930',
              name: 'He Who Holds the Cosmic Cube',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11936',
              name: 'The Maddening Mystery of the Inconceivable Adaptoid!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11981',
              name: 'If This Be... Modok',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11984',
              name: 'A Time to Die -- A Time to Live!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11995',
              name: 'At the Mercy of the Maggia',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/15243',
              name: 'Look Homeward, Avenger',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17518',
              name: 'Captain America (1968) #132',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17519',
              name: 'The Fearful Secret of Bucky Barnes',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17520',
              name: 'Captain America (1968) #133',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/17521',
              name: 'Madness In the Slums',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28233',
              name: 'In Sin Airy X',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009144/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1010699,
        name: 'Aaron Stack',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010699',
        comics: {
          available: 14,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010699/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40776',
              name: 'Dark Avengers (2012) #177',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40773',
              name: 'Dark Avengers (2012) #179',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40774',
              name: 'Dark Avengers (2012) #180',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40778',
              name: 'Dark Avengers (2012) #181',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40787',
              name: 'Dark Avengers (2012) #182',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40786',
              name: 'Dark Avengers (2012) #183',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38073',
              name: 'Hulk (2008) #43',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11910',
              name: 'Universe X (2000) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11911',
              name: 'Universe X (2000) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11912',
              name: 'Universe X (2000) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11913',
              name: 'Universe X (2000) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11903',
              name: 'Universe X (2000) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11904',
              name: 'Universe X (2000) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/11905',
              name: 'Universe X (2000) #12',
            },
          ],
          returned: 14,
        },
        series: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010699/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/789',
              name: 'Dark Avengers (2012 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2085',
              name: 'Universe X (2000 - 2001)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 27,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010699/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25634',
              name: 'Universe X (2000) #10',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25635',
              name: 'Interior #25635',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25637',
              name: 'Universe X (2000) #12',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25638',
              name: 'Interior #25638',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25647',
              name: 'Universe X (2000) #6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25648',
              name: 'Interior #25648',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25649',
              name: 'Universe X (2000) #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25650',
              name: 'Interior #25650',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25651',
              name: 'Universe X (2000) #8',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25652',
              name: 'Interior #25652',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25653',
              name: 'Universe X (2000) #9',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25654',
              name: 'Interior #25654',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/67100',
              name: 'Universe X (2000) #11',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/89190',
              name: 'Hulk (2008) #43',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/90002',
              name: 'Interior #90002',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92370',
              name: 'Dark Avengers (2012) #179',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92371',
              name: 'Interior #92371',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92372',
              name: 'Dark Avengers (2012) #180',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92373',
              name: 'Interior #92373',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92376',
              name: 'Dark Avengers (2012) #177',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010699/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/2809/aaron_stack?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1010699/aaron_stack?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1009146,
        name: 'Abomination (Emil Blonsky)',
        description:
          'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
        modified: '2012-03-20T12:32:12-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
        comics: {
          available: 58,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009146/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/88869',
              name: 'Abominations (1996) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/88870',
              name: 'Abominations (1996) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/88871',
              name: 'Abominations (1996) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17547',
              name: 'Avengers (1998) #61',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17548',
              name: 'Avengers (1998) #62',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1098',
              name: 'Avengers Vol. 1: World Trust (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8557',
              name: 'Earth X (1999) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
              name: 'EARTH X TPB [NEW PRINTING] (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20863',
              name: 'Hulk (2008) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2499',
              name: 'Hulk: Destruction (2005) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14424',
              name: 'Hulk (1999) #24',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14425',
              name: 'Hulk (1999) #25',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14428',
              name: 'Hulk (1999) #28',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14450',
              name: 'Hulk (1999) #50',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14451',
              name: 'Hulk (1999) #51',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14453',
              name: 'Hulk (1999) #53',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14454',
              name: 'Hulk (1999) #54',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8948',
              name: 'Incredible Hulk (1962) #137',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8982',
              name: 'Incredible Hulk (1962) #171',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/9005',
              name: 'Incredible Hulk (1962) #194',
            },
          ],
          returned: 20,
        },
        series: {
          available: 28,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009146/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/30582',
              name: 'Abominations (1996 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
              name: 'Avengers Vol. 1: World Trust (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
              name: 'Earth X (1999 - 2000)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
              name: 'EARTH X TPB [NEW PRINTING] (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/465',
              name: 'Hulk (1999 - 2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/924',
              name: 'Hulk: Destruction (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2021',
              name: 'Incredible Hulk (1962 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2983',
              name: 'Incredible Hulk Annual (1976 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22424',
              name: 'Incredible Hulk Epic Collection: The Hulk Must Die (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/212',
              name: 'Incredible Hulk Vol. 4: Abominable (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/244',
              name: 'Incredible Hulk Vol. IV: Abominable (2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/8842',
              name: 'Incredible Hulks (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2572',
              name: 'Iron Man (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/977',
              name: 'Irredeemable Ant-Man (2006 - 2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2423',
              name: 'IRREDEEMABLE ANT-MAN VOL. 1: LOW-LIFE DIGEST (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3722',
              name: 'Killraven (2002 - 2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2437',
              name: 'KILLRAVEN PREMIERE HC (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/32108',
              name: 'Maestro: World War M (2022)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 68,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009146/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4946',
              name: '4 of 4 - 4XLS',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5496',
              name: 'Irredeemable Ant-Man (2006) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12370',
              name: 'Cover #12370',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12372',
              name: 'Whosoever Harms the Hulk..!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18419',
              name: '[none]',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18420',
              name: 'The Stars Mine Enemy',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18488',
              name: 'Incredible Hulk (1962) #171',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18489',
              name: 'Revenge',
              type: '',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18534',
              name: 'Incredible Hulk (1962) #194',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18535',
              name: 'The Day of the Locust!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18536',
              name: 'Incredible Hulk (1962) #195',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18537',
              name: 'Warfare In Wonderland!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18538',
              name: 'Incredible Hulk (1962) #196',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18539',
              name: 'The Abomination Proclamation!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18546',
              name: 'Incredible Hulk (1962) #200',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18547',
              name: 'An Intruder In the Mind!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18776',
              name: 'Cover #18776',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18877',
              name: 'Incredible Hulk (1962) #364',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18878',
              name: 'Countdown Part 4: The Abomination',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18881',
              name: 'Incredible Hulk (1962) #366',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009146/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Abomination?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009146/abomination_emil_blonsky?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1016823,
        name: 'Abomination (Ultimate)',
        description: '',
        modified: '2012-07-10T19:11:52-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1016823',
        comics: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016823/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40638',
              name: 'Hulk (2008) #50',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/15717',
              name: 'Ultimate X-Men (2001) #26',
            },
          ],
          returned: 2,
        },
        series: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016823/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/474',
              name: 'Ultimate X-Men (2001 - 2009)',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016823/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/31883',
              name: 'Free Preview of THE INCREDIBLE HULK #50',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92098',
              name: 'Hulk (2008) #50',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92099',
              name: 'Interior #92099',
              type: 'interiorStory',
            },
          ],
          returned: 3,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016823/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1016823/abomination_ultimate?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1009148,
        name: 'Absorbing Man',
        description: '',
        modified: '2013-10-24T14:32:08-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009148',
        comics: {
          available: 104,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009148/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43507',
              name: 'A+X (2012) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7045',
              name: 'Avengers (1963) #183',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7046',
              name: 'Avengers (1963) #184',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/7142',
              name: 'Avengers (1963) #270',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36481',
              name: 'Avengers Academy (2010) #16',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36480',
              name: 'Avengers Academy (2010) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36479',
              name: 'Avengers Academy (2010) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36484',
              name: 'Avengers Academy (2010) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17776',
              name: 'Avengers Annual (1967) #20',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/63662',
              name: 'Black Bolt (2017) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/64278',
              name: 'Black Bolt (2017) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/66533',
              name: 'Black Bolt (2017) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/65327',
              name: 'Black Bolt Vol. 1: Hard Time (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12783',
              name: 'Captain America (1998) #24',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20427',
              name: 'Dazzler (1981) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20428',
              name: 'Dazzler (1981) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8499',
              name: 'Deadpool (1997) #43',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/15541',
              name: 'Fantastic Four (1998) #22',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13151',
              name: 'Fantastic Four (1961) #330',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/41433',
              name: 'Fear Itself (2010) #2 (3rd Printing Variant)',
            },
          ],
          returned: 20,
        },
        series: {
          available: 53,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009148/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
              name: 'A+X (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
              name: 'Avengers Academy (2010 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
              name: 'Avengers Annual (1967 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23121',
              name: 'Black Bolt (2017 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23778',
              name: 'Black Bolt Vol. 1: Hard Time (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1997',
              name: 'Captain America (1998 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3745',
              name: 'Dazzler (1981 - 1986)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
              name: 'Deadpool (1997 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
              name: 'Fantastic Four (1961 - 1998)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/421',
              name: 'Fantastic Four (1998 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13691',
              name: 'Fear Itself (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13857',
              name: 'Fear Itself: Fellowship of Fear (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13827',
              name: 'Fear Itself: The Worthy (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/31372',
              name: 'Gamma Flight (2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20084',
              name: 'Heroes for Hire (1997 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/465',
              name: 'Hulk (1999 - 2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20552',
              name: 'Illuminati (2015 - 2016)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24278',
              name: 'Immortal Hulk (2018 - 2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24891',
              name: 'Immortal Hulk Vol. 2: The Green Door (2019)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 116,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009148/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4988',
              name: '1 of 1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7866',
              name: 'Punisher War Journal (2006) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10997',
              name: 'Journey Into Mystery (1952) #114',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/10998',
              name: 'The Stronger I Am, the Sooner I Die',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11000',
              name: 'Journey Into Mystery (1952) #115',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11001',
              name: 'The Vengeance of the Thunder God',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11022',
              name: 'Journey Into Mystery (1952) #120',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11023',
              name: 'With My Hammer In Hand',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11025',
              name: 'Journey Into Mystery (1952) #121',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11026',
              name: 'The Power!  The Passion!  The Pride!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11028',
              name: 'Journey Into Mystery (1952) #122',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11029',
              name: 'Where Mortals Fear To Tread!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11031',
              name: 'Journey Into Mystery (1952) #123',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/11032',
              name: 'While a Universe Trembles',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12951',
              name: 'Fantastic Four (1961) #330',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12952',
              name: 'Good Dreams!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13957',
              name: '"...With Foes Like These...!"',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14628',
              name: 'Avengers (1963) #183',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14630',
              name: 'Avengers (1963) #184',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/14823',
              name: 'Avengers (1963) #270',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009148/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
              name: 'Acts of Vengeance!',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
              name: 'Civil War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
              name: 'Secret Wars',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
              name: 'Siege',
            },
          ],
          returned: 5,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/84/absorbing_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Absorbing_Man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009148/absorbing_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1009149,
        name: 'Abyss',
        description: '',
        modified: '2014-04-29T14:10:43-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
        comics: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009149/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13943',
              name: 'Uncanny X-Men (1981) #402',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13945',
              name: 'Uncanny X-Men (1981) #404',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13946',
              name: 'Uncanny X-Men (1981) #405',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13947',
              name: 'Uncanny X-Men (1981) #406',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13970',
              name: 'Uncanny X-Men (1981) #429',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13972',
              name: 'Uncanny X-Men (1981) #431',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12386',
              name: 'X-Men: Alpha (1995) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2539',
              name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)',
            },
          ],
          returned: 8,
        },
        series: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009149/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
              name: 'Uncanny X-Men (1981 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2104',
              name: 'X-Men: Alpha (1995)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1583',
              name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009149/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/26281',
              name: 'A Beginning',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28352',
              name: 'Utility of Myth',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28356',
              name: 'Army Ants',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28358',
              name: 'Ballroom Blitzkrieg',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28360',
              name: 'Staring Contests are for Suckers',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28407',
              name: 'The Draco Part One: Sins of the Father',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28411',
              name: 'The Draco Part Three',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28413',
              name: 'The Draco Part Four',
              type: 'interiorStory',
            },
          ],
          returned: 8,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009149/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
              name: 'Age of Apocalypse',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Abyss_(alien)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1010903,
        name: 'Abyss (Age of Apocalypse)',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010903',
        comics: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010903/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/18099',
              name: 'Weapon X (1995) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12386',
              name: 'X-Men: Alpha (1995) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2539',
              name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)',
            },
          ],
          returned: 3,
        },
        series: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010903/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3635',
              name: 'Weapon X (1995)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2104',
              name: 'X-Men: Alpha (1995)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1583',
              name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010903/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/26280',
              name: 'X-Men: Alpha (1994) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/38448',
              name: 'X-Facts',
              type: '',
            },
          ],
          returned: 2,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010903/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
              name: 'Age of Apocalypse',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Abyss_(Age_of_Apocalypse)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1010903/abyss_age_of_apocalypse?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1011266,
        name: 'Adam Destine',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011266',
        comics: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011266/comics',
          items: [],
          returned: 0,
        },
        series: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011266/series',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011266/stories',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011266/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/2902/adam_destine?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Destine,_Adam?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011266/adam_destine?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1010354,
        name: 'Adam Warlock',
        description:
          'Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.',
        modified: '2013-08-07T13:49:06-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010354',
        comics: {
          available: 202,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010354/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/105140',
              name: 'Adam Warlock Omnibus (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/105920',
              name: 'Adam Warlock: Strange Tales Facsimile Edition (2023) #178',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/62151',
              name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17271',
              name: 'Annihilation: Conquest (2007) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17405',
              name: 'Annihilation: Conquest (2007) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17645',
              name: 'Annihilation: Conquest (2007) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20686',
              name: 'Annihilation: Conquest (2007) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20885',
              name: 'Annihilation: Conquest (2007) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21016',
              name: 'Annihilation: Conquest (2007) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12412',
              name: 'Avengers Forever (1998) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1033',
              name: 'Avengers Legends Vol. I: Avengers Forever (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20731',
              name: 'CLANDESTINE CLASSIC PREMIERE HC (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20187',
              name: 'Doctor Strange, Sorcerer Supreme (1988) #27',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20193',
              name: 'Doctor Strange, Sorcerer Supreme (1988) #32',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/20197',
              name: 'Doctor Strange, Sorcerer Supreme (1988) #36',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8552',
              name: 'Earth X (1999) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8550',
              name: 'Earth X (1999) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
              name: 'EARTH X TPB [NEW PRINTING] (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12975',
              name: 'Fantastic Four (1961) #172',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13195',
              name: 'Fantastic Four (1961) #370',
            },
          ],
          returned: 20,
        },
        series: {
          available: 89,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010354/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/36369',
              name: 'Adam Warlock Omnibus (2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/36621',
              name: 'Adam Warlock: Strange Tales Facsimile Edition (2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23058',
              name: 'All-New Guardians of the Galaxy (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22778',
              name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3061',
              name: 'Annihilation: Conquest (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2111',
              name: 'Avengers Forever (1998 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/93',
              name: 'Avengers Legends Vol. I: Avengers Forever (2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3874',
              name: 'CLANDESTINE CLASSIC PREMIERE HC (2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
              name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
              name: 'Earth X (1999 - 2000)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
              name: 'EARTH X TPB [NEW PRINTING] (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
              name: 'Fantastic Four (1961 - 1998)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27554',
              name: 'Guardians Of The Galaxy Annual (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/26496',
              name: 'Guardians Of The Galaxy Vol. 2: Faithless (2020)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22422',
              name: 'GUARDIANS OF THE GALAXY: ROAD TO ANNIHILATION VOL. 2 TPB (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/37451',
              name: "Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023)",
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2021',
              name: 'Incredible Hulk (1962 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2983',
              name: 'Incredible Hulk Annual (1976 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/26307',
              name: 'Infinity By Starlin & Hickman (2019)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 231,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010354/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1412',
              name: 'Cover #1412',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1602',
              name: 'Cover #1602',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1800',
              name: 'Cover #1800',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1842',
              name: 'Cover #1842',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3758',
              name: 'WARLOCK (2004) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3760',
              name: 'WARLOCK (2004) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3762',
              name: 'WARLOCK (2004) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3764',
              name: 'WARLOCK (2004) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12568',
              name: 'Fantastic Four (1961) #172',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12569',
              name: 'Cry, the Bedeviled Planet!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13121',
              name: 'Forever Evil',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18500',
              name: 'Incredible Hulk (1962) #177',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18501',
              name: 'Peril of the Paired Planets',
              type: '',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18503',
              name: 'Triumph On Terra-Two',
              type: '',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19847',
              name: 'Cover #19847',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19848',
              name: 'Performance',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19859',
              name: 'Days of Future Present Part 4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19860',
              name: 'You Must Remember This',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19883',
              name: 'The Adventures of Lockheed the Space Dragon and His Pet Girl, Kitty',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19884',
              name: 'The Saga of Storm: Goddess of Thunder',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010354/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
              name: 'Annihilation: Conquest',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
              name: 'Atlantis Attacks',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/235',
              name: 'Blood and Thunder',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
              name: 'Days of Future Present',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
              name: 'Infinity War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
              name: 'Mutant Massacre',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
              name: 'Secret Wars II',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/280',
              name: 'X-Tinction Agenda',
            },
          ],
          returned: 8,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/2854/adam_warlock?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Warlock,_Adam?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1010846,
        name: 'Aegis (Trey Rollins)',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d',
          extension: 'gif',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010846',
        comics: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010846/comics',
          items: [],
          returned: 0,
        },
        series: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010846/series',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010846/stories',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010846/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/95/aegis?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Aegis_%28Trey_Rollins%29?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1010846/aegis_trey_rollins?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1017851,
        name: 'Aero (Aero)',
        description: '',
        modified: '2021-08-27T17:52:34-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017851',
        comics: {
          available: 29,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017851/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76349',
              name: 'Aero (2019) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76350',
              name: 'Aero (2019) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76351',
              name: 'Aero (2019) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76352',
              name: 'Aero (2019) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76353',
              name: 'Aero (2019) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76354',
              name: 'Aero (2019) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76355',
              name: 'Aero (2019) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76356',
              name: 'Aero (2019) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76357',
              name: 'Aero (2019) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76358',
              name: 'Aero (2019) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76359',
              name: 'Aero (2019) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76360',
              name: 'Aero (2019) #12',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/77001',
              name: 'Agents of Atlas (2019) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/77003',
              name: 'Agents of Atlas (2019) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/77005',
              name: 'Agents of Atlas (2019) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/83989',
              name: 'Atlantis Attacks (2020) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/83993',
              name: 'Atlantis Attacks (2020) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/83994',
              name: 'Atlantis Attacks (2020) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/83995',
              name: 'Atlantis Attacks (2020) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/83996',
              name: 'Atlantis Attacks (2020) #5',
            },
          ],
          returned: 20,
        },
        series: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017851/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27392',
              name: 'Aero (2019 - 2020)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27624',
              name: 'Agents of Atlas (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/29600',
              name: 'Atlantis Attacks (2020)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/31376',
              name: 'King In Black: Black Knight (2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/28381',
              name: 'The Marvels (2021 - 2022)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 29,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017851/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169570',
              name: 'cover from Aero (2019) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169572',
              name: 'cover from Aero (2019) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169574',
              name: 'cover from Aero (2019) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169576',
              name: 'cover from Aero (2019) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169578',
              name: 'cover from Aero (2019) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169580',
              name: 'cover from Aero (2019) #6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169582',
              name: 'cover from Aero (2019) #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169584',
              name: 'cover from Aero (2019) #8',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169586',
              name: 'cover from Aero (2019) #9',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169588',
              name: 'cover from Aero (2019) #10',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169590',
              name: 'cover from Aero (2019) #11',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/169592',
              name: 'cover from Aero (2019) #12',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/170874',
              name: 'cover from New Agents of Atlas (2019) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/170878',
              name: 'cover from New Agents of Atlas (2019) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/170882',
              name: 'cover from New Agents of Atlas (2019) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/178282',
              name: 'cover from The Marvels (2029) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/178288',
              name: 'cover from The Marvels (2029) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/178290',
              name: 'cover from The Marvels (2029) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/178294',
              name: 'cover from The Marvels (2029) #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/178296',
              name: 'cover from The Marvels (2029) #8',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017851/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/characters/1017851/aero_aero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1017851/aero_aero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1012717,
        name: 'Agatha Harkness',
        description: '',
        modified: '2021-08-06T11:30:56-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4ce5a9bf70e19',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012717',
        comics: {
          available: 24,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1012717/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17751',
              name: 'Avengers (1996) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17756',
              name: 'Avengers (1996) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17757',
              name: 'Avengers (1996) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17758',
              name: 'Avengers (1996) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17762',
              name: 'Avengers (1996) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/110269',
              name: 'Avengers Annual (2023) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21358',
              name: 'Avengers Fairy Tales (2008) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/77235',
              name: 'Captain America (2018) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/95785',
              name: 'Captain Marvel (2019) #39',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/95788',
              name: 'Captain Marvel (2019) #42',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/13304',
              name: 'Fantastic Four (1961) #94',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/101173',
              name: 'Midnight Suns (2022) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/54974',
              name: 'Scarlet Witch (1994) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/57094',
              name: 'Scarlet Witch (2015) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/54977',
              name: 'Scarlet Witch (1994) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/54978',
              name: 'Scarlet Witch (1994) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/60028',
              name: 'Scarlet Witch (2015) #13',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/110287',
              name: 'Spider-Man Annual (2023) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/114846',
              name: 'Strange Academy: Blood Hunt (2024) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21182',
              name: 'Ultimate Fantastic Four (2003) #54',
            },
          ],
          returned: 20,
        },
        series: {
          available: 13,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1012717/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
              name: 'Avengers (1996 - 1997)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/38734',
              name: 'Avengers Annual (2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3971',
              name: 'Avengers Fairy Tales (2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24503',
              name: 'Captain America (2018 - 2022)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/26673',
              name: 'Captain Marvel (2019 - 2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
              name: 'Fantastic Four (1961 - 1998)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/34645',
              name: 'Midnight Suns (2022 - 2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20338',
              name: 'Scarlet Witch (1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20854',
              name: 'Scarlet Witch (2015 - 2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/37695',
              name: 'Spider-Man Annual (2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/39279',
              name: 'Strange Academy: Blood Hunt (2024 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/702',
              name: 'Ultimate Fantastic Four (2003 - 2009)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3655',
              name: 'Vision and the Scarlet Witch (1985 - 1986)',
            },
          ],
          returned: 13,
        },
        stories: {
          available: 29,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1012717/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13503',
              name: 'The Return of the Frightful Four',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37673',
              name: 'Avengers (1996) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37688',
              name: 'Avengers (1996) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37690',
              name: 'Avengers (1996) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37693',
              name: 'Avengers (1996) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37701',
              name: 'Avengers (1996) #8',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39320',
              name: 'VISION AND THE SCARLET WITCH (1985) #12',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39325',
              name: 'Ancestors',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/46790',
              name: 'Ultimate Fantastic Four (2003) #54',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/46791',
              name: 'Namor War 1 of 4',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47112',
              name: 'Ultimate Fantastic Four (2003) #55',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47113',
              name: 'Namor War 2 of 4',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47169',
              name: 'Avengers Fairy Tales (2008) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47170',
              name: 'The Wizard of Oz',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47425',
              name: 'Ultimate Fantastic Four (2003) #56',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47426',
              name: '3 of 4 - Salem Seven',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125005',
              name: 'cover from Scarlet Witch (2016) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/130587',
              name: 'cover from Scarlet Witch (2015) #13',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/135317',
              name: 'interior to Scarlet Witch (1994) #1',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/135321',
              name: 'interior to Scarlet Witch (1994) #3',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1012717/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/characters/1012717/agatha_harkness?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Agatha%20Harkness?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1012717/agatha_harkness?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1011297,
        name: 'Agent Brand',
        description: '',
        modified: '2013-10-24T13:09:30-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
        comics: {
          available: 35,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011297/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/6120',
              name: 'Astonishing X-Men (2004) #21',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/6309',
              name: 'Astonishing X-Men (2004) #22',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/16119',
              name: 'Astonishing X-Men (2004) #23',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17353',
              name: 'Astonishing X-Men (2004) #24',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24503',
              name: 'Astonishing X-Men (2004) #32',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24504',
              name: 'Astonishing X-Men (2004) #33',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38318',
              name: 'Astonishing X-Men (2004) #38',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38319',
              name: 'Astonishing X-Men (2004) #40',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40024',
              name: 'Astonishing X-Men (2004) #40 (I Am Captain America Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/45950',
              name: 'Cable and X-Force (2012) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/112856',
              name: 'Dead X-Men (2024) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/39890',
              name: 'Heralds (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/90340',
              name: 'S.W.O.R.D. (2020) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/90341',
              name: 'S.W.O.R.D. (2020) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/26232',
              name: 'S.W.O.R.D. (2009) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/90342',
              name: 'S.W.O.R.D. (2020) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/26233',
              name: 'S.W.O.R.D. (2009) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/90343',
              name: 'S.W.O.R.D. (2020) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/26234',
              name: 'S.W.O.R.D. (2009) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30518',
              name: 'S.W.O.R.D. (2009) #5',
            },
          ],
          returned: 20,
        },
        series: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011297/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
              name: 'Astonishing X-Men (2004 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16907',
              name: 'Cable and X-Force (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/38790',
              name: 'Dead X-Men (2024 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13065',
              name: 'Heralds (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/31083',
              name: 'S.W.O.R.D. (2020 - 2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/8233',
              name: 'S.W.O.R.D. (2009 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22551',
              name: 'The Mighty Captain Marvel (2017 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/17635',
              name: 'X-Men (2013 - 2015)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/32962',
              name: 'X-Men Red (2022 - Present)',
            },
          ],
          returned: 9,
        },
        stories: {
          available: 39,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011297/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3353',
              name: 'Interior #3353',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7670',
              name: 'ASTONISHING X-MEN (2004) #21',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8144',
              name: 'ASTONISHING X-MEN (2004) #22',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/32919',
              name: 'ASTONISHING X-MEN (2004) #23',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/36374',
              name: 'ASTONISHING X-MEN (2004) #24',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54039',
              name: 'ASTONISHING X-MEN (2004) #32',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54041',
              name: 'ASTONISHING X-MEN (2004) #33',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/57763',
              name: 'S.W.O.R.D. (2009) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/57765',
              name: 'S.W.O.R.D. (2009) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/57767',
              name: 'S.W.O.R.D. (2009) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/69862',
              name: 'S.W.O.R.D. (2009) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/89830',
              name: 'ASTONISHING X-MEN (2004) #38',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/89900',
              name: 'Astonishing X-Men (2004) #38',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/90548',
              name: 'Heralds TPB',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/90819',
              name: 'Interior #90819',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/90853',
              name: ' Interior  Astonishing X-Men (2004) #40',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/90944',
              name: 'ASTONISHING X-MEN (2004) #40',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/103418',
              name: 'Cable and X-Force (2012) #8',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/103419',
              name: 'story from Cable and X-Force (2012) #8',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/109479',
              name: 'cover from X-Men (2013) #19',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011297/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/100/agent_brand?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Agent_Brand?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011297/agent_brand?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1011031,
        name: 'Agent X (Nijo)',
        description:
          "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011031',
        comics: {
          available: 18,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011031/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17702',
              name: 'Agent X (2002) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17709',
              name: 'Agent X (2002) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17710',
              name: 'Agent X (2002) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17711',
              name: 'Agent X (2002) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17712',
              name: 'Agent X (2002) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17713',
              name: 'Agent X (2002) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17714',
              name: 'Agent X (2002) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17715',
              name: 'Agent X (2002) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17716',
              name: 'Agent X (2002) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17703',
              name: 'Agent X (2002) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17704',
              name: 'Agent X (2002) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17705',
              name: 'Agent X (2002) #12',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17706',
              name: 'Agent X (2002) #13',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17707',
              name: 'Agent X (2002) #14',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/394',
              name: 'Agent X (2002) #15',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1649',
              name: 'Cable & Deadpool (2004) #12',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21845',
              name: 'Cable & Deadpool (2004) #46 (Zombie Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5761',
              name: 'Cable & Deadpool Vol. 2: The Burnt Offering (Trade Paperback)',
            },
          ],
          returned: 18,
        },
        series: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011031/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/459',
              name: 'Agent X (2002 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/693',
              name: 'Cable & Deadpool (2004 - 2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1338',
              name: 'Cable & Deadpool Vol. 2: The Burnt Offering (2007)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 23,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011031/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1135',
              name: 'AGENT X (2002) #15',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2484',
              name: 'CABLE & DEADPOOL (2004) #12',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37514',
              name: 'AGENT X (2002) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37515',
              name: "Dead Man's Switch Part One",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37516',
              name: 'AGENT X (2002) #10',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37518',
              name: 'AGENT X (2002) #11',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37521',
              name: 'AGENT X (2002) #13',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37523',
              name: 'AGENT X (2002) #14',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37525',
              name: 'AGENT X (2002) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37526',
              name: "Dead Man's Switch Part Two",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37527',
              name: 'AGENT X (2002) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37528',
              name: "Dead Man's Switch Part Three",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37529',
              name: 'AGENT X (2002) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37530',
              name: "Dead Man's Switch Part Four",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37531',
              name: 'AGENT X (2002) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37532',
              name: "Dead Man's Switch Part Five",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37533',
              name: 'AGENT X (2002) #6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37534',
              name: "Dead Man's Switch Part Six",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37535',
              name: 'AGENT X (2002) #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/67703',
              name: 'AGENT X (2002) #12',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011031/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/101/agent_x?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Agent_X_(Nijo)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011031/agent_x_nijo?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1009150,
        name: 'Agent Zero',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009150',
        comics: {
          available: 29,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009150/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/100853',
              name: 'Life of Wolverine Infinity Comic (2022) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/18082',
              name: 'Weapon X (2002) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/18092',
              name: 'Weapon X (2002) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/18074',
              name: 'Weapon X (2002) #12',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/246',
              name: 'Weapon X (2002) #13',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2204',
              name: 'Weapon X: Days of Future Now (2005) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2324',
              name: 'Weapon X: Days of Future Now (2005) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2438',
              name: 'Weapon X: Days of Future Now (2005) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/2439',
              name: 'Weapon X: Days of Future Now (2005) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/3016',
              name: 'Weapon X: Days of Future Now (2005) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/3357',
              name: 'Weapon X: Days of Future Now (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/18408',
              name: 'Weapon X: The Draft – Agent Zero (2002) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14182',
              name: 'Wolverine (1988) #60',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14183',
              name: 'Wolverine (1988) #61',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14184',
              name: 'Wolverine (1988) #62',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14185',
              name: 'Wolverine (1988) #63',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14186',
              name: 'Wolverine (1988) #64',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14189',
              name: 'Wolverine (1988) #67',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14190',
              name: 'Wolverine (1988) #68',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/14211',
              name: 'Wolverine (1988) #87',
            },
          ],
          returned: 20,
        },
        series: {
          available: 10,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009150/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/34445',
              name: 'Life of Wolverine Infinity Comic (2022)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/543',
              name: 'Weapon X (2002 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1478',
              name: 'Weapon X: Days of Future Now (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/869',
              name: 'Weapon X: Days of Future Now (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3649',
              name: 'Weapon X: The Draft – Agent Zero (2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2262',
              name: 'Wolverine (1988 - 2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/84',
              name: 'WOLVERINE/DEADPOOL: WEAPON X TPB (1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3643',
              name: 'X-Man (1995 - 2000)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2265',
              name: 'X-Men (1991 - 2001)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3637',
              name: 'X-Men Unlimited (1993 - 2003)',
            },
          ],
          returned: 10,
        },
        stories: {
          available: 31,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009150/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1131',
              name: 'WEAPON X (2002) #13',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4603',
              name: '1 of 5 - 5XLS',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4605',
              name: '2 of 5 - 5XLS',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4606',
              name: '3 of 5 - 5XLS',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4608',
              name: '4 of 5 - 5XLS',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4610',
              name: '5 of 5 - 5XLS',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28706',
              name: 'The Hunted Part 2',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28712',
              name: 'The Hunted Part 5',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28738',
              name: 'The Logan Files Epilogue',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28881',
              name: 'Counting Coup',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28883',
              name: 'Nightmare Quest!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28885',
              name: 'Reunion!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28887',
              name: 'Bastions of Glory!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28889',
              name: 'What Goes Around...',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28895',
              name: "Valley O' Death",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28897',
              name: 'Epsilon Red',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28941',
              name: 'Showdown In Lowtown',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29125',
              name: 'Last Stand',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29139',
              name: 'Over...Again',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/38511',
              name: 'Second Contact',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009150/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/102/agent_zero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Agent_Zero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009150/agent_zero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1011198,
        name: 'Agents of Atlas',
        description: '',
        modified: '2016-02-03T10:25:22-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011198',
        comics: {
          available: 45,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011198/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/23659',
              name: 'Agents of Atlas (2009) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/4801',
              name: 'Agents of Atlas (2006) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/77001',
              name: 'Agents of Atlas (2019) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/23660',
              name: 'Agents of Atlas (2009) #1 (50/50 COVER)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5089',
              name: 'Agents of Atlas (2006) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/23825',
              name: 'Agents of Atlas (2009) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/27402',
              name: 'Agents of Atlas (2009) #2 (BACHALO 2ND PRINTING VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/23824',
              name: 'Agents of Atlas (2009) #2 (MCGUINNESS VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5241',
              name: 'Agents of Atlas (2006) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24015',
              name: 'Agents of Atlas (2009) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24016',
              name: 'Agents of Atlas (2009) #3 (MCGUINNESS VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24017',
              name: 'Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5404',
              name: 'Agents of Atlas (2006) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24219',
              name: 'Agents of Atlas (2009) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24221',
              name: 'Agents of Atlas (2009) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5665',
              name: 'Agents of Atlas (2006) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24222',
              name: 'Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24360',
              name: 'Agents of Atlas (2009) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5842',
              name: 'Agents of Atlas (2006) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24361',
              name: 'Agents of Atlas (2009) #7',
            },
          ],
          returned: 20,
        },
        series: {
          available: 13,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011198/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1097',
              name: 'Agents of Atlas (2006 - 2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6807',
              name: 'Agents of Atlas (2009)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27624',
              name: 'Agents of Atlas (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1980',
              name: 'AGENTS OF ATLAS PREMIERE HC (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24134',
              name: 'Agents of Atlas: The Complete Collection Vol. 1 (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/29600',
              name: 'Atlantis Attacks (2020)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9782',
              name: 'Atlas (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9181',
              name: 'Avengers Vs. Atlas (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6415',
              name: 'Dark Reign: New Nation (2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27620',
              name: 'Incoming! (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27505',
              name: 'War of the Realms: New Agents of Atlas (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27374',
              name: 'War Of The Realms: New Agents Of Atlas (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22365',
              name: 'Wolverine: Prehistory (2017)',
            },
          ],
          returned: 13,
        },
        stories: {
          available: 52,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011198/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6008',
              name: '1 of 6 - 6 XLS-',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6009',
              name: '1 of 6 - 6 XLS-',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6010',
              name: '2 of 6 - 6 XLS -',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6011',
              name: '2 of 6 - 6 XLS -',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6012',
              name: '3 of 6 - 6 XLS -',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6013',
              name: '3 of 6 - 6 XLS -',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6014',
              name: '4 of 6 - 6 XLS -',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6015',
              name: '4 of 6 - 6 XLS -',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6016',
              name: '5 of 6 - 6 XLS -',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6017',
              name: '5 of 6 - 6 XLS -',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6018',
              name: '5 of 6 - Story A - 6XLS',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/6019',
              name: '5 of 6 - Story A - 6XLS',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/51050',
              name: '1 of 1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/52393',
              name: '1 of 3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/52395',
              name: '1 of 3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/52861',
              name: '2 of 3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/52863',
              name: '2 of 3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/53263',
              name: '3 of 3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/53265',
              name: '3 of 3',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/53266',
              name: '3 of 3',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011198/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
              name: 'Dark Reign',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/characters/1011198/agents_of_atlas?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Agents_of_Atlas?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011198/agents_of_atlas?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1011175,
        name: 'Aginar',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011175',
        comics: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011175/comics',
          items: [],
          returned: 0,
        },
        series: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011175/series',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011175/stories',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011175/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/105/aginar?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Aginar?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011175/aginar?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
      {
        id: 1011136,
        name: 'Air-Walker (Gabriel Lan)',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011136',
        comics: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011136/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/4108',
              name: 'Annihilation: Silver Surfer (2006) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/5589',
              name: 'Heroes Reborn: Iron Man (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/16330',
              name: 'Iron Man (1996) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/16331',
              name: 'Iron Man (1996) #12',
            },
          ],
          returned: 4,
        },
        series: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011136/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1078',
              name: 'Annihilation: Silver Surfer (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1814',
              name: 'Heroes Reborn: Iron Man (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13577',
              name: 'Iron Man (1996 - 1998)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011136/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5925',
              name: 'Annihilation: Silver Surfer (2006) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/34082',
              name: 'Magical Mystery Tour',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/34085',
              name: 'Matters of the Heart',
              type: 'interiorStory',
            },
          ],
          returned: 3,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011136/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/229',
              name: 'Annihilation',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/109/air-walker?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Air-Walker_(Gabriel_Lan)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011136/air-walker_gabriel_lan?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
    ],
  },
}

export const FAKE_DETAIL_RESPONSE = {
  code: 200,
  status: 'Ok',
  copyright: '© 2024 MARVEL',
  attributionText: 'Data provided by Marvel. © 2024 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: '5468f3c771e1c5947bd1691d809047c80d1110e3',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 1009173,
        name: 'Battering Ram',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708',
          extension: 'gif',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009173',
        comics: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009173/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17961',
              name: 'X-Force (1991) #116',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1028',
              name: 'X-Force: Famous, Mutant & Mortal (Trade Paperback)',
            },
          ],
          returned: 2,
        },
        series: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009173/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3633',
              name: 'X-Force (1991 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/88',
              name: 'X-Force: Famous, Mutant & Mortal (2003)',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009173/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/38198',
              name: 'Cover #38198',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/38199',
              name: 'Exit Wounds',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009173/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/2685/battering_ram?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Battering_Ram?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009173/battering_ram?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
      },
    ],
  },
}

export const FAKE_COMIC_LIST_RESPONSE = {
  code: 200,
  status: 'Ok',
  copyright: '© 2024 MARVEL',
  attributionText: 'Data provided by Marvel. © 2024 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: '7ed4fb0c528545cc628e90cb78045f92994c99cf',
  data: {
    offset: 0,
    limit: 20,
    total: 21,
    count: 20,
    results: [
      {
        id: 57327,
        digitalId: 40695,
        title: 'Web Warriors (2015) #2',
        issueNumber: 2,
        variantDescription: '',
        description:
          "SPIDER-GWEN STRANDED! Without her interdimensional timepiece to get her home, Gwen Stacy (AKA Spider-Woman) has no choice but to sit tight and wait to be rescued by the rest of the Web Warriors. Everyone's favorite hoodie-wearing hero isn't exactly a damsel in distress, though, is she?",
        modified: '2015-12-14T20:52:22-0500',
        isbn: '',
        upc: '759606083641000211',
        diamondCode: 'OCT150873',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: '• SPIDER-GWEN STRANDED! Without her interdimensional timepiece to get her home, Gwen Stacy (AKA Spider-Woman) has no choice but to sit tight and wait to be rescued by the rest of the Web Warriors.\n• Everyone’s favorite hoodie-wearing hero isn’t exactly a damsel in distress, though, is she?',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/57327',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/57327/web_warriors_2015_2?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Web-Warriors-2/digital-comic/40695?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=40695&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/40695?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20900',
          name: 'Web Warriors (2015 - 2016)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2015-12-16T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2015-12-01T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2016-06-20T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2015-12-16T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/50/5654da289d6f8',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/50/5654da289d6f8',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57327/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9799',
              name: 'David Baldeon',
              role: 'artist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12452',
              name: 'Mike Costa',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11488',
              name: 'Julian Totino Tedesco',
              role: 'penciller (cover)',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57327/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009157',
              name: 'Spider-Girl (Anya Corazon)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009609',
              name: 'Spider-Girl (May Parker)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Gwen Stacy)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011347',
              name: 'Spider-Ham (Larval Earth)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57327/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125471',
              name: 'cover from Web Warriors (2015) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125472',
              name: 'story from Web Warriors (2015) #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57327/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 57328,
        digitalId: 40867,
        title: 'Web Warriors (2015) #3',
        issueNumber: 3,
        variantDescription: '',
        description:
          "Electro's amassed an army of alternate-reality evildoers! Fortunately, there's a team of heroes from across the SPIDER-VERSE who are ready to stop 'em! Featuring an ending that's sure to SHOCK you!",
        modified: '2016-01-08T17:21:16-0500',
        isbn: '',
        upc: '759606083641000311',
        diamondCode: 'NOV150830',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Electro's amassed an army of alternate-reality evildoers! Fortunately, there's a team of heroes from across the SPIDER-VERSE who are ready to stop 'em! Featuring an ending that's sure to SHOCK you!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/57328',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/57328/web_warriors_2015_3?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Web-Warriors-3/digital-comic/40867?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=40867&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/40867?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20900',
          name: 'Web Warriors (2015 - 2016)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2016-01-13T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2015-12-14T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2016-07-18T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2016-01-13T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/10/567ac6203833a',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/10/567ac6203833a',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 10,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57328/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9799',
              name: 'David Baldeon',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12452',
              name: 'Mike Costa',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8028',
              name: 'Andrew Crossley',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/426',
              name: 'Jason Keith',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/497',
              name: 'John Livesay',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
              name: 'Victor Olazaba',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4074',
              name: 'Walden Wong',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13221',
              name: 'Julian Totino Tedesco',
              role: 'penciler (cover)',
            },
          ],
          returned: 10,
        },
        characters: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57328/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009157',
              name: 'Spider-Girl (Anya Corazon)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009609',
              name: 'Spider-Girl (May Parker)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Gwen Stacy)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011347',
              name: 'Spider-Ham (Larval Earth)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57328/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125473',
              name: 'cover from Web Warriors (2015) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125474',
              name: 'story from Web Warriors (2015) #3',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57328/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 57329,
        digitalId: 41198,
        title: 'Web Warriors (2015) #4',
        issueNumber: 4,
        variantDescription: '',
        description: '',
        modified: '2016-01-25T09:11:40-0500',
        isbn: '',
        upc: '759606083641000411',
        diamondCode: 'DEC150815',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'The WEB-WARRIORS have to call in backup after the Electros launch an all-out siege on Earth-001! Featuring two titanic guest stars straight out of SPIDER-VERSE!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/57329',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/57329/web_warriors_2015_4?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Web-Warriors-4/digital-comic/41198?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=41198&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20900',
          name: 'Web Warriors (2015 - 2016)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2016-02-17T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2016-02-03T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2016-08-15T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2016-02-16T11:19:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/56af7193cb65f',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/56af7193cb65f',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57329/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9799',
              name: 'David Baldeon',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12452',
              name: 'Mike Costa',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12984',
              name: 'Matt Yackey',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11488',
              name: 'Julian Totino Tedesco',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4074',
              name: 'Walden Wong',
              role: 'inker',
            },
          ],
          returned: 8,
        },
        characters: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57329/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009157',
              name: 'Spider-Girl (Anya Corazon)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009609',
              name: 'Spider-Girl (May Parker)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Gwen Stacy)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011347',
              name: 'Spider-Ham (Larval Earth)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57329/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125475',
              name: 'cover from Web Warriors (2015) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125476',
              name: 'story from Web Warriors (2015) #4',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57329/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 57330,
        digitalId: 41427,
        title: 'Web Warriors (2015) #5',
        issueNumber: 5,
        variantDescription: '',
        description:
          'The epic conclusion of ELECTROVERSE arrives, and every Spider might not survive! The Electros have already invaded Earth-001, how could things get any worse? STEAMPUNK LADY SPIDER AND SPIDER-BEN guest star in an all-out brawl between the Web-Warriors and the Electros!',
        modified: '2016-03-07T17:25:08-0500',
        isbn: '',
        upc: '759606083641000511',
        diamondCode: 'JAN160857',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'The epic conclusion of ELECTROVERSE arrives, and every Spider might not survive! The Electros have already invaded Earth-001, how could things get any worse? STEAMPUNK LADY SPIDER AND SPIDER-BEN guest star in an all-out brawl between the Web-Warriors and the Electros!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/57330',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/57330/web_warriors_2015_5?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Web-Warriors-5/digital-comic/41427?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=41427&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20900',
          name: 'Web Warriors (2015 - 2016)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2016-03-16T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2016-03-02T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2016-09-19T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2016-03-11T09:46:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/56e333fae9431',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/56e333fae9431',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/f0/569670326def3',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57330/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9799',
              name: 'David Baldeon',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12452',
              name: 'Mike Costa',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11488',
              name: 'Julian Totino Tedesco',
              role: 'penciller (cover)',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57330/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009157',
              name: 'Spider-Girl (Anya Corazon)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009609',
              name: 'Spider-Girl (May Parker)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Gwen Stacy)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011347',
              name: 'Spider-Ham (Larval Earth)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57330/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125477',
              name: 'cover from Web Warriors (2015) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125478',
              name: 'story from Web Warriors (2015) #5',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57330/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 57331,
        digitalId: 41690,
        title: 'Web Warriors (2015) #6',
        issueNumber: 6,
        variantDescription: '',
        description:
          "With the threat of the ELECTROVERSE sated (for now), what's an average day in the life of an interdimensional Spider-Man or Spider-Woman really like? Could it involve? MURDER?!",
        modified: '2016-04-08T11:25:34-0400',
        isbn: '',
        upc: '759606083641000611',
        diamondCode: 'FEB160795',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'With the threat of the ELECTROVERSE sated (for now), what’s an average day in the life of an interdimensional Spider-Man or Spider-Woman really like? Could it involve… MURDER?!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/57331',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/57331/web_warriors_2015_6?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Web-Warriors-6/digital-comic/41690?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=41690&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/41690?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20900',
          name: 'Web Warriors (2015 - 2016)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2016-04-13T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2016-03-30T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2016-10-17T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2016-04-13T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/20/56fae57a1d879',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/20/56fae57a1d879',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/56980f1a024ce',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57331/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9799',
              name: 'David Baldeon',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12452',
              name: 'Mike Costa',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11488',
              name: 'Julian Totino Tedesco',
              role: 'penciller (cover)',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57331/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009157',
              name: 'Spider-Girl (Anya Corazon)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009609',
              name: 'Spider-Girl (May Parker)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Gwen Stacy)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011347',
              name: 'Spider-Ham (Larval Earth)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57331/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125479',
              name: 'cover from Web Warriors (2015) #6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125480',
              name: 'story from Web Warriors (2015) #6',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57331/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 57333,
        digitalId: 41839,
        title: 'Web Warriors (2015) #8',
        issueNumber: 8,
        variantDescription: '',
        description:
          "The Web of Life and Destiny is damaged, and even worse - it's getting TANGLED! How are the Web Warriors supposed to repair REALITY ITSELF?! Join us for this insane web-hopping romp that features A GIANT SPIDER-MAN ROBOT FROM THE FURTHEST CORNER OF THE MULTIVERSE AS A GUEST STAR!",
        modified: '2016-06-10T17:44:20-0400',
        isbn: '',
        upc: '759606083641000811',
        diamondCode: 'APR160945',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'The Web of Life and Destiny is damaged, and even worse – it’s getting TANGLED! How are the Web Warriors supposed to repair REALITY ITSELF?! Join us for this insane web-hopping romp that features A GIANT SPIDER-MAN ROBOT FROM THE FURTHEST CORNER OF THE MULTIVERSE AS A GUEST STAR!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/57333',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/57333/web_warriors_2015_8?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Web-Warriors-8/digital-comic/41839?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=41839&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/41839?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20900',
          name: 'Web Warriors (2015 - 2016)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2016-06-22T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2016-06-08T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2016-12-26T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2016-06-22T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/30/575b345f6792e',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/30/575b345f6792e',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57333/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9799',
              name: 'David Baldeon',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12452',
              name: 'Mike Costa',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11488',
              name: 'Julian Totino Tedesco',
              role: 'penciller (cover)',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57333/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009157',
              name: 'Spider-Girl (Anya Corazon)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009609',
              name: 'Spider-Girl (May Parker)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Gwen Stacy)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011347',
              name: 'Spider-Ham (Larval Earth)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57333/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125483',
              name: 'cover from Web Warriors (2015) #8',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125484',
              name: 'story from Web Warriors (2015) #8',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57333/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 71521,
        digitalId: 0,
        title: 'Marvel Universe Ultimate Spider-Man: Spider-Verse (2018) #3',
        issueNumber: 3,
        variantDescription: '',
        description:
          'Introducing Spider-Man Noir! Spidey’s multiverse battle against Green Goblin continues, this time taking him to the dark and moody world of Marvel’s Noir universe!',
        modified: '2018-05-30T16:50:29-0400',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Infinite Comic',
        pageCount: 12,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Introducing Spider-Man Noir! Spidey’s multiverse battle against Green Goblin continues, this time taking him to the dark and moody world of Marvel’s Noir universe!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/71521',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/71521/marvel_universe_ultimate_spider-man_spider-verse_2018_3?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/26066',
          name: 'Marvel Universe Ultimate Spider-Man: Spider-Verse (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-06-05T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5b0f0dfd93686',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5b0f0dfd93686',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/71521/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11401',
              name: 'Various',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/71521/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011435',
              name: 'Green Goblin (Norman Osborn)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/71521/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/159018',
              name: 'cover from Marvel Universe Ultimate Spider-Man: Spider-Verse Infinite Comic (2018) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/159019',
              name: 'story from Marvel Universe Ultimate Spider-Man: Spider-Verse Infinite Comic (2018) #3',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/71521/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 57325,
        digitalId: 40475,
        title: 'Web Warriors (2015) #1',
        issueNumber: 1,
        variantDescription: '',
        description:
          "All of your favorite web-slinging wonders from SPIDER-VERSE, together in one place! It's high-stakes action when ELECTRO threatens all of reality! From their base on Earth-001, it's up to SPIDER-GWEN, SPIDER-MAN NOIR, SPIDER-MAN INDIA, SPIDER-UK, SPIDER-HAM and a TON of other surprise spider-guest stars to stop him!",
        modified: '2018-11-27T10:06:52-0500',
        isbn: '',
        upc: '759606083641000111',
        diamondCode: 'SEP150677',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 40,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'All of your favorite web-slinging wonders from SPIDER-VERSE, together in one place! It’s high-stakes action when ELECTRO threatens all of reality! From their base on Earth-001, it’s up to SPIDER-GWEN, SPIDER-MAN NOIR, SPIDER-MAN INDIA, SPIDER-UK, SPIDER-HAM and a TON of other surprise spider-guest stars to stop him!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/57325',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/57325/web_warriors_2015_1?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Web-Warriors-1/digital-comic/40475?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=40475&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/40475?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20900',
          name: 'Web Warriors (2015 - 2016)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/57326',
            name: 'Web Warriors (2015) #1 (Scott Hip-&#8203;Hop Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2015-11-11T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2015-10-27T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2016-05-16T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2015-11-18T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/03/5640d51845c21',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/03/5640d51845c21',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/40/5626660be8849',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/c0/5626654118528',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/562664dd2c0cd',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/561d64fda18b8',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/561d64d47d00f',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/561d64a96b40e',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/f0/561d647986859',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/03/561d643f15765',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/00/560179a302dcf',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57325/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9799',
              name: 'David Baldeon',
              role: 'artist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12452',
              name: 'Mike Costa',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11488',
              name: 'Julian Totino Tedesco',
              role: 'penciller (cover)',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57325/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009157',
              name: 'Spider-Girl (Anya Corazon)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009609',
              name: 'Spider-Girl (May Parker)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Gwen Stacy)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011347',
              name: 'Spider-Ham (Larval Earth)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57325/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125467',
              name: 'cover from Web Warriors (2015) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/125468',
              name: 'story from Web Warriors (2015) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/57325/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 82517,
        digitalId: 54646,
        title: 'Spider-Man Noir (2020) #2',
        issueNumber: 2,
        variantDescription: '',
        description:
          'DATELINE 1933! After months of fruitless efforts, the Nazis have discovered an ancient evil in one of their dig sites on the other side of the world. After a friend of a friend is murdered, SCRAPPY YOUNG REPORTER and rookie gumshoe PETER PARKER finds himself torn from his borough and thrust into the action! Unsure of who he can trust, our hero quickly finds himself on A GLOBE-TROTTING ADVENTURE, encountering friend and foe alike - some of whom may even bear a passing resemblances to familiar faces from the Marvel Universe!',
        modified: '2020-07-15T14:19:39-0400',
        isbn: '',
        upc: '75960609743200211',
        diamondCode: 'FEB200920',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82517',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/82517/spider-man_noir_2020_2?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Spider-Man-Noir-2/digital-comic/54646?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=54646&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/54646?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/29329',
          name: 'Spider-Man Noir (2020)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/88528',
            name: 'Spider-Man Noir (2020) #2 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-07-29T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2020-03-09T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2020-11-02T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2020-07-29T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/10/5e7e69f3d6044',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/10/5e7e69f3d6044',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82517/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13558',
              name: 'Juan Ferreyra',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12993',
              name: 'Vc Travis Lanham',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12703',
              name: 'Dave Rapoza',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12948',
              name: 'Margaret Stohl',
              role: 'writer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82517/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82517/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182794',
              name: 'cover from Spider-Man Noir (2020) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182795',
              name: 'story from Spider-Man Noir (2020) #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82517/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 82516,
        digitalId: 54319,
        title: 'Spider-Man Noir (2020) #1',
        issueNumber: 1,
        variantDescription: '',
        description:
          'MURDER AND MYSTERY IN THE MIGHTY MARVEL MANNER! DATELINE, 1939! As the specter of war looms on the horizon, SPIDER-MAN: NOIR fights the good fight at home, stopping the injustices of a more friendly-neighborhood variety. But after a dame is murdered at The Black Cat nightclub and all clues point overseas, Spidey will have no choice but to board the next flight to Europe and kick off a globetrotting adventure through yesteryear of the Marvel Universe!',
        modified: '2020-07-21T11:22:25-0400',
        isbn: '',
        upc: '75960609743200111',
        diamondCode: 'JAN200816',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82516',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/82516/spider-man_noir_2020_1?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Spider-Man-Noir-1/digital-comic/54319?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=54319&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/54319?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/29329',
          name: 'Spider-Man Noir (2020)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/85263',
            name: 'Spider-Man Noir (2020) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/85264',
            name: 'Spider-Man Noir (2020) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/85265',
            name: 'Spider-Man Noir (2020) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/89364',
            name: 'Spider-Man Noir (2020) #1 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-03-04T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-02-10T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2020-09-07T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2020-03-04T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/5e53eb0d00e91',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/5e53eb0d00e91',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82516/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13558',
              name: 'Juan Ferreyra',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12993',
              name: 'Vc Travis Lanham',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12703',
              name: 'Dave Rapoza',
              role: 'painter (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12948',
              name: 'Margaret Stohl',
              role: 'writer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82516/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82516/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182792',
              name: 'cover from Spider-Man Noir (2020) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182793',
              name: 'story from Spider-Man Noir (2020) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82516/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 24312,
        digitalId: 27811,
        title: 'SPIDER-MAN NOIR GN-TPB (Trade Paperback)',
        issueNumber: 1,
        variantDescription: '',
        description: '',
        modified: '2020-07-21T14:12:20-0400',
        isbn: '978-0-7851-2923-3',
        upc: '',
        diamondCode: 'JUL090611',
        ean: '9780785 129233 51499',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 112,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'With great power, there must also come great responsibility - and when those in power abuse it, it\'s the people\'s responsibility to remove them. The year is 1933, and New York City is not-so-secretly run by corrupt politicians, crooked cops, big businesses and suave gangland bosses like New York\'s worst, the Goblin. But when a fateful spider-bite gives the young rabble-rouser Peter Parker the power to fight the mobster who killed his Uncle Ben, will even that be enough? It\'s a tangled web of Great Depression pulp, with familiar faces like you\'ve never seen them before! By "Hardboiled" David Hine, Fabrice "The Spider" Sapolsky and Carmine "Carbine" Di Giandomenico! Collecting SPIDER-MAN NOIR # 1-4.',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/24312',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/24312/spider-man_noir_gn-tpb_trade_paperback?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/SPIDER-MAN-NOIR-GN-TPB-1/digital-comic/27811?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=27811&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/27811?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/7511',
          name: 'SPIDER-MAN NOIR GN-TPB (2009)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2011-07-06T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2012-10-11T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2012-10-11T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 14.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 6.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4bb52ab285d43',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4bb52ab285d43',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/24312/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/970',
              name: 'Dennis Calero',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/827',
              name: 'Carmine DI Giandomenico',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/371',
              name: 'David Hine',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8487',
              name: 'Fabrice Sapolsky',
              role: 'writer',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/24312/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/24312/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/53864',
              name: 'Spider-Man Noir 1-4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/53865',
              name: 'Spider-Man Noir 1-4',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/24312/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 41148,
        digitalId: 0,
        title: 'SPIDER-MAN NOIR PREMIERE HC (Hardcover)',
        issueNumber: 1,
        variantDescription: '',
        description:
          'Collects Spider-Man Noir #1-4. It was 1933 and the Great Depression was just getting started. And so was the corrupt mob boss the Goblin. When embittered, angry Peter Parker meets a spider and its life-changing bite, he may have just inherited the force to honor the phrase, "If those in power can\'t be trusted, it\'s the responsibility of the people to remove them."',
        modified: '2020-07-21T14:18:07-0400',
        isbn: '978-0-7851-3944-7',
        upc: '',
        diamondCode: 'MAR092633',
        ean: '9780785 139447 51999',
        issn: '',
        format: 'Hardcover',
        pageCount: 112,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'With great power, there must also come great responsibility - and when those in power abuse it, it\'s the people\'s responsibility to remove them. The year is 1933, and New York City is not-so-secretly run by corrupt politicians, crooked cops, big businesses and suave gangland bosses like New York\'s worst, the Goblin. But when a fateful spider-bite gives the young rabble-rouser Peter Parker the power to fight the mobster who killed his Uncle Ben, will even that be enough? It\'s a tangled web of Great Depression pulp, with familiar faces like you\'ve never seen them before! By "Hardboiled" David Hine, Fabrice "The Spider" Sapolsky and Carmine "Carbine" Di Giandomenico! Collecting SPIDER-MAN NOIR # 1-4.\nRated T+...$19.99',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/41148',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/41148/spider-man_noir_premiere_hc_hardcover?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/15284',
          name: 'SPIDER-MAN NOIR PREMIERE HC (2011)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2009-05-27T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 19.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/e0/5b8ec044d1333',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/e0/5b8ec044d1333',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/41148/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/371',
              name: 'David Hine',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8487',
              name: 'Fabrice Sapolsky',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/41148/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/41148/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/93153',
              name: 'Cover #93153',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/93154',
              name: 'Interior #93154',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/41148/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 82518,
        digitalId: 54923,
        title: 'Spider-Man Noir (2020) #3',
        issueNumber: 3,
        variantDescription: '',
        description:
          'THE ADVENTURE CONTINUES! A murder investigation may have led Spider-Man a thousand miles from home, but DANGER is close behind! And as the specter of war looms in Europe, a dangerous operative shrouded in mystery has designs of his own, with ELECTRO leading the charge!',
        modified: '2020-09-23T09:07:26-0400',
        isbn: '',
        upc: '75960609743200311',
        diamondCode: 'MAR200982',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82518',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/82518/spider-man_noir_2020_3?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Spider-Man-Noir-3/digital-comic/54923?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=54923&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/54923?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/29329',
          name: 'Spider-Man Noir (2020)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/89270',
            name: 'Spider-Man Noir (2020) #3 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-08-26T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2020-08-03T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2020-11-30T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2020-08-26T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/5f3d36a4ed801',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/5f3d36a4ed801',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82518/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13558',
              name: 'Juan Ferreyra',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12993',
              name: 'Vc Travis Lanham',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12703',
              name: 'Dave Rapoza',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12948',
              name: 'Margaret Stohl',
              role: 'writer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82518/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82518/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182796',
              name: 'cover from Spider-Man Noir (2020) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182797',
              name: 'story from Spider-Man Noir (2020) #3',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82518/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 82519,
        digitalId: 55118,
        title: 'Spider-Man Noir (2020) #4',
        issueNumber: 4,
        variantDescription: '',
        description:
          'The drums of war continue to beat SPIDER-MAN NOIR down as he finds himself buried in the deserts of Babylon! Will the sands drown our hero, or will he withstand the hammering and save the day?',
        modified: '2020-10-01T09:05:23-0400',
        isbn: '',
        upc: '75960609743200411',
        diamondCode: 'APR200977',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82519',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/82519/spider-man_noir_2020_4?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Spider-Man-Noir-4/digital-comic/55118?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=55118&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/55118?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/29329',
          name: 'Spider-Man Noir (2020)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/90262',
            name: 'Spider-Man Noir (2020) #4 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-09-23T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2020-08-31T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2020-12-28T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2020-09-23T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/00/5f6510b2c6d52',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/00/5f6510b2c6d52',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82519/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13558',
              name: 'Juan Ferreyra',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12993',
              name: 'Vc Travis Lanham',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13680',
              name: 'Patrick Okeefe',
              role: 'painter (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12703',
              name: 'Dave Rapoza',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12948',
              name: 'Margaret Stohl',
              role: 'writer',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82519/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82519/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182798',
              name: 'cover from Spider-Man Noir (2020) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182799',
              name: 'story from Spider-Man Noir (2020) #4',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82519/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 82520,
        digitalId: 55562,
        title: 'Spider-Man Noir (2020) #5',
        issueNumber: 5,
        variantDescription: '',
        description:
          "ONCE NOIR INTO THE BREACH! Peter Parker has been killed, resurrected and battled his way across the multiverse - but this globetrotting treasure hunt may be what finally does him in! Featuring familiar friendly faces and foes alike, this face-melting fifth issue is one you won't want to miss!",
        modified: '2020-10-27T09:04:10-0400',
        isbn: '',
        upc: '75960609743200511',
        diamondCode: 'AUG200649',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82520',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/82520/spider-man_noir_2020_5?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Spider-Man-Noir-5/digital-comic/55562?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=55562&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/55562?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/29329',
          name: 'Spider-Man Noir (2020)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-10-28T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2020-10-05T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2021-02-01T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2020-10-28T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/03/6019680908ce6',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/03/6019680908ce6',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82520/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13558',
              name: 'Juan Ferreyra',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12993',
              name: 'Vc Travis Lanham',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12703',
              name: 'Dave Rapoza',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12948',
              name: 'Margaret Stohl',
              role: 'writer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82520/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82520/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182800',
              name: 'cover from Spider-Man Noir (2020) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/182801',
              name: 'story from Spider-Man Noir (2020) #5',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82520/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 98592,
        digitalId: 57997,
        title: 'Spider-Verse Unlimited Infinity Comic (2022) #1',
        issueNumber: 1,
        variantDescription: '',
        description: '',
        modified: '2022-03-12T09:21:35-0500',
        isbn: '',
        upc: '75960620273700111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 10,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'What makes Spider-Man SPIDER-MAN? Find out here with an instant-classic tale that kicks off the most amazing Infinity Comic ever!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/98592',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/98592/spider-verse_unlimited_infinity_comic_2022_1?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Spider-Verse-Unlimited-Infinity-Comic-1/digital-comic/57997?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=57997&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/34010',
          name: 'Spider-Verse Unlimited Infinity Comic (2022 - 2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2022-03-16T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2022-02-14T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2022-03-16T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-05-16T13:26:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/622928fda4ec8',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/622928fda4ec8',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/98592/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13012',
              name: 'Bruno Oliveira',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13339',
              name: 'Pete Pantazis',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12851',
              name: 'Anthony Piper',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/98592/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Gwen Stacy)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011347',
              name: 'Spider-Ham (Larval Earth)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1014873',
              name: 'Spider-Man (2099)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1016181',
              name: 'Spider-Man (Miles Morales)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
          ],
          returned: 6,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/98592/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/218253',
              name: 'cover from Spidey & His Amazing Friends Infinity Comic (2022)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/218254',
              name: 'story from Spidey & His Amazing Friends Infinity Comic (2022)',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/98592/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 106146,
        digitalId: 62381,
        title: 'Spider-Verse Unlimited Infinity Comic (2022) #41',
        issueNumber: 41,
        variantDescription: '',
        description: '',
        modified: '2023-03-10T13:44:57-0500',
        isbn: '',
        upc: '75960620273704111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 6,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'In the midst of a massive rally in New York City, Spider-Man Noir teams up with Daredevil Noir to stave off disaster, and then Spider-Man Noir hears...the voice of an old foe.',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/106146',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/106146/spider-verse_unlimited_infinity_comic_2022_41?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=62381&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/34010',
          name: 'Spider-Verse Unlimited Infinity Comic (2022 - 2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-03-14T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2023-02-13T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2023-03-14T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/10/63e517a8919cf',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/10/63e517a8919cf',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106146/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12798',
              name: 'Amy Chu',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10172',
              name: 'Vc Clayton Cowles',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8382',
              name: 'Dio Neves',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11701',
              name: 'Elizabeth Pyle',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106146/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106146/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/233403',
              name: 'cover from Spider-Verse Unlimited Infinity Comic (2022) #41',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/233404',
              name: 'story from Spider-Verse Unlimited Infinity Comic (2022) #41',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106146/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 106147,
        digitalId: 62603,
        title: 'Spider-Verse Unlimited Infinity Comic (2022) #42',
        issueNumber: 42,
        variantDescription: '',
        description: '',
        modified: '2023-03-19T19:19:41-0400',
        isbn: '',
        upc: '75960620273704211',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 6,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Spider-Man Noir recognizes Doctor Otto Octavius as the voice that’s using radio waves to hypnotize all of New York City, and Daredevil Noir "sees" the radio signal is coming from the Empire State Building. How will Spider-Man get there before the whole city is under Doc Ock’s control?',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/106147',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/106147/spider-verse_unlimited_infinity_comic_2022_42?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=62603&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/34010',
          name: 'Spider-Verse Unlimited Infinity Comic (2022 - 2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-03-21T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2023-02-20T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2023-03-21T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/00/63f53eb2a3920',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/00/63f53eb2a3920',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106147/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12798',
              name: 'Amy Chu',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10172',
              name: 'Vc Clayton Cowles',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8382',
              name: 'Dio Neves',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11701',
              name: 'Elizabeth Pyle',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106147/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106147/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/233405',
              name: 'cover from Spider-Verse Unlimited Infinity Comic (2022) #42',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/233406',
              name: 'story from Spider-Verse Unlimited Infinity Comic (2022) #42',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106147/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 106148,
        digitalId: 62605,
        title: 'Spider-Verse Unlimited Infinity Comic (2022) #43',
        issueNumber: 43,
        variantDescription: '',
        description: '',
        modified: '2023-03-26T19:58:36-0400',
        isbn: '',
        upc: '75960620273704311',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 6,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Spider-Man Noir has located the lair of Otto Octavius in the Empire State Building, but this Doc Ock is more powerful and more deranged than before, and now he has followers. What will it take for Spider-Man Noir to stop him and save the minds of his fellow New Yorkers?',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/106148',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/106148/spider-verse_unlimited_infinity_comic_2022_43?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=62605&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/34010',
          name: 'Spider-Verse Unlimited Infinity Comic (2022 - 2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-03-28T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2023-02-27T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2023-03-28T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/10/6409eeaab8b2c',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/10/6409eeaab8b2c',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106148/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12798',
              name: 'Amy Chu',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10172',
              name: 'Vc Clayton Cowles',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8382',
              name: 'Dio Neves',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11701',
              name: 'Elizabeth Pyle',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106148/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106148/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/233407',
              name: 'cover from Spider-Verse Unlimited Infinity Comic (2022) #43',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/233408',
              name: 'story from Spider-Verse Unlimited Infinity Comic (2022) #43',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106148/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 99743,
        digitalId: 60584,
        title: 'Spider-Man (2022) #1',
        issueNumber: 1,
        variantDescription: '',
        description:
          'The End of the Spider-Verse is here! Morlun is back and he is not alone. Allied with one of the most powerful beings known to the Spider-Verse, the scariest Spider-Villain of all time is making his biggest play and no Spider is safe. Especially not the Chosen Spider himself, Peter Parker. With Peter working for Norman Osborn and using a glider…does he have it coming? Spidey’s 60th Anniversary is no joke as two of the most legendary Spider-Creators are working together on Spidey for the first time and you know it’s going to be one for the record books!',
        modified: '2023-08-23T12:50:17-0400',
        isbn: '',
        upc: '75960620327700111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 40,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/99743',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/99743/spider-man_2022_1?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Spider-Man-1/digital-comic/60584?utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=60584&utm_campaign=apiRef&utm_source=4fb52d0ef3fa60ac1f71e3bf046edc41',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/34328',
          name: 'Spider-Man (2022 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/102588',
            name: 'Spider-Man (2022) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/104612',
            name: 'Spider-Man (2022) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/104613',
            name: 'Spider-Man (2022) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/104614',
            name: 'Spider-Man (2022) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/104615',
            name: 'Spider-Man (2022) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/105043',
            name: 'Spider-Man (2022) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/105044',
            name: 'Spider-Man (2022) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/105785',
            name: 'Spider-Man (2022) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/105869',
            name: 'Spider-Man (2022) #1 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2022-10-05T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2022-09-05T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2023-01-09T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2022-07-13T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/10/633cefa06d1f4',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/10/633cefa06d1f4',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/99743/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/87',
              name: 'Mark Bagley',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
              name: 'Edgar Delgado',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/359',
              name: 'John Dell',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/14157',
              name: 'Alejandro Sanchez',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12983',
              name: 'Dan Slott',
              role: 'writer',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/99743/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011088',
              name: 'Morlun',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017815',
              name: 'Silk (Cindy Moon)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Gwen Stacy)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1016181',
              name: 'Spider-Man (Miles Morales)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1012295',
              name: 'Spider-Man (Noir)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009608',
              name: 'Spider-Woman (Jessica Drew)',
            },
          ],
          returned: 7,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/99743/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/220586',
              name: 'cover from Spider-Man (2022) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/220587',
              name: 'story from Spider-Man (2022) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/99743/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
}
