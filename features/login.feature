Feature: OrangeHRM Login

    Scenario: Successful login with valid credentials
        Given I am on the OrangeHRM login page
        When I login with username "Admin" and password "admin123"
        Then I should see the dashboard

    Scenario: Login with invalid credentials
        Given I am on the OrangeHRM login page
        When I login with username "wronguser" and password "wrongpass"
        Then I should see an error message "Invalid credentials"

    Scenario: Logout from the application
        Given I am logged in with valid credentials
        When I click on the profile dropdown
        And I click on "Logout"
        Then I should be redirected to the login page
