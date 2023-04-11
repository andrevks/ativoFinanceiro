<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://adonisjs.com/">
    <img src="https://camo.githubusercontent.com/076aacc894daf3d9065f7d5bd1d7e8a3d0511668576cd66afddd0ce4af524eaa/68747470733a2f2f692e696d6775722e636f6d2f32774764454a4e2e706e67" alt="Logo" width="450" height="150">
  </a>

  <h2 align="center">Serviço AtivoFinanceiro</h2>

 
</div>


<!-- ABOUT THE PROJECT -->
## Sobre o projeto

Este projeto consiste em desenvolver um micro serviço que trabalhará com outros micro serviços: Ativo Financeiro, Investidor e Carteira. Cada micro serviço tem suas próprias responsabilidades e tecnologias.

O micro serviço Ativo Financeiro é responsável por buscar informações dos ativos financeiros na API do Yahoo Finance. Ele será desenvolvido utilizando NodeJS como tecnologia de backend e Sqlite como banco de dados.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Construido com

* [![Adonisjs][AdonisJS]][Adonijs-url]
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


<!-- GETTING STARTED -->
## Iniciando o Projeto

 ```sh
   npm run dev
   ```
   
   ou 

   ```sh
   yarn dev
   ```

## Pré-requisitos

Antes de executar o aplicativo, certifique-se de ter os seguintes requisitos instalados:

- Node.js (versão 14 ou superior)
- npm ou Yarn
- Docker (opcional)

## Instalação

Siga as etapas abaixo para instalar e executar o aplicativo:

1. Clone o repositório do aplicativo:
   ```sh
   git clone https://github.com/andrevks/ativoFinanceiro
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   
   ou 

   ```sh
   yarn install
   ```

3. Execute o aplicativo:
   ```sh
   npm run dev
   ```
   
   ou 

   ```sh
   yarn dev
   ```

O aplicativo deve estar agora sendo executado em http://localhost:3000.

### Usando o Docker

Se você preferir executar o aplicativo usando o Docker, siga as etapas abaixo:

1. Certifique-se de ter o Docker instalado.

2. Execute o comando abaixo para criar os contêineres do Docker:

   ```sh
   docker-compose up -d 
   ```


3. O aplicativo deve estar agora sendo executado em http://localhost:3000.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Como Usar

### Obter dados de cotação

- Método: GET
- Rota: http://localhost:3333/assets?symbol=BBAS3.SA&from=2023-01-01&to=2023-02-10&type=quote

#### Parâmetros

| Parâmetro | Valor |
|-----------|-------|
| symbol    | BBAS3.SA |
| from      | 2023-01-01 |
| to        | 2023-02-10 |
| period    | d |
| type      | quote |

- period: pode ser "d" (diário), "w" (semanal), "m" (mensal) ou "v" (valor). O valor padrão é "d".

#### Exemplo de retorno para o tipo "quote"

```json

