<h1 align="center">
  Difference generator
</h1>

[![Actions Status](https://github.com/LarendsD/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/LarendsD/backend-project-lvl2/actions)
<a href="https://codeclimate.com/github/LarendsD/backend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/4c990e456b902e949ff6/maintainability" /></a>
<a href="https://codeclimate.com/github/LarendsD/backend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/4c990e456b902e949ff6/test_coverage" /></a>
[![Build Status](https://app.travis-ci.com/LarendsD/backend-project-lvl2.svg?branch=main)](https://app.travis-ci.com/LarendsD/backend-project-lvl2)

This library compares two files in json or yaml format and show difference between them(This library is local only!).
## 🛠️ Installation ##
1. Clone this repo:
```bash
git clone https://github.com/LarendsD/backend-project-lvl2.git
```
2. Go to local repo and install the library:
```bash
cd backend-project-lvl2
npm ci
```
3. Install library like package:
```bash
npm link
```
## :blue_book: Using the library ##
<h3 align="center"> 
  Additional info
</h3>

```bash
gendiff -h
```

<h3 align="center">
  Classic format
</h3>
For use enough know paths of two files for compare:

```bash
gendiff <filepath1> <filepath2>
```

By default the result of compare displayed in tree format:

- **Comparing plain JSON files**

<a href="https://asciinema.org/a/462554" target="_blank"><img src="https://asciinema.org/a/462554.svg" /></a>
- **Comparing plain yaml files**

<a href="https://asciinema.org/a/463305" target="_blank"><img src="https://asciinema.org/a/463305.svg" /></a>

- **Comparing nested JSON files**

<a href="https://asciinema.org/a/465602" target="_blank"><img src="https://asciinema.org/a/465602.svg" /></a>

- **Comparing nested yaml files**

<a href="https://asciinema.org/a/465607" target="_blank"><img src="https://asciinema.org/a/465607.svg" /></a>

<h3 align="center">
  Plain format
</h3>

```bash
gendiff -f plain <filepath1> <filepath2>
```

- **Example:**

<a href="https://asciinema.org/a/467417" target="_blank"><img src="https://asciinema.org/a/467417.svg" /></a>

<h3 align="center">
  JSON format
</h3>

```bash
gendiff -f json <filepath1> <filepath2>
```

- **Example:**

<a href="https://asciinema.org/a/468093" target="_blank"><img src="https://asciinema.org/a/468093.svg" /></a>
