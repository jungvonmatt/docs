---
title: 'Deep linkable layers'
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

		<script async src="{{ page.media['amp.js'].url }}"></script>
    <script async custom-element="amp-lightbox" src="{{ page.media['amp-lightbox-0.1.max.js'].url }}"></script>

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

			.tiles-list__link {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				font-size: 0;
			}

			.lightbox {
				position: absolute;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

				.lightbox--red {
					background-color: var(--color-red);
				}

				.lightbox--green {
					background-color: var(--color-green);
				}

				.lightbox--blue {
					background-color: var(--color-blue);
				}
    </style>
</head>
<body>
    <main>
			<h1>{{ header.title }}</h1>
      <p>Click one of the tiles to open a layer printing the color name without leaving the page or directly open the layers after page visit by click on one of the following links.</p>
			<p>This is implemented using a monkey-patched version of amp-lightbox. For history see <a href="https://github.com/jungvonmatt/amp.dev/issues/37">#37</a>.</p>

    	<ul class="tiles-list">
  			{% for color in ['red', 'green', 'blue'] %}
  			<li class="tiles-list__item tiles-list__item--{{ color }}">
					<a class="tiles-list__link" href="#{{ color }}" on="tap:{{ color }}.open()">{{ color }}</a>
					<amp-lightbox id="{{ color }}" layout="nodisplay" deep-linkable close-button>
						<div class="lightbox lightbox--{{ color }}">{{ color }}</div>
					</amp-lightbox>
				</li>
  			{% endfor %}
  		</ul>
    </main>
</body>
</html>