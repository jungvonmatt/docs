---
title: 'List filter'
process:
    markdown: false
    twig: true
---
<!doctype html>
<html ⚡>
<head>
    <meta charset="utf-8">
    <title>{{ header.title }}</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1">

		<script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400|Poppins:700" rel="stylesheet">

    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <style amp-custom>
    :root {
      --color-black: #20202A;
      --color-grey: #e0e0e0;

      --color-red: #EF0000;
      --color-blue: #005AF0;
      --color-green: #00CD3C;
    }

    main {
      padding: 20px;
      max-width: 1600px;
      margin: 0 auto;
      font-family: 'Noto Sans', sans-serif;
    }

    .filter-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
    }

      .filter-list__item {

      }

        .filter-list__button {
          padding: 0 10px;
          margin-right: 5px;
          background-color: var(--color-grey);
          border: 1px solid var(--color-grey);
          border-radius: 2px;
          line-height: 2em;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .filter-list__button--active {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          background-color: white;
          border: 1px solid var(--color-black);
        }

    .tiles-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: -10px;
    }

      .tiles-list__item {
        position: relative;
        box-sizing: border-box;
        flex: 1 0 25%;
        max-width: 25%;
        padding: 10px;
      }

        .tiles-list__item--hidden {
          display: none;
        }

        .tiles-list__item:before {
          content: "";
          display: block;
          padding-bottom: 100%;
        }

        .tiles-list__item--red:before {
          background-color: var(--color-red);
        }

        .tiles-list__item--green:before {
          background-color: var(--color-green);
        }

        .tiles-list__item--blue:before {
          background-color: var(--color-blue);
        }
    </style>
</head>
<body>
    <amp-state id="nav">
        <script type="application/json">
        {
            "activeFilters": {
              "red": false,
              "green": false,
              "blue": false
            }
        }
        </script>
    </amp-state>

    <amp-bind-macro id="isFilterActive" arguments="filter" expression="activeFilters[filter] == true || values(activeFilters).indexOf(true) == -1"/>

    <main>
			<h1>{{ header.title }}</h1>
      <p>Click one ore more colors to filter the tiles.</p>
  		<ul class="filter-list">
        <li class="filter-list__item"><button class="filter-list__button filter-list__button--active" [class]="isFilterActive('red') ? 'filter-list__button filter-list__button--active' : 'filter-list__button'" on="tap:AMP.setState({'activeFilters': {'red': !activeFilters.red}})">Red</button></li>
        <li class="filter-list__item"><button class="filter-list__button filter-list__button--active" [class]="isFilterActive('green') ? 'filter-list__button filter-list__button--active' : 'filter-list__button'" on="tap:AMP.setState({'activeFilters': {'green': !activeFilters.green}})">Green</button></li>
        <li class="filter-list__item"><button class="filter-list__button filter-list__button--active" [class]="isFilterActive('blue') ? 'filter-list__button filter-list__button--active' : 'filter-list__button'" on="tap:AMP.setState({'activeFilters': {'blue': !activeFilters.blue}})">Blue</button></li>
  		</ul>

    	<ul class="tiles-list">
  			{% for iteration in range(0, 3) %}
  			{% for color in ['red', 'green', 'green', 'blue', 'blue', 'red', 'blue'] %}
  			<li class="tiles-list__item tiles-list__item--{{ color }}" [class]="isFilterActive('{{ color }}') ? 'tiles-list__item tiles-list__item--{{ color }}' : 'tiles-list__item tiles-list__item--hidden'"></li>
  			{% endfor %}
  			{% endfor %}
  		</ul>
    </main>
</body>
</html>