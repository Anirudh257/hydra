(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{37:function(e){e.exports=JSON.parse('{"docs":{"getting_started":{"id":"getting_started","title":"Getting started","sidebar_label":"Getting started","description":"The core Hydra framework supports Python 2.7 and modern Python 3.","source":"@site/docs/getting_started.md","permalink":"/hydra/docs/getting_started","sidebar":"Docs","category":"About","next":"examples/minimal","previous":"intro","previous_title":"Introduction","next_title":"Minimal example"},"intro":{"id":"intro","title":"Introduction","sidebar_label":"Introduction","description":"Hydra is an experimentation framework, with the mission is to make writing, maintaining and","source":"@site/docs/intro.md","permalink":"/hydra/docs/intro","sidebar":"Docs","category":"About","next":"getting_started","next_title":"Getting started"},"examples/config_file":{"id":"examples/config_file","title":"Config file","sidebar_label":"Config file","description":"Your app evolves, and you now want to use a configuration file to make things more manageable:","source":"@site/docs/examples/config_file.md","permalink":"/hydra/docs/examples/config_file","sidebar":"Docs","category":"Basic usage","next":"examples/config_splitting","previous":"examples/logging","previous_title":"Python logging","next_title":"Splitting a configuration file"},"examples/config_splitting":{"id":"examples/config_splitting","title":"Splitting a configuration file","sidebar_label":"Splitting a configuration file","description":"As your configuration becomes more complex, you may want to split it into multiple files instead of adding to an ever","source":"@site/docs/examples/config_splitting.md","permalink":"/hydra/docs/examples/config_splitting","sidebar":"Docs","category":"Basic usage","next":"examples/config_groups","previous":"examples/config_file","previous_title":"Config file","next_title":"Config groups"},"examples/config_groups":{"id":"examples/config_groups","title":"Config groups","sidebar_label":"Config groups","description":"As you continue experimenting, you realize you want to try several different optimizers.","source":"@site/docs/examples/config_groups.md","permalink":"/hydra/docs/examples/config_groups","sidebar":"Docs","category":"Basic usage","next":"examples/sweep","previous":"examples/config_splitting","previous_title":"Splitting a configuration file","next_title":"Sweep example"},"examples/minimal":{"id":"examples/minimal","title":"Minimal example","sidebar_label":"Minimal example","description":"This is a minimal example of a Hydra app. we will evolve it slowly to show-case more Hydra features.","source":"@site/docs/examples/minimal.md","permalink":"/hydra/docs/examples/minimal","sidebar":"Docs","category":"Basic usage","next":"examples/working_directory","previous":"getting_started","previous_title":"Getting started","next_title":"Working directory"},"examples/objects":{"id":"examples/objects","title":"Creating objects","sidebar_label":"Creating objects","description":"A common pattern is to instantiate different types of objects based on the configuration, potentially passing different arguments to object.","source":"@site/docs/examples/objects.md","permalink":"/hydra/docs/examples/objects","sidebar":"Docs","category":"Basic usage","subCategory":"Advanced","next":"examples/specializing_config","previous":"examples/sweep","previous_title":"Sweep example","next_title":"Specializing configuration"},"configure_hydra/intro":{"id":"configure_hydra/intro","title":"Configuring  Hydra","sidebar_label":"Introduction","description":"Hydra comes pre-packages with sensible default configuration that covers the basic use cases.","source":"@site/docs/configure_hydra/Intro.md","permalink":"/hydra/docs/configure_hydra/intro","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/customize_logging/example","previous":"examples/specializing_config","previous_title":"Specializing configuration","next_title":"Customizing logging"},"examples/specializing_config":{"id":"examples/specializing_config","title":"Specializing configuration","sidebar_label":"Specializing configuration","description":"In some cases the desired configuration should depend on other configuraiton choices.","source":"@site/docs/examples/specializing_config.md","permalink":"/hydra/docs/examples/specializing_config","sidebar":"Docs","category":"Basic usage","subCategory":"Advanced","next":"configure_hydra/intro","previous":"examples/objects","previous_title":"Creating objects","next_title":"Configuring  Hydra"},"examples/sweep":{"id":"examples/sweep","title":"Sweep example","sidebar_label":"Sweep example","description":"Hydra supports running jobs on Slurm and Chronos using [fairtask](https://github.com/facebookresearch/fairtask)","source":"@site/docs/examples/sweep.md","permalink":"/hydra/docs/examples/sweep","sidebar":"Docs","category":"Basic usage","next":"examples/objects","previous":"examples/config_groups","previous_title":"Config groups","next_title":"Creating objects"},"examples/logging":{"id":"examples/logging","title":"Python logging","sidebar_label":"Python logging","description":"Hydra configures Python logging for your app.","source":"@site/docs/examples/logging.md","permalink":"/hydra/docs/examples/logging","sidebar":"Docs","category":"Basic usage","next":"examples/config_file","previous":"examples/working_directory","previous_title":"Working directory","next_title":"Config file"},"examples/working_directory":{"id":"examples/working_directory","title":"Working directory","sidebar_label":"Working directory","description":"Hydra manages the working directory for your app.","source":"@site/docs/examples/working_directory.md","permalink":"/hydra/docs/examples/working_directory","sidebar":"Docs","category":"Basic usage","next":"examples/logging","previous":"examples/minimal","previous_title":"Minimal example","next_title":"Python logging"},"configure_hydra/customize_logging/example":{"id":"configure_hydra/customize_logging/example","title":"Customizing logging","sidebar_label":"Customizing logging","description":"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it [here](https://docs.python.org/3/howto/logging.html).","source":"@site/docs/configure_hydra/customize_logging/README.md","permalink":"/hydra/docs/configure_hydra/customize_logging/example","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/customize_working_directory/example","previous":"configure_hydra/intro","previous_title":"Configuring  Hydra","next_title":"Customizing working directory pattern"},"configure_hydra/customize_working_directory/example":{"id":"configure_hydra/customize_working_directory/example","title":"Customizing working directory pattern","sidebar_label":"Customizing working directory pattern","description":"This example customizes the working directory in both run and sweeps using the following config snippet:","source":"@site/docs/configure_hydra/customize_working_directory/README.md","permalink":"/hydra/docs/configure_hydra/customize_working_directory/example","sidebar":"Docs","category":"Configuring Hydra","previous":"configure_hydra/customize_logging/example","previous_title":"Customizing logging"}},"docsDir":"/Users/omry/PycharmProjects/hydra/website/docs","docsSidebars":{"Docs":[{"type":"category","label":"About","items":[{"type":"doc","id":"intro"},{"type":"doc","id":"getting_started"}]},{"type":"category","label":"Basic usage","items":[{"type":"doc","id":"examples/minimal"},{"type":"doc","id":"examples/working_directory"},{"type":"doc","id":"examples/logging"},{"type":"doc","id":"examples/config_file"},{"type":"doc","id":"examples/config_splitting"},{"type":"doc","id":"examples/config_groups"},{"type":"doc","id":"examples/sweep"},{"type":"category","label":"Advanced","items":[{"type":"doc","id":"examples/objects"},{"type":"doc","id":"examples/specializing_config"}]}]},{"type":"category","label":"Configuring Hydra","items":[{"type":"doc","id":"configure_hydra/intro"},{"type":"doc","id":"configure_hydra/customize_logging/example"},{"type":"doc","id":"configure_hydra/customize_working_directory/example"}]}]},"sourceToPermalink":{"@site/docs/getting_started.md":"/hydra/docs/getting_started","@site/docs/intro.md":"/hydra/docs/intro","@site/docs/examples/config_file.md":"/hydra/docs/examples/config_file","@site/docs/examples/config_splitting.md":"/hydra/docs/examples/config_splitting","@site/docs/examples/config_groups.md":"/hydra/docs/examples/config_groups","@site/docs/examples/minimal.md":"/hydra/docs/examples/minimal","@site/docs/examples/objects.md":"/hydra/docs/examples/objects","@site/docs/configure_hydra/Intro.md":"/hydra/docs/configure_hydra/intro","@site/docs/examples/specializing_config.md":"/hydra/docs/examples/specializing_config","@site/docs/examples/sweep.md":"/hydra/docs/examples/sweep","@site/docs/examples/logging.md":"/hydra/docs/examples/logging","@site/docs/examples/working_directory.md":"/hydra/docs/examples/working_directory","@site/docs/configure_hydra/customize_logging/README.md":"/hydra/docs/configure_hydra/customize_logging/example","@site/docs/configure_hydra/customize_working_directory/README.md":"/hydra/docs/configure_hydra/customize_working_directory/example"},"permalinkToId":{"/hydra/docs/getting_started":"getting_started","/hydra/docs/intro":"intro","/hydra/docs/examples/config_file":"examples/config_file","/hydra/docs/examples/config_splitting":"examples/config_splitting","/hydra/docs/examples/config_groups":"examples/config_groups","/hydra/docs/examples/minimal":"examples/minimal","/hydra/docs/examples/objects":"examples/objects","/hydra/docs/configure_hydra/intro":"configure_hydra/intro","/hydra/docs/examples/specializing_config":"examples/specializing_config","/hydra/docs/examples/sweep":"examples/sweep","/hydra/docs/examples/logging":"examples/logging","/hydra/docs/examples/working_directory":"examples/working_directory","/hydra/docs/configure_hydra/customize_logging/example":"configure_hydra/customize_logging/example","/hydra/docs/configure_hydra/customize_working_directory/example":"configure_hydra/customize_working_directory/example"}}')}}]);