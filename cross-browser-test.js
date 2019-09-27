var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver_fx = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var driver_sf = new webdriver.Builder()
    .forBrowser('safari')
    .build();


smokeTest(driver_fx);
smokeTest(driver_chr);
smokeTest(driver_sf);

function smokeTest(driver) {
  driver.get('https://en.m.wikipedia.org/wiki?banner=enUS_mob_lg_QAtask&force=1&country=US');
  
  driver.sleep(5000).then(function() {
    driver.findElement(By.css(".frb-amounts .frb-button:nth-child(1) > .frb-label")).click();
    driver.findElement(By.css(".frb-step-1 > .frb-icon-btn")).click();
  });

  driver.sleep(5000).then(function() {
    driver.getTitle().then(function(title) {
      if(title === 'Wikipedia, the free encyclopedia') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
      setTimeout(function () {driver.quit()}, 5000)
    });
  });

  
}

