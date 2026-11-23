[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/epul2/news-image/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/epul2/news-image/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# The World in One Day — Monday 23 November 2026

One image that sums up the world's news of Monday 23 November 2026, as a newspaper
front page: the COP31 climate summit in Antalya collapsing with no deal, the AI
sell-off sinking world markets, the strike on Dymer, the Democrats' biggest House
majority since 1992, tankers ablaze near Hormuz, and the factory fire in Banten.

## How it was made

- The day's stories were gathered from the day's reporting (Reuters, WSJ and the
  day's news wires) on 23 November 2026 and checked against more than one source.
- The front page is `page.html`, rendered to `entry.png` (1024×1024, 544 KB) with
  headless Chrome. The hero illustration of the empty COP31 hall is in `assets/`.
- `main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Honesty note

Every headline and number on the page is what the day's reporting said on
23 November 2026. The hero image is an illustration of the summit hall, not a
photograph of the event.
