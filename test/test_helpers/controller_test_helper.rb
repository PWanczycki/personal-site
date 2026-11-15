module ControllerTestHelper
  def assert_notice(expected_notice)
    assert_includes flash[:notice].to_s, expected_notice
  end

  def assert_alert(expected_alert)
    assert_includes flash[:alert].to_s, expected_alert
  end
end

ActionDispatch::IntegrationTest.include ControllerTestHelper
