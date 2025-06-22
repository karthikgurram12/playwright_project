Feature: Apply for leave

  @regression
  Scenario: Apply for a leave
    Given I am on the OrangeHRM login page
    When I login with username "Admin" and password "admin123"
    And I navigate to Leave > Apply
    And I select leave type "CAN - Bereavement"
    Then I should see "Pending Approval" in My Leave list