{
  "recommendationTrend": {
    "trend": [
      {
        "period": "0m",
        "strongBuy": 0,
        "buy": 0,
        "hold": 0,
        "sell": 0,
        "strongSell": 0
      },
      {
        "period": "-1m",
        "strongBuy": 2,
        "buy": 11,
        "hold": 4,
        "sell": 1,
        "strongSell": 0
      },
      {
        "period": "-2m",
        "strongBuy": 3,
        "buy": 10,
        "hold": 6,
        "sell": 2,
        "strongSell": 0
      },
      {
        "period": "-3m",
        "strongBuy": 3,
        "buy": 8,
        "hold": 7,
        "sell": 2,
        "strongSell": 0
      }
    ],
    "maxAge": 86400
  },
  "summaryDetail": {
    "maxAge": 1,
    "priceHint": 2,
    "previousClose": 39.04,
    "open": 39.3,
    "dayLow": 39.25,
    "dayHigh": 40.13,
    "regularMarketPreviousClose": 39.04,
    "regularMarketOpen": 39.3,
    "regularMarketDayLow": 39.25,
    "regularMarketDayHigh": 40.13,
    "dividendRate": 1.41,
    "dividendYield": 0.0361,
    "exDividendDate": "2023-03-14T00:00:00.000Z",
    "payoutRatio": 0.2988,
    "fiveYearAvgDividendYield": 3.91,
    "beta": 0.654477,
    "trailingPE": 3.279146,
    "forwardPE": 3.2845395,
    "volume": 13241600,
    "regularMarketVolume": 13241600,
    "averageVolume": 15290718,
    "averageVolume10days": 8815755,
    "averageDailyVolume10Day": 8815755,
    "bid": 39.95,
    "ask": 40,
    "bidSize": 0,
    "askSize": 0,
    "marketCap": 113974378496,
    "fiftyTwoWeekLow": 30.25,
    "fiftyTwoWeekHigh": 44.94,
    "priceToSalesTrailing12Months": 1.1459122,
    "fiftyDayAverage": 39.3764,
    "twoHundredDayAverage": 37.9864,
    "trailingAnnualDividendRate": 4.138,
    "trailingAnnualDividendYield": 0.10599385,
    "currency": "BRL",
    "fromCurrency": null,
    "toCurrency": null,
    "lastMarket": null,
    "coinMarketCapLink": null,
    "algorithm": null,
    "tradeable": false
  },
  "earnings": {
    "maxAge": 86400,
    "earningsChart": {
      "quarterly": [
        {
          "date": "1Q2022",
          "actual": 2.32,
          "estimate": 2
        },
        {
          "date": "2Q2022",
          "actual": 2.73,
          "estimate": 2.23
        },
        {
          "date": "3Q2022",
          "actual": 2.93,
          "estimate": 2.64
        },
        {
          "date": "4Q2022",
          "actual": 3.17,
          "estimate": 2.82
        }
      ],
      "currentQuarterEstimate": 2.84,
      "currentQuarterEstimateDate": "1Q",
      "currentQuarterEstimateYear": 2023,
      "earningsDate": [
        1684177200
      ]
    },
    "financialsChart": {
      "yearly": [
        {
          "date": 2019,
          "revenue": 61745862000,
          "earnings": 18162067000
        },
        {
          "date": 2020,
          "revenue": 62069279000,
          "earnings": 11851616000
        },
        {
          "date": 2021,
          "revenue": 80669971000,
          "earnings": 18344326000
        },
        {
          "date": 2022,
          "revenue": 99461712000,
          "earnings": 27630407000
        }
      ],
      "quarterly": [
        {
          "date": "1Q2022",
          "revenue": 20036040000,
          "earnings": 6660418000
        },
        {
          "date": "2Q2022",
          "revenue": 22648876000,
          "earnings": 7624532000
        },
        {
          "date": "3Q2022",
          "revenue": 24126097000,
          "earnings": 8099273000
        },
        {
          "date": "4Q2022",
          "revenue": 32650699000,
          "earnings": 5246184000
        }
      ]
    },
    "financialCurrency": "BRL"
  },
  "calendarEvents": {
    "maxAge": 1,
    "earnings": {
      "earningsDate": [
        1684177200
      ],
      "earningsAverage": 2.84,
      "earningsLow": 2.21,
      "earningsHigh": 3.13,
      "revenueAverage": 32152500000,
      "revenueLow": 29339200000,
      "revenueHigh": 33801200000
    },
    "exDividendDate": "2023-03-14T00:00:00.000Z"
  },
  "price": {
    "maxAge": 1,
    "regularMarketChangePercent": 0.02305322,
    "regularMarketChange": 0.8999977,
    "regularMarketTime": "2023-04-11T20:07:55.000Z",
    "priceHint": 2,
    "regularMarketPrice": 39.94,
    "regularMarketDayHigh": 40.13,
    "regularMarketDayLow": 39.25,
    "regularMarketVolume": 13241600,
    "averageDailyVolume10Day": 8815755,
    "averageDailyVolume3Month": 15290718,
    "regularMarketPreviousClose": 39.04,
    "regularMarketSource": "DELAYED",
    "regularMarketOpen": 39.3,
    "exchange": "SAO",
    "exchangeName": "São Paulo",
    "exchangeDataDelayedBy": 15,
    "marketState": "POSTPOST",
    "quoteType": "EQUITY",
    "symbol": "BBAS3.SA",
    "underlyingSymbol": null,
    "shortName": "BRASIL      ON      NM",
    "longName": "Banco do Brasil S.A.",
    "currency": "BRL",
    "quoteSourceName": "Delayed Quote",
    "currencySymbol": "R$",
    "fromCurrency": null,
    "toCurrency": null,
    "lastMarket": null,
    "marketCap": 113974378496
  },
  "defaultKeyStatistics": {
    "maxAge": 1,
    "priceHint": 2,
    "enterpriseValue": 625853792256,
    "forwardPE": 3.2845395,
    "profitMargins": 0.2778,
    "floatShares": 2577873103,
    "sharesOutstanding": 2853639936,
    "heldPercentInsiders": 0.5,
    "heldPercentInstitutions": 0.20382,
    "beta": 0.654477,
    "impliedSharesOutstanding": 0,
    "category": null,
    "bookValue": 55.704,
    "priceToBook": 0.7170042,
    "fundFamily": null,
    "legalType": null,
    "lastFiscalYearEnd": "2022-12-31T00:00:00.000Z",
    "nextFiscalYearEnd": "2023-12-31T00:00:00.000Z",
    "mostRecentQuarter": "2022-12-31T00:00:00.000Z",
    "earningsQuarterlyGrowth": 0.316,
    "netIncomeToCommon": 27630407680,
    "trailingEps": 12.18,
    "forwardEps": 12.16,
    "pegRatio": 0.21,
    "lastSplitFactor": "3:1",
    "lastSplitDate": "2007-06-04T00:00:00.000Z",
    "enterpriseToRevenue": 6.292,
    "52WeekChange": 0.11542857,
    "SandP52WeekChange": -0.06556982,
    "lastDividendValue": 0.352037,
    "lastDividendDate": 1678752000
  },
  "summaryProfile": {
    "address1": "EdifIcio Banco do Brasil",
    "address2": "Quadra 5, Lote B Setor de Autarquias Norte Federal District",
    "city": "Brasília",
    "state": "DF",
    "country": "Brazil",
    "phone": "55 80 0729 5285",
    "website": "https://www.bb.com.br",
    "industry": "Banks—Regional",
    "sector": "Financial Services",
    "longBusinessSummary": "Banco do Brasil S.A., together with its subsidiaries, provides banking products and services for individuals, companies, and public sectors in Brazil and internationally. The company operates through Banking, Investments, Fund Management, Insurance, Electronic Payments, and Other segments. The Banking segment offers various products and services, including deposits, loans, and other services to retail, wholesale, and public sector markets, as well as to micro-entrepreneurs. The Investments segment engages in the structuring and distribution of debts and equity instruments in primary and secondary markets; and provision of financial services. The Fund Management segment engages in the purchase, sale, and custody of securities, as well as the management of portfolios, and investment funds and clubs. The Insurance segment provides life, property, and automobile insurance products, as well as private pension and capitalization plans. The Electronic Payments segment is involved in the capturing, transmission, processing, and financial settlement of for electronic payment transactions. The Other segment engages in the provision of credit recovery and consortium management services; development, manufacturing, sale, rental, and integration of digital electronic systems, peripherals, programs, inputs, and computing supplies. Banco do Brasil S.A. was incorporated in 1808 and is headquartered in Brasília, Brazil.",
    "fullTimeEmployees": 85953,
    "companyOfficers": [],
    "maxAge": 86400
  },
  "financialData": {
    "maxAge": 86400,
    "currentPrice": 39.94,
    "targetHighPrice": 81,
    "targetLowPrice": 40,
    "targetMeanPrice": 55.93,
    "targetMedianPrice": 52,
    "recommendationMean": 2.1,
    "recommendationKey": "buy",
    "numberOfAnalystOpinions": 17,
    "totalCash": 446208868352,
    "totalCashPerShare": 78.184,
    "totalDebt": 845133840384,
    "totalRevenue": 99461709824,
    "revenuePerShare": 34.853,
    "returnOnAssets": 0.01528,
    "returnOnEquity": 0.19308001,
    "grossProfits": 98688224000,
    "operatingCashflow": -15936168960,
    "earningsGrowth": 0.329,
    "revenueGrowth": 0.367,
    "grossMargins": 0,
    "ebitdaMargins": 0,
    "operatingMargins": 0.46159,
    "profitMargins": 0.2778,
    "financialCurrency": "BRL"
  }
}

