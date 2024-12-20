require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  test "titleが未入力ではバリデーションエラー" do
    article = Article.new
    assert_not article.save
  end

  test "enumとして不正な値の代入ではArgumentError" do
    assert_raises ArgumentError do
      Article.new(title: "sample", status: "hogehoge")
    end
  end

  test "成功" do
    article = Article.new(title: "sample")
    assert article.save
  end
end
