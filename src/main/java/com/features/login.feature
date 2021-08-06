@login
Feature: JBK offline application Test

#cucumber tags are use to run specific scenario
@login
Scenario: login test

Given user should be on login page
When  user enters uname and pass
And   user clicks login button
Then  user should be on home page

@logo
Scenario: logo test

Given user should be on login page
Then  user should see JBK logo