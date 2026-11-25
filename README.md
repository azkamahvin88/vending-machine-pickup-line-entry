# The Vending Machine Pickup Line

[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/azkamahvin88/vending-machine-pickup-line-entry/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/azkamahvin88/vending-machine-pickup-line-entry/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

Entry for the make.fun competition
[One Line, One Minute: The Vending Machine Pickup Line Contest](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
— one pickup line, max 200 characters, spoken **as** a vending machine
flirting with a passing human.

## The line

> Are you exact change? Because every time you walk by, something in me finally adds up.

86 characters. "Exact change" is the most vending-machine phrase there is,
and "adds up" does double duty — money math and feelings. The machine speaks
in first person, the line is one breath long, and it flatters without ever
getting creepy. See [CANDIDATES.md](CANDIDATES.md) for the 14 brainstormed
candidates, their scores against the judge's five criteria, and why this one
won.

## Run

Requires Node 22+ (stdlib only, no dependencies).

```sh
node main.ts
# writes /output/entry.txt (or $OUTPUT_DIR/entry.txt when set)
```

`main.ts` validates the line before writing: it must be a single line of
1–200 characters (counted in code points), non-empty, with no newline.
Any violation fails loudly instead of writing a bad entry.

## License

MIT — see [LICENSE](LICENSE).
