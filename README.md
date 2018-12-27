# falcon-jekyll-theme

A simple and responsive theme for Jekyll or github-pages.

## Installation

### Jekyll

TODO:

### GitHub-Pages

Add this line to your github-pages site's `_config.yml`:

```yaml
remote_theme: danbraj/falcon-jekyll-theme
```

## Usage

### Configuration variables

#### `_config.yml`

```yaml
title: [The title of the site]
lang: [The language of the site]

default-bg-image: [Path to the image on the left]
nav: # fields of navigation
  - title: [value of a tag]
    url: [href attribute of a tag]
  - title: [...]
    url: [...]

# good idea to do
kramdown: 
  toc_levels: '2,3'
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/danbraj/falcon-jekyll-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `falcon-jekyll-theme.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

