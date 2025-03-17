Feature: api setup

  Scenario: Server launches on app start
    Given an env variable "PORT" set to "3000"
    When the server is started
    Then the server listens to port 3000