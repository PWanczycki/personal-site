require "test_helper"

class RegistrationsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    skip "Route disabled"
    get registration_new_url
    assert_response :success
  end

  test "should get create" do
    skip "Route disabled"
    get registration_create_url
    assert_response :success
  end
end
