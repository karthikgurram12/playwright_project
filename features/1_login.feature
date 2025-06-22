Feature: Login functionality

  @smoke @regression
  Scenario: Successful login with valid credentials
    Given I am on the OrangeHRM login page
    When I login with username "Admin" and password "admin123"
    Then I click on the profile dropdown
    And I click on "Logout"
    Then I should be redirected to the login page

  @smoke @regression
  Scenario: Unsuccessful login with invalid credentials
    Given I am on the OrangeHRM login page
    When I login with username "invalid" and password "invalid123"
    Then I should see an error message "Invalid credentials"
