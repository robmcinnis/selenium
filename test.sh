     #!/bin/bash
      # A sample Bash script, by Rob
      echo Starting Automated Tests!
      
      cd automated-tests/
      casperjs test kaltire-homepage.js
      casperjs test kaltire-global-search.js
      casperjs test kaltire-tire-selector.js
      casperjs test kaltire-homepage-location.js
      
      #npm install selenium-webdriver
      #nvm install 5.6
      #gem install selenium-webdriver
      
      #npm install wd-sync
      #node GoogleSearch.js
