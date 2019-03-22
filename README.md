# bootcamp-simple
collaborate development for studying JS

## Project description:
Currently app should display current weater by selected region and weather forecast.

Public API: https://www.apixu.com/my/ (you can login via gihtub account)

Request to get information: `http://api.apixu.com/v1/current.json?key=XXXXXXXX&q=Paris`,
where Paris - current town, XXXXXXXX - your API key (will be displayed on your dashboard in apixu.com)

Project bundles with webpack to have ability for valid ES6 support and easier tooling.

## How to work with:

All task will be presented in issues. If you need to create an issue - you're welcome!

For example, you've found task '666 Create awesome design', so you shoud create branch, called 'task/#666-create-awesome-design'
and all commit names should contain task index in format: '#666 ... my awesome changes ...'

When you're think, job is done, create pull request your branch into develop branch and add as reviewers all team.
After at least one success review, you're able to merge it. You're have to fix all review changes before merge.

If you found a bug with implemented feature, create an issue for that and add mark it with 'bug' label.
