require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "downcases and strips email_address" do
    user = User.new(email_address: " DOWNCASED@EXAMPLE.COM ")
    assert_equal("downcased@example.com", user.email_address)
  end

  test "marks invalid if email address is nil" do
    refute(User.new(password: "password").valid?)
  end

  test "marks invalid if password is nil" do
    refute(User.new(email_address: "e@mail.com").valid?)
  end

  test "marks invalid if password is fewer than 8 characters" do
    refute(User.new(email_address: "e@mail.com", password: "short").valid?)
  end

  test "accepts admin and member values for role" do
    valid_roles = %i[admin member]
    valid_roles.each do |role|
      assert(User.new(email_address: "e@mail.com", password: "passwords", role: role).valid?)
    end
  end

  test "raises ArgumentError for non-enum roles" do
    assert_raises(ArgumentError) do
      User.new(email_address: "e@mail.com", password: "passwords", role: "bogus")
    end
  end
end
