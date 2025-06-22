Feature: Admin module search functionality
  @regression
  Scenario: Search for an existing user
    Given I am on the OrangeHRM login page
    When I login with username "Admin" and password "admin123"
    And I navigate to the Admin section
    And I search for username "Admin"
    Then I should see "Admin" in the search results