```

### Obter dados históricos

- Método: GET
- Rota: http://localhost:3333/assets?symbol=BBAS3.SA&from=2023-01-01&to=2023-02-10&type=historical

#### Parâmetros

| Parâmetro | Valor |
|-----------|-------|
| symbol    | BBAS3.SA |
| from      | 2023-01-01 |
| to        | 2023-02-10 |
| type      | historical |

#### Exemplo de retorno para o tipo "historical"

```json
[
    {
        "date": "2023-02-09T05:00:00.000Z",
        "open": 39.93,
        "high": 40.07,
        "low": 39.130001,
        "close": 39.59,
        "adjClose": 38.454269,
        "volume": 10654600,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-02-08T05:00:00.000Z",
        "open": 39.169998,
        "high": 39.950001,
        "low": 38.91,
        "close": 39.799999,
        "adjClose": 38.658241,
        "volume": 22242800,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-02-07T05:00:00.000Z",
        "open": 39.59,
        "high": 39.68,
        "low": 38.459999,
        "close": 38.880001,
        "adjClose": 37.764637,
        "volume": 12441900,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-02-06T05:00:00.000Z",
        "open": 39.07,
        "high": 39.720001,
        "low": 38.619999,
        "close": 39.419998,
        "adjClose": 38.289146,
        "volume": 13656900,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-02-03T05:00:00.000Z",
        "open": 39.650002,
        "high": 39.939999,
        "low": 38.900002,
        "close": 39.200001,
        "adjClose": 38.075459,
        "volume": 12167400,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-02-02T05:00:00.000Z",
        "open": 40.009998,
        "high": 41.150002,
        "low": 39.25,
        "close": 39.450001,
        "adjClose": 38.318283,
        "volume": 18524300,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-02-01T05:00:00.000Z",
        "open": 40.75,
        "high": 41.049999,
        "low": 39.849998,
        "close": 40.209999,
        "adjClose": 39.05648,
        "volume": 13155700,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-31T05:00:00.000Z",
        "open": 40.950001,
        "high": 41.200001,
        "low": 40.419998,
        "close": 40.700001,
        "adjClose": 39.532429,
        "volume": 14784600,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-30T05:00:00.000Z",
        "open": 40.400002,
        "high": 40.91,
        "low": 40.060001,
        "close": 40.810001,
        "adjClose": 39.639271,
        "volume": 14247900,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-27T05:00:00.000Z",
        "open": 40.919998,
        "high": 40.959999,
        "low": 39.689999,
        "close": 40.18,
        "adjClose": 39.027344,
        "volume": 12428300,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-26T05:00:00.000Z",
        "open": 40.779999,
        "high": 41.48,
        "low": 40.57,
        "close": 40.630001,
        "adjClose": 39.464436,
        "volume": 13150700,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-25T05:00:00.000Z",
        "open": 39.41,
        "high": 40.990002,
        "low": 38.869999,
        "close": 40.650002,
        "adjClose": 39.483864,
        "volume": 15233000,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-24T05:00:00.000Z",
        "open": 39.77,
        "high": 40.389999,
        "low": 39.279999,
        "close": 39.57,
        "adjClose": 38.434845,
        "volume": 16577900,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-23T05:00:00.000Z",
        "open": 40.07,
        "high": 41.25,
        "low": 39.130001,
        "close": 39.77,
        "adjClose": 38.629105,
        "volume": 29114500,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-20T05:00:00.000Z",
        "open": 39.209999,
        "high": 40.299999,
        "low": 39.110001,
        "close": 40.07,
        "adjClose": 38.920498,
        "volume": 30711200,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-19T05:00:00.000Z",
        "open": 38,
        "high": 39.32,
        "low": 37.549999,
        "close": 39.110001,
        "adjClose": 37.988041,
        "volume": 23412100,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-18T05:00:00.000Z",
        "open": 38.049999,
        "high": 38.869999,
        "low": 37.889999,
        "close": 38.240002,
        "adjClose": 37.142998,
        "volume": 23234600,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-17T05:00:00.000Z",
        "open": 35.790001,
        "high": 37.700001,
        "low": 35.540001,
        "close": 37.700001,
        "adjClose": 36.618488,
        "volume": 26060500,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-16T05:00:00.000Z",
        "open": 35.66,
        "high": 36.119999,
        "low": 35.32,
        "close": 35.610001,
        "adjClose": 34.588448,
        "volume": 9218900,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-13T05:00:00.000Z",
        "open": 35.5,
        "high": 35.849998,
        "low": 34.950001,
        "close": 35.650002,
        "adjClose": 34.6273,
        "volume": 10043500,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-12T05:00:00.000Z",
        "open": 35.57,
        "high": 35.869999,
        "low": 35.009998,
        "close": 35.57,
        "adjClose": 34.549595,
        "volume": 10086600,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-11T05:00:00.000Z",
        "open": 35.299999,
        "high": 35.849998,
        "low": 35.060001,
        "close": 35.799999,
        "adjClose": 34.772991,
        "volume": 14542400,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-10T05:00:00.000Z",
        "open": 34.5,
        "high": 35.48,
        "low": 34.330002,
        "close": 35.299999,
        "adjClose": 34.287338,
        "volume": 9654800,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-09T05:00:00.000Z",
        "open": 34.73,
        "high": 35.049999,
        "low": 34.48,
        "close": 34.709999,
        "adjClose": 33.71426,
        "volume": 10013600,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-06T05:00:00.000Z",
        "open": 34.650002,
        "high": 35.27,
        "low": 34.439999,
        "close": 35.049999,
        "adjClose": 34.04451,
        "volume": 14752300,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-05T05:00:00.000Z",
        "open": 33.290001,
        "high": 34.740002,
        "low": 33.080002,
        "close": 34.57,
        "adjClose": 33.578278,
        "volume": 16968800,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-04T05:00:00.000Z",
        "open": 32.830002,
        "high": 33.259998,
        "low": 32.560001,
        "close": 33.060001,
        "adjClose": 32.111599,
        "volume": 9759500,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-03T05:00:00.000Z",
        "open": 33.259998,
        "high": 33.400002,
        "low": 32.419998,
        "close": 32.639999,
        "adjClose": 31.703646,
        "volume": 10773700,
        "symbol": "BBAS3.SA"
    },
    {
        "date": "2023-01-02T05:00:00.000Z",
        "open": 34.220001,
        "high": 34.220001,
        "low": 32.900002,
        "close": 33.259998,
        "adjClose": 32.305859,
        "volume": 11778500,
        "symbol": "BBAS3.SA"
    }
]
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Autores

André, Thays, José, Danubia, Henrique
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENÇA -->
## License

Caso exista uma licença, adicione aqui.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contato

André - learningloopbrasil@gmail.com

Link do Projeto: [https://github.com/andrevks/ativoFinanceiro](https://github.com/andrevks/ativoFinanceiro)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/stars/DanubiaM/carteira?style=social
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DanubiaM/carteira?style=social
[forks-url]:https://img.shields.io/github/stars/DanubiaM/carteira?style=social
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[AdonisJS]: https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white
[Next-url]: https://nextjs.org/
[Adonijs-url]: https://adonisjs.com
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
