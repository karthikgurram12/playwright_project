Feature: OrangeHRM Login

  Scenario: Successful login with valid credentials
    Given I am on the OrangeHRM login page
    When I login with username "Admin" and password "admin123"
    Then I should see the dashboard
