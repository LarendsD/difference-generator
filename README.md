<h1 align="center">
  Вычислитель отличий
</h1>

[![Actions Status](https://github.com/LarendsD/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/LarendsD/backend-project-lvl2/actions)
<a href="https://codeclimate.com/github/LarendsD/backend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/4c990e456b902e949ff6/maintainability" /></a>
<a href="https://codeclimate.com/github/LarendsD/backend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/4c990e456b902e949ff6/test_coverage" /></a>
[![Build Status](https://app.travis-ci.com/LarendsD/backend-project-lvl2.svg?branch=main)](https://app.travis-ci.com/LarendsD/backend-project-lvl2)

Данная библиотека сравнивает два файла формала json или yaml и показывает их различия(Данная библиотека является локальной!).
## 🛠️ Инструкция по установке ##
1. Склонируйте данный репозиторий:
```bash
git clone https://github.com/LarendsD/backend-project-lvl2.git
```
2. Перейдите в директорию библиотеки и установите её:
```bash
npm ci
```
3. Установите библиотеку как пакет:
```bash
npm link
```
## :blue_book: Использование библиотеки ##
<h3 align="center">
  Стандартный формат
</h3>
Для использования достаточно знать пути обеих файлов для сравнения:

```bash
gendiff <filepath1> <filepath2>
```

По умолчанию результат сравнения выводится в древовидном формате:

- **Сравнение плоских json файлов**

<a href="https://asciinema.org/a/462554" target="_blank"><img src="https://asciinema.org/a/462554.svg" /></a>
- **Сравнение плоских yaml файлов**

<a href="https://asciinema.org/a/463305" target="_blank"><img src="https://asciinema.org/a/463305.svg" /></a>

- **Сравнение вложенных json файлов**

<a href="https://asciinema.org/a/465602" target="_blank"><img src="https://asciinema.org/a/465602.svg" /></a>

- **Сравнение вложенных yaml файлов**

<a href="https://asciinema.org/a/465607" target="_blank"><img src="https://asciinema.org/a/465607.svg" /></a>

<h3 align="center">
  Плоский формат
</h3>

```bash
gendiff -f plain <filepath1> <filepath2>
```

- **Пример:**

<a href="https://asciinema.org/a/467417" target="_blank"><img src="https://asciinema.org/a/467417.svg" /></a>

<h3 align="center">
  JSON формат
</h3>

```bash
gendiff -f json <filepath1> <filepath2>
```

- **Пример:**

<a href="https://asciinema.org/a/468093" target="_blank"><img src="https://asciinema.org/a/468093.svg" /></a>
